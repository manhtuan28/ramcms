<?php
date_default_timezone_set("Asia/Ho_Chi_Minh");

$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'ashamovie';
$table   = 'ashamovie_vod';

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) die("DB ERROR: " . $conn->connect_error);
$conn->set_charset('utf8mb4');

function logz($msg, $action = '', $movie = '') {
    $logfile = __DIR__ . '/auto_phimapi.log';
    $time = date('[Y-m-d H:i:s]');
    $movie_str = $movie ? " | Phim: $movie" : "";
    $action_str = $action ? strtoupper($action) : "";
    $line = "$time [$action_str] $msg$movie_str\n";
    file_put_contents($logfile, $line, FILE_APPEND | LOCK_EX);
}

function getEpisodeTotal($str) {
    if (is_numeric($str)) return intval($str);
    if (preg_match('/(\d+)\s*\/\s*(\d+)/', $str, $m)) return intval($m[2]);
    if (preg_match('/(\d+)/', $str, $m)) return intval($m[1]);
    if (stripos($str, 'Full') !== false) return 1;
    return 0;
}

function buildVodPlayData($episodes) {
    $vod_play_data = [];
    foreach ($episodes as $server) {
        $server_name = strtolower($server['server_name']);
        if (strpos($server_name, 'vietsub') !== false) {
            $play_from_embed = 'embed1';
            $play_from_m3u8 = 'hls1';
            $play_from_server = 'server1';
        } elseif (strpos($server_name, 'thuyết minh') !== false) {
            $play_from_embed = 'embed2';
            $play_from_m3u8 = 'hls2';
            $play_from_server = 'server2';
        } elseif (strpos($server_name, 'lồng tiếng') !== false) {
            $play_from_embed = 'embed3';
            $play_from_m3u8 = 'hls3';
            $play_from_server = 'server3';
        } else {
            continue;
        }

        $vod_embed = [];
        $vod_m3u8 = [];
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

function multi_curl_detail($urls) {
    $multiHandle = curl_multi_init();
    $curlHandles = [];
    $results = [];
    foreach ($urls as $i => $url) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        $curlHandles[$i] = $ch;
        curl_multi_add_handle($multiHandle, $ch);
    }
    $running = null;
    do {
        curl_multi_exec($multiHandle, $running);
        curl_multi_select($multiHandle);
    } while($running > 0);
    foreach ($curlHandles as $i => $ch) {
        $results[$i] = curl_multi_getcontent($ch);
        curl_multi_remove_handle($multiHandle, $ch);
        curl_close($ch);
    }
    curl_multi_close($multiHandle);
    return $results;
}

logz('===== START auto crawl =====', 'SYSTEM');

$batch_size = 10;
$total_pages = 10;

for ($page = 1; $page <= $total_pages; $page++) {
    logz("Đang crawl page $page...", "PAGE");
    $listUrl = "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=$page";
    $json = @file_get_contents($listUrl);
    if (!$json) {
        logz("Không lấy được danh sách phim trang $page", "ERROR");
        continue;
    }
    $json = mb_convert_encoding($json, 'UTF-8', 'UTF-8,ISO-8859-1');
    $data = json_decode($json, true);
    if (empty($data['items'])) {
        logz("Không có phim nào ở page $page", "WARNING");
        continue;
    }

    $batch_detail_urls = [];
    $movies_in_batch = [];

    foreach ($data['items'] as $movie) {
        $slug = $movie['slug'] ?? '';
        if (!$slug) continue;
        $batch_detail_urls[] = "https://phimapi.com/phim/$slug";
        $movies_in_batch[] = $movie;

        if (count($batch_detail_urls) == $batch_size) {
            logz("Bắt đầu batch mới với " . count($batch_detail_urls) . " phim!", "BATCH");
            $details = multi_curl_detail($batch_detail_urls);
            foreach ($details as $k => $detailJson) {
                $name = $movies_in_batch[$k]['name'] ?? 'unknown';
                $ok = process_movie_detail($movies_in_batch[$k], $detailJson, $conn, $table);
                if (!$ok) {
                    logz("Lỗi crawl phim, nghỉ 10s rồi tiếp tục!", "ERROR", $name);
                    sleep(10);
                }
            }
            $batch_detail_urls = [];
            $movies_in_batch = [];
        }
    }
    if (count($batch_detail_urls) > 0) {
        logz("Xử lý batch cuối cùng " . count($batch_detail_urls) . " phim!", "BATCH");
        $details = multi_curl_detail($batch_detail_urls);
        foreach ($details as $k => $detailJson) {
            $name = $movies_in_batch[$k]['name'] ?? 'unknown';
            $ok = process_movie_detail($movies_in_batch[$k], $detailJson, $conn, $table);
            if (!$ok) {
                logz("Lỗi crawl phim, nghỉ 10s rồi tiếp tục!", "ERROR", $name);
                sleep(10);
            }
        }
    }
}

logz('===== END auto crawl =====', 'SYSTEM');
$conn->close();

function process_movie_detail($movie, $detailJson, $conn, $table) {
    $name = $movie['name'] ?? 'unknown';

    if (empty($detailJson)) {
        logz("Không lấy được detail", "ERROR", $name);
        return false;
    }

    $detailJson = mb_convert_encoding($detailJson, 'UTF-8', 'UTF-8,ISO-8859-1');
    $detail = json_decode($detailJson, true);

    $skip_ids = [
        // Bỏ qua phim _id
    ];
    $current_id = $detail['movie']['_id'] ?? null;

    if ($current_id && in_array($current_id, $skip_ids)) {
        logz("Bỏ qua phim vì có trong danh sách skip _id", "SKIP", $name);
        return true;
    }

    if (empty($detail['movie']['name'])) {
        logz("API trả về lỗi hoặc dữ liệu không hợp lệ", "ERROR", $name);
        return false;
    }

    $m = $detail['movie'];

    $vod_play_data = !empty($detail['episodes']) ? buildVodPlayData($detail['episodes']) : [];
    $vod_play_url    = $conn->real_escape_string(implode('$$$', array_column($vod_play_data, 'play_url')));
    $vod_play_from   = $conn->real_escape_string(implode('$$$', array_column($vod_play_data, 'play_from')));
    $vod_play_server = $conn->real_escape_string(implode('$$$', array_column($vod_play_data, 'play_server')));

    $ep_total = intval($m['episode_total'] ?? 1);
    $ep_current = $conn->real_escape_string($m['episode_current'] ?? '');
    $vod_remarks = $ep_current;

    $type_id = 1;
    switch ($m['type'] ?? 'series') {
        case 'single':   $type_id = 2; break;
        case 'hoathinh': $type_id = 3; break;
        case 'tvshows':  $type_id = 4; break;
    }

    $vote_average = floatval($m['tmdb']['vote_average'] ?? 0.0);
    $api_id = $conn->real_escape_string($m['_id'] ?? '');

    $sqlCheck = "SELECT vod_id, vod_play_url, vod_remarks, type_id, vod_sub FROM $table WHERE vod_writer='$api_id' LIMIT 1";
    $rs = $conn->query($sqlCheck);

    if ($rs && $rs->num_rows > 0) {
        $row = $rs->fetch_assoc();
        $need_update = false;
        $update_data = [];
        $changed = [];

        if ($row['vod_remarks'] !== $vod_remarks || $row['vod_play_url'] !== $vod_play_url) {
            $update_data['vod_play_url']    = "'$vod_play_url'";
            $update_data['vod_play_from']   = "'$vod_play_from'";
            $update_data['vod_play_server'] = "'$vod_play_server'";
            $update_data['vod_remarks']     = "'$vod_remarks'";
            $update_data['vod_total']       = $ep_total;
            $changed[] = "Tập/Link ({$row['vod_remarks']} -> $vod_remarks)";
            $need_update = true;
        }

        if ($row['type_id'] != $type_id) {
            $update_data['type_id'] = $type_id;
            $changed[] = "Loại phim ({$row['type_id']} -> $type_id)";
            $need_update = true;
        }

        if ($row['vod_sub'] !== $m['slug']) {
            $update_data['vod_sub'] = "'" . $conn->real_escape_string($m['slug']) . "'";
            $changed[] = "Slug ({$row['vod_sub']} -> {$m['slug']})";
            $need_update = true;
        }

        if ($need_update) {
            $set_clauses = [];
            foreach ($update_data as $col => $val) {
                $set_clauses[] = "$col = $val";
            }
            $set_clauses[] = "vod_time = " . time();

            $sqlUpdate = "UPDATE $table SET " . implode(', ', $set_clauses) . " WHERE vod_id={$row['vod_id']}";
            $conn->query($sqlUpdate);
            logz("Sửa phim, các thay đổi: " . implode(', ', array_unique($changed)), "UPDATE", $name);
        } else {
            logz("Bỏ qua phim (không có gì mới để cập nhật)", "SKIP", $name);
        }
        return true;
    }

    $insert = [];
    $insert['type_id']          = $type_id;
    $insert['vod_name']         = $conn->real_escape_string($m['name']);
    $insert['vod_sub']          = $conn->real_escape_string($m['slug']);
    $insert['vod_en']           = $conn->real_escape_string($m['origin_name'] ?? '');
    $insert['vod_status']       = 1;
    $insert['vod_letter']       = strtoupper(mb_substr($m['slug'], 0, 1));
    $insert['vod_tag']          = $conn->real_escape_string(($m['name'] ?? '') . ',' . ($m['origin_name'] ?? ''));
    $insert['vod_class']        = $conn->real_escape_string(implode(',', array_column($m['category'] ?? [], 'name')));
    $insert['vod_pic']          = $conn->real_escape_string($m['poster_url'] ?? '');
    $insert['vod_pic_thumb']    = $conn->real_escape_string($m['thumb_url'] ?? '');
    $insert['vod_pic_slide']    = $conn->real_escape_string($m['poster_url'] ?? '');
    $insert['vod_actor']        = $conn->real_escape_string(implode(',', $m['actor'] ?? []));
    $insert['vod_director']     = $conn->real_escape_string(implode(',', $m['director'] ?? []));
    $insert['vod_writer']       = $api_id;
    $insert['vod_remarks']      = $vod_remarks;
    $insert['vod_total']        = $ep_total;
    $insert['vod_area']         = $conn->real_escape_string(implode(',', array_column($m['country'] ?? [], 'name')));
    $insert['vod_lang']         = $conn->real_escape_string($m['lang'] ?? '');
    $insert['vod_year']         = $conn->real_escape_string($m['year'] ?? '');
    $insert['vod_version']      = $conn->real_escape_string($m['quality'] ?? '');
    $insert['vod_level']        = (isset($m['chieurap']) && $m['chieurap']) ? 9 : 0;
    $insert['vod_hits']         = rand(100, 500);
    $insert['vod_duration']     = $conn->real_escape_string($m['time'] ?? '');
    $insert['vod_score']        = $vote_average;
    $insert['vod_time']         = time();
    $insert['vod_time_add']     = time();
    $insert['vod_douban_id']    = intval($m['tmdb']['id'] ?? 0);
    $insert['vod_douban_score'] = floatval($m['tmdb']['vote_average'] ?? 0.0);
    $insert['vod_content']      = $conn->real_escape_string(strip_tags($m['content'] ?? ''));
    $insert['vod_play_from']    = $vod_play_from;
    $insert['vod_play_server']  = $vod_play_server;
    $insert['vod_play_note']    = '$$$';
    $insert['vod_play_url']     = $vod_play_url;

    $defaults = [
        'type_id_1' => 0, 'group_id' => 0, 'vod_color' => '', 'vod_behind' => '', 'vod_blurb' => '',
        'vod_pubdate' => '', 'vod_serial' => '0', 'vod_tv' => '', 'vod_weekday' => '', 'vod_state' => '',
        'vod_author' => '', 'vod_jumpurl' => '', 'vod_tpl' => '', 'vod_tpl_play' => '', 'vod_tpl_down' => '',
        'vod_isend' => 0, 'vod_lock' => 0, 'vod_copyright' => 0, 'vod_points' => 0, 'vod_points_play' => 0,
        'vod_points_down' => 0, 'vod_hits_day' => 0, 'vod_hits_week' => 0, 'vod_hits_month' => 0,
        'vod_up' => 0, 'vod_down' => 0, 'vod_score_all' => 0, 'vod_score_num' => 0, 'vod_time_hits' => 0,
        'vod_time_make' => 0, 'vod_trysee' => 0, 'vod_reurl' => '', 'vod_rel_vod' => '', 'vod_rel_art' => '',
        'vod_pwd' => '', 'vod_pwd_url' => '', 'vod_pwd_play' => '', 'vod_pwd_play_url' => '', 'vod_pwd_down' => '',
        'vod_pwd_down_url' => '', 'vod_down_from' => '', 'vod_down_server' => '', 'vod_down_note' => '',
        'vod_down_url' => '', 'vod_plot' => 0, 'vod_plot_name' => '', 'vod_plot_detail' => ''
    ];
    $insert = array_merge($defaults, $insert);

    $cols = implode('`,`', array_keys($insert));
    $vals = implode("','", array_values($insert));
    $sql = "INSERT INTO `$table` (`$cols`) VALUES ('$vals')";

    if ($conn->query($sql)) {
        logz("Thêm phim mới thành công", "INSERT", $name);
    } else {
        logz("Lỗi khi thêm phim mới: " . $conn->error, "ERROR", $name);
        return false;
    }

    return true;
}

?>