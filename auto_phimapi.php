<?php
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'ashamovie';
$table   = 'tuancute_vod';

// 1. Kết nối DB chuẩn UTF-8
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) die("DB ERROR: " . $conn->connect_error);
// Ép charset đúng chuẩn full tiếng Việt/emoji
$conn->set_charset('utf8mb4');

// 2. Hàm chuẩn hóa số tập từ remarks hoặc episode_total
function getEpisodeTotal($str) {
    if (is_numeric($str)) return intval($str);
    if (preg_match('/(\d+)\s*\/\s*(\d+)/', $str, $m)) return intval($m[2]);
    if (preg_match('/(\d+)/', $str, $m)) return intval($m[1]);
    if (stripos($str, 'Full') !== false) return 1;
    return 0;
}

// 3. Hàm build play_url, play_from, play_server CHUẨN hệ thống
function buildVodPlayData($episodes) {
    $vod_play_data = [];
    foreach ($episodes as $server) {
        $play_from_embed = '';
        $play_from_m3u8 = '';
        $play_from_server = '';
        $vod_embed = [];
        $vod_m3u8 = [];

        $server_name = $server['server_name'];
        if (stripos($server_name, 'Thuyết Minh') !== false || stripos($server_name, 'Lồng Tiếng') !== false) {
            $play_from_embed = 'embed7';
            $play_from_m3u8 = 'hls7';
            $play_from_server = 'server0';
        } elseif (strpos($server_name, '[SV #1]') !== false) {
            $play_from_embed = 'embed1';
            $play_from_m3u8 = 'hls1';
            $play_from_server = 'server1';
        } elseif (strpos($server_name, '[SV #2]') !== false) {
            $play_from_embed = 'embed2';
            $play_from_m3u8 = 'hls2';
            $play_from_server = 'server2';
        } elseif (strpos($server_name, '[SV #3]') !== false) {
            $play_from_embed = 'embed3';
            $play_from_m3u8 = 'hls3';
            $play_from_server = 'server3';
        } elseif (strpos($server_name, '[SV #4]') !== false) {
            $play_from_embed = 'embed4';
            $play_from_m3u8 = 'hls4';
            $play_from_server = 'server4';
        } elseif (strpos($server_name, '[SV #5]') !== false) {
            $play_from_embed = 'embed5';
            $play_from_m3u8 = 'hls5';
            $play_from_server = 'server5';
        } elseif (strpos($server_name, '[SV #6]') !== false) {
            $play_from_embed = 'embed6';
            $play_from_m3u8 = 'hls6';
            $play_from_server = 'server6';
        } else {
            $play_from_embed = 'embed1';
            $play_from_m3u8 = 'hls1';
            $play_from_server = 'server1';
        }

        foreach ($server['server_data'] as $episode) {
            if (!empty($episode["link_m3u8"])) {
                $vod_m3u8[] = $episode["name"] . '$' . $episode["link_m3u8"];
            }
            if (!empty($episode["link_embed"])) {
                $vod_embed[] = $episode["name"] . '$' . $episode["link_embed"];
            }
        }

        if (!empty($vod_m3u8)) {
            $vod_play_data[] = [
                'play_url' => implode('#', $vod_m3u8),
                'play_from' => $play_from_m3u8,
                'play_server' => $play_from_server
            ];
        }
        if (!empty($vod_embed)) {
            $vod_play_data[] = [
                'play_url' => implode('#', $vod_embed),
                'play_from' => $play_from_embed,
                'play_server' => $play_from_server
            ];
        }
    }
    return $vod_play_data;
}

// 4. Log đẹp, luôn đúng UTF-8
function logz($msg, $emoji='') {
    echo "$emoji " . date('[H:i:s] ') . "$msg\n";
}

function slugify($str, $delimiter = '-') {
    $str = mb_strtolower($str, 'UTF-8');
    $str = preg_replace('/[^a-z0-9\s-]/u', '', $str);
    $str = preg_replace('/[\s-]+/', ' ', $str);
    $str = trim($str);
    $str = preg_replace('/\s+/', $delimiter, $str);
    return $str;
}

// 5. ĐẢM BẢO TABLE, DB đều utf8mb4_unicode_ci
//    Nếu chưa chuẩn, chạy trên phpMyAdmin hoặc MySQL CLI:
//    ALTER TABLE tuancute_vod CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

for ($page = 1; $page <= 5; $page++) {
    $listUrl = "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=$page";
    $json = @file_get_contents($listUrl);
    if (!$json) continue;

    // Fix encoding cho chắc
    $json = mb_convert_encoding($json, 'UTF-8', 'UTF-8,ISO-8859-1');
    $data = json_decode($json, true);
    if (empty($data['items'])) continue;
    foreach ($data['items'] as $movie) {
        $slug = $movie['slug'] ?? '';
        if (!$slug) continue;

        $vod_name = $conn->real_escape_string($movie['name']);
        $vod_year = $conn->real_escape_string($movie['year'] ?? '');

        $sqlCheck = "SELECT vod_id, vod_play_url, vod_remarks, vod_total FROM $table WHERE vod_name='$vod_name' AND vod_year='$vod_year' LIMIT 1";
        $rs = $conn->query($sqlCheck);

        $detailUrl = "https://phimapi.com/phim/$slug";
        $detailJson = @file_get_contents($detailUrl);
        if (!$detailJson) continue;

        // Fix encoding ở detail luôn
        $detailJson = mb_convert_encoding($detailJson, 'UTF-8', 'UTF-8,ISO-8859-1');
        $detail = json_decode($detailJson, true);
        if (empty($detail['movie']['name'])) continue;
        $m = $detail['movie'];

        $vod_play_data = !empty($detail['episodes']) ? buildVodPlayData($detail['episodes']) : [];
        $vod_play_url    = implode('$$$', array_column($vod_play_data, 'play_url'));
        $vod_play_from   = implode('$$$', array_column($vod_play_data, 'play_from'));
        $vod_play_server = implode('$$$', array_column($vod_play_data, 'play_server'));

        $ep_total = intval($m['episode_total'] ?? 1);
        $ep_current = $m['episode_current'] ?? '';
        $vod_remarks = ($ep_total > 1) ? "Hoàn Tất ($ep_total/$ep_total)" : $ep_current;

        // ==== UPDATE nếu đã có phim ====
        if ($rs && $rs->num_rows > 0) {
            $row = $rs->fetch_assoc();
            $old_play_url = $row['vod_play_url'];
            $old_remarks = $row['vod_remarks'];
            $old_total = intval($row['vod_total']);
            if (!$old_total) $old_total = getEpisodeTotal($old_remarks);

            // So sánh số tập
            if ($ep_total > $old_total) {
                $sqlUpdate = "UPDATE $table SET vod_play_url='$vod_play_url', vod_play_from='$vod_play_from', vod_play_server='$vod_play_server', vod_remarks='$vod_remarks', vod_total=$ep_total WHERE vod_id={$row['vod_id']}";
                $conn->query($sqlUpdate);
                logz("Cập nhật phim: {$m['name']} | Số tập: $old_total ➡️ $ep_total | Đã thêm tập mới!", "🔄");
            } elseif ($old_play_url != $vod_play_url) {
                $sqlUpdate = "UPDATE $table SET vod_play_url='$vod_play_url', vod_play_from='$vod_play_from', vod_play_server='$vod_play_server' WHERE vod_id={$row['vod_id']}";
                $conn->query($sqlUpdate);
                logz("Update link phim: {$m['name']} | Số tập không đổi: $ep_total | Đổi play_url!", "🔁");
            } else {
                logz("Bỏ qua phim: {$m['name']} | Đã đủ tập: $ep_total", "⏩");
            }
            continue;
        }

        // ==== INSERT mới nếu chưa có phim ====
        $insert = [];
        $insert['type_id']      = 1;
        $insert['type_id_1']    = 0;
        $insert['group_id']     = 0;
        $insert['vod_name']     = $conn->real_escape_string($m['name']);
        $insert['vod_sub']      = $conn->real_escape_string(slugify($m['name']));
        $insert['vod_en']       = $conn->real_escape_string($m['origin_name'] ?? '');
        $insert['vod_status']   = 1;
        $insert['vod_letter']   = strtoupper(mb_substr(slugify($m['name'], ' '), 0, 1));
        $insert['vod_color']    = '';
        $insert['vod_tag']      = $conn->real_escape_string(($m['name']??'') . ',' . ($m['origin_name']??''));
        $insert['vod_class']    = $conn->real_escape_string(implode(',', array_column($m['category'] ?? [], 'name')));
        $insert['vod_pic']      = $conn->real_escape_string($m['poster_url'] ?? '');
        $insert['vod_pic_thumb']= $conn->real_escape_string($m['poster_url'] ?? '');
        $insert['vod_pic_slide']= $conn->real_escape_string($m['thumb_url'] ?? '');
        $insert['vod_actor']    = $conn->real_escape_string(implode(',', $m['actor'] ?? []));
        $insert['vod_director'] = $conn->real_escape_string(implode(',', $m['director'] ?? []));
        $insert['vod_writer']   = $conn->real_escape_string($m['_id'] ?? '');
        $insert['vod_behind']   = '';
        $insert['vod_blurb']    = '';
        $insert['vod_remarks']  = $conn->real_escape_string($vod_remarks);
        $insert['vod_pubdate']  = '';
        $insert['vod_total']    = $ep_total;
        $insert['vod_serial']   = '0';
        $insert['vod_tv']       = '';
        $insert['vod_weekday']  = $conn->real_escape_string($m['showtimes'] ?? '');
        $insert['vod_area']     = $conn->real_escape_string(implode(',', array_column($m['country'] ?? [], 'name')));
        $insert['vod_lang']     = $conn->real_escape_string($m['lang'] ?? '');
        $insert['vod_year']     = $conn->real_escape_string($m['year'] ?? '');
        $insert['vod_version']  = $conn->real_escape_string($m['quality'] ?? '');
        $insert['vod_state']    = '';
        $insert['vod_author']   = '';
        $insert['vod_jumpurl']  = '';
        $insert['vod_tpl']      = '';
        $insert['vod_tpl_play'] = '';
        $insert['vod_tpl_down'] = '';
        $insert['vod_isend']    = 0;
        $insert['vod_lock']     = 0;
        $insert['vod_level']    = isset($m['chieurap']) && $m['chieurap'] ? 9 : 0;
        $insert['vod_copyright']= 0;
        $insert['vod_points']   = 0;
        $insert['vod_points_play'] = 0;
        $insert['vod_points_down'] = 0;
        $insert['vod_hits']     = 0;
        $insert['vod_hits_day'] = 0;
        $insert['vod_hits_week']= 0;
        $insert['vod_hits_month']=0;
        $insert['vod_duration'] = $conn->real_escape_string($m['time'] ?? '');
        $insert['vod_up']       = 0;
        $insert['vod_down']     = 0;
        $insert['vod_score']    = 0.0;
        $insert['vod_score_all']= 0;
        $insert['vod_score_num']= 0;
        $insert['vod_time']     = time();
        $insert['vod_time_add'] = time();
        $insert['vod_time_hits']= 0;
        $insert['vod_time_make']= 0;
        $insert['vod_trysee']   = 0;
        $insert['vod_douban_id']= intval($m['tmdb']['id'] ?? 0);
        $insert['vod_douban_score'] = floatval($m['tmdb']['vote_average'] ?? 0.0);
        $insert['vod_reurl']    = '';
        $insert['vod_rel_vod']  = '';
        $insert['vod_rel_art']  = '';
        $insert['vod_pwd']      = '';
        $insert['vod_pwd_url']  = '';
        $insert['vod_pwd_play'] = '';
        $insert['vod_pwd_play_url'] = '';
        $insert['vod_pwd_down'] = '';
        $insert['vod_pwd_down_url'] = '';
        $insert['vod_content']  = $conn->real_escape_string(strip_tags($m['content'] ?? ''));
        $insert['vod_play_from']   = $conn->real_escape_string($vod_play_from);
        $insert['vod_play_server'] = $conn->real_escape_string($vod_play_server);
        $insert['vod_play_note']   = '$$$';
        $insert['vod_play_url']    = $conn->real_escape_string($vod_play_url);
        $insert['vod_down_from']   = '';
        $insert['vod_down_server'] = '';
        $insert['vod_down_note']   = '';
        $insert['vod_down_url']    = '';
        $insert['vod_plot']        = 0;
        $insert['vod_plot_name']   = '';
        $insert['vod_plot_detail'] = '';

        $cols = implode(',', array_keys($insert));
        $vals = implode(',', array_map(function($v) { return "'$v'"; }, $insert));
        $sql = "INSERT INTO `$table` ($cols) VALUES ($vals)";
        $conn->query($sql);
        logz("Thêm mới phim: {$m['name']} | $vod_remarks | Tổng số tập: $ep_total", "🎬");
        usleep(350000);
    }
}

$conn->close();
?>
