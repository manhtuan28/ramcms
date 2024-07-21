<?php

define('ROOT_PATH', __DIR__ . '/');
define('APP_PATH', __DIR__ . '/application/');
define('MAC_COMM', __DIR__.'/application/common/common/');
define('MAC_HOME_COMM', __DIR__.'/application/index/common/');
define('MAC_ADMIN_COMM', __DIR__.'/application/admin/common/');
function mac_curl_get($url, $headers = [], $cookie = '')
{
    $ch = curl_init();

    curl_setopt_array($ch, [
        CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_TIMEOUT => 60,
        CURLOPT_HEADER => false,
        CURLOPT_REFERER => $url,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_SSL_VERIFYHOST => 2, // Chỉnh sửa giá trị này theo tài liệu cURL mới nhất.
    ]);

    if (!empty($cookie)) {
        curl_setopt($ch, CURLOPT_COOKIE, $cookie);
    }

    if (!empty($headers)) {
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    }

    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
function mac_filter_tags($rs)
{
    $rex = array('{:','<script','<iframe','<frameset','<object','onerror');
    if(is_array($rs)){
        foreach($rs as $k2=>$v2){
            if(!is_numeric($v2)){
                $rs[$k2] = str_ireplace($rex,'*',$rs[$k2]);
            }
        }
    }
    else{
        if(!is_numeric($rs)){
            $rs = str_ireplace($rex,'*',$rs);
        }
    }
    return $rs;
}


class MovieCron {
    protected function add_movie($title, $year, $ophim_id, $sourcePage, $filterType = [], $filterCategory = [])
    {
        try {
            // Lọc theo loại phim
            if (!empty($filterType) && in_array($sourcePage["movie"]["type"], $filterType)) {
                return json_encode(array(
                    'status' => true,
                    'msg' => "Bỏ qua loại phim",
                ));
            }

            // Lọc thể loại phim
            if (!empty($filterCategory)) {
                $movieCategories = array_column($sourcePage["movie"]["category"], 'slug');
                $intersectCategories = array_intersect($movieCategories, $filterCategory);
                if (!empty($intersectCategories)) {
                    return json_encode(array(
                        'status' => true,
                        'msg' => "Bỏ qua thể loại phim",
                    ));
                }
            }

            $where = [];
            $where['vod_name'] = mac_filter_xss($title);
            $where['vod_year'] = $year;
            $where['vod_writer'] = $ophim_id;
            $info = model('Vod')->where($where)->find();

            $vod_search = model('VodSearch');
            $vod_search_enabled = $vod_search->isCollectEnabled();
            $vod_id = "";

            if (!$info) {
                $data = $this->create_data($sourcePage, $ophim_id, 'i');

                $vod_id = model('Vod')->insert($data, false, true);
                if ($vod_id > 0) {
                    $vod_search_enabled && $vod_search->checkAndUpdateTopResults(['vod_id' => $vod_id] + $data, true);
                    $des = lang('model/collect/add_ok');
                } else {
                    $des = 'Vod insert failed';
                }

            } else {
                $data = $this->create_data($sourcePage, $ophim_id, 'u');

                $vod_id = $info['vod_id'];
                $where = [];
                $where['vod_id'] = $info['vod_id'];
                $update = VodValidate::formatDataBeforeDb($data);
                $res = model('Vod')->where($where)->update($update);
            }

            $result = array(
                'status' => true,
                'msg' => 'Done',
                'post_id' => $vod_id,
            );
            return json_encode($result);
        } catch (\Throwable $th) {
            $result = array(
                'status' => false, 
                'post_id' => $vod_id,
                'msg' => "Crawl error: " . $th,
            );
            return json_encode($result);
        }
    } 

    protected function create_data($sourcePage, $ophim_id, $flag)
    {
        if($sourcePage["movie"]["type"] == "single") {
            $type_name = "phim lẻ";
        } elseif ($sourcePage["movie"]["type"] == "hoathinh") {
            $type_name = "hoạt hình";
        } elseif ($sourcePage["movie"]["type"] == "tvshows") {
            $type_name = "tv shows";
        } elseif ($sourcePage["movie"]["type"] == "series") {
            $type_name = "phim bộ";
        }
        $type_id = 1;
        $type_id_1 = 0;
        $type_list = model('Type')->getCache('type_list');
        foreach ( $type_list as $key => $val ) {
            if ( hash_equals($type_name, strtolower($val['type_name'])) ) {
                $type_id = $val['type_id'];
                $type_id_1 = $val['type_pid'];
            }
        }
    
        $arrCat = [];
        foreach ($sourcePage["movie"]["category"] as $key => $value) {
            array_push($arrCat, $value["name"]);
        }
        if($sourcePage["movie"]["chieurap"] == true) {
            array_push($arrCat, "Chiếu Rạp");
        }
        if($sourcePage["movie"]["type"] == "hoathinh") {
            array_push($arrCat, "Hoạt Hình");
        }
        if($sourcePage["movie"]["type"] == "tvshows") {
            array_push($arrCat, "TV Shows");
        }
    
        $arrCountry 	= [];
        foreach ($sourcePage["movie"]["country"] as $key => $value) {
            array_push($arrCountry, $value["name"]);
        }
    
        $arrTags 			= [];
        array_push($arrTags, $sourcePage["movie"]["name"]);
        if($sourcePage["movie"]["name"] != $sourcePage["movie"]["origin_name"]) array_push($arrTags, $sourcePage["movie"]["origin_name"]);

        if($flag == 'i') {
            $thumb_url = $sourcePage["movie"]["thumb_url"];
            $poster_url = $sourcePage["movie"]["poster_url"];
            if (strpos($poster_url, 'img.phimapi.com') !== false) { // Do thằng KKphim nó sắp xếp ngược với các nguồn khác =))
                $vod_pic = $this->syncImagesThumb(1, $poster_url)['pic'];
                $vod_pic_slide = $this->syncImagesPoster(1, $thumb_url)['pic'];
            } else {
                $vod_pic = $this->syncImagesThumb(1, $thumb_url)['pic'];
                $vod_pic_slide = $this->syncImagesPoster(1, $poster_url)['pic'];
            }
        }
    
        $vod_play_data = $this->play_list($sourcePage["episodes"]);
        $vod_douban_id = $sourcePage["movie"]["tmdb"]["id"] ?? '';
        $vod_douban_score = $sourcePage["movie"]["tmdb"]["vote_average"] ?? '';        
        $vod_level = ($sourcePage["movie"]["chieurap"] ?? false) === true ? '9' : '0';
    
        $data = array(
            'type_id' => $type_id,
            'type_id_1' => $type_id_1,
            'vod_name' => $sourcePage["movie"]["name"],
            'vod_sub' => $this->slugify($sourcePage["movie"]["name"], '-'),
            'vod_en' => $sourcePage["movie"]["origin_name"],
            'vod_status' => 1,
            'vod_letter' => strtoupper(substr($this->slugify($sourcePage["movie"]["name"], ' '),0,1)),
            'vod_tag' => implode(",", $arrTags),
            'vod_class' => implode(",", $arrCat),
            'vod_actor' => implode(',', $sourcePage["movie"]["actor"]),
            'vod_director' => implode(',', $sourcePage["movie"]["director"]),
            'vod_writer' => $ophim_id,
            'vod_remarks' => $sourcePage["movie"]["episode_current"],
            'vod_weekday' => $sourcePage["movie"]["showtimes"],
            'vod_level' => $vod_level,
            'vod_area' => implode(",", $arrCountry),
            'vod_lang' => $sourcePage["movie"]["lang"],
            'vod_year' => $sourcePage["movie"]["year"],
            'vod_version' => $sourcePage["movie"]["quality"],
            'vod_duration' => $sourcePage["movie"]["time"],
            'vod_douban_id' => $vod_douban_id,
            'vod_douban_score' => $vod_douban_score,
            'vod_time' => time(),
            'vod_time_add' => time(),
            'vod_content' => preg_replace('/\\r?\\n/s', '', $sourcePage["movie"]["content"]),
            'vod_play_url' => implode('$$$', array_column($vod_play_data, 'play_url')),
            'vod_down_url' => '',
            'vod_plot_name' => '',
            'vod_plot_detail' => '',
            'vod_pic' => $vod_pic,
            'vod_pic_thumb' => $vod_pic,
            'vod_pic_slide' => $vod_pic_slide,
            'vod_play_from' => implode('$$$', array_column($vod_play_data, 'play_from')),
            'vod_play_server' => implode('$$$', array_column($vod_play_data, 'play_server')),
            'vod_play_note' => '$$$'
        );
    
        if($sourcePage["movie"]["status"] == 'trailer') {
            $data['vod_play_from'] = '';
            $data['vod_play_server'] = '';
            $data['vod_play_note'] = '';
        }
    
        if($flag == 'u') {
            unset($data['vod_pic']);
            unset($data['vod_pic_thumb']);
            unset($data['vod_pic_slide']);
        }
    
        return $data;
    }

    protected function play_list($episodes)
    {
        $vod_play_data = [];

        foreach ($episodes as $server) {
            $play_from_embed = '';
            $play_from_m3u8 = '';
            $vod_embed = [];
            $vod_m3u8 = [];
            if (stripos($server['server_name'], '[NC] Thuyết Minh') !== false || stripos($server['server_name'], '[NC] Lồng Tiếng') !== false) {
                $play_from_embed = 'thuyetminh';
                $play_from_m3u8 = 'thuyetminhm3u8';
                $play_from_server = 'server0';
            } elseif (stripos($server['server_name'], '[OP] Thuyết Minh') !== false || stripos($server['server_name'], '[OP] Lồng Tiếng') !== false) {
                $play_from_embed = 'thuyetminh';
                $play_from_m3u8 = 'thuyetminhm3u8';
                $play_from_server = 'server1';
            } elseif (stripos($server['server_name'], '[KK] Thuyết Minh') !== false || stripos($server['server_name'], '[KK] Lồng Tiếng') !== false) {
                $play_from_embed = 'thuyetminh';
                $play_from_m3u8 = 'thuyetminhm3u8';
                $play_from_server = 'server3';
            } elseif (strpos($server['server_name'], '[NC]') !== false) {
                $play_from_embed = 'nguonc';
                // $play_from_m3u8 = 'nguoncm3u8'; // Tắt thằng mặt lồn nguồnc hls này
                $play_from_server = 'server2';
            } elseif (strpos($server['server_name'], '[OP]') !== false) {
                $play_from_embed = 'ophim';
                $play_from_m3u8 = 'ophimm3u8';
                $play_from_server = 'server1';
            } elseif (strpos($server['server_name'], '[KK]') !== false) {
                $play_from_embed = 'kkphim';
                $play_from_m3u8 = 'kkphimm3u8';
                $play_from_server = 'server3';
            } elseif (stripos($server['server_name'], 'Thuyết Minh') !== false || stripos($server['server_name'], 'Lồng Tiếng') !== false) {
                $play_from_embed = 'thuyetminh';
                $play_from_m3u8 = 'thuyetminhm3u8';
                $play_from_server = 'server0';
            } elseif (strpos($server['server_name'], '#1') !== false) {
                $play_from_embed = 'thuongduphong1';
                $play_from_m3u8 = 'thuong1';
                $play_from_server = 'server0';
            } elseif (strpos($server['server_name'], '#2') !== false) {
                $play_from_embed = 'thuongduphong2';
                $play_from_m3u8 = 'thuong2';
                $play_from_server = 'server0';
            } elseif (strpos($server['server_name'], '[VIP]') !== false || strpos($server['server_name'], '[APII]') !== false) {
                $play_from_embed = 'vipapii';
                $play_from_m3u8 = 'vipapiim3u8';
                $play_from_server = 'server4';
            } else {
                $play_from_embed = 'thuongduphong1';
                $play_from_m3u8 = 'thuong1';
                $play_from_server = 'server0';
            }

            // Xử lý server_data
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

    protected function upload_image($url, $name, $year, $flag)
    {
        $ext = pathinfo(parse_url($url, PHP_URL_PATH), PATHINFO_EXTENSION);
        $_save_path = 'upload/vod/' . date('Ymd') . '/';
        if(!file_exists($_save_path)){
            mac_mkdirss($_save_path);
        }

        $_save_name = $this->slugify($name) . "-" . $flag . $year . "." . $ext;
        file_put_contents($_save_path.$_save_name, file_get_contents($url));

        return $_save_path.$_save_name;
    }

    protected function syncImages($pic_status, $pic_url, $flag = 'vod')
    {
        $img_url_downloaded = $pic_url;
        if ($pic_status == 1) {
            $config = (array)config('maccms.upload');
            $img_url_downloaded = model('Image')->down_load($pic_url, $config, $flag);
        }
        return ['pic' => $img_url_downloaded];
    }

    
    protected function syncImagesThumb($pic_status, $pic_url, $flag = 'vod')
    {
        $img_url_downloaded = $pic_url;
        if ($pic_status == 1) {
            $config = (array)config('maccms.upload');
            $img_url_downloaded = model('Image')->down_load($pic_url, $config, $flag);

            $img_data = file_get_contents($img_url_downloaded);
            $image = imagecreatefromstring($img_data);

            if ($image !== false) {
                $resized_image = imagescale($image, 400, 520);

                $ext = pathinfo(parse_url($img_url_downloaded, PHP_URL_PATH), PATHINFO_EXTENSION);
                $img_url_downloaded = str_replace(".$ext", ".webp", $img_url_downloaded);

                imagewebp($resized_image, $img_url_downloaded, 85);

                imagedestroy($image);
                imagedestroy($resized_image);
            }
        }
        return ['pic' => $img_url_downloaded];
    }


    protected function syncImagesPoster($pic_status, $pic_url, $flag = 'vod')
    {
        $img_url_downloaded = $pic_url;
        if ($pic_status == 1) {
            $config = (array)config('maccms.upload');
            $img_url_downloaded = model('Image')->down_load($pic_url, $config, $flag);

            $img_data = file_get_contents($img_url_downloaded);
            $image = imagecreatefromstring($img_data);

            if ($image !== false) {
                $resized_image = imagescale($image, 1200, 800);

                $ext = pathinfo(parse_url($img_url_downloaded, PHP_URL_PATH), PATHINFO_EXTENSION);
                $img_url_downloaded = str_replace(".$ext", ".webp", $img_url_downloaded);

                imagewebp($resized_image, $img_url_downloaded, 85);

                imagedestroy($image);
                imagedestroy($resized_image);
            }
        }
        return ['pic' => $img_url_downloaded];
    }





    protected function slugify($str, $divider = '-')
    {
        $str = trim(mb_strtolower($str));
        $str = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/', 'a', $str);
        $str = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/', 'e', $str);
        $str = preg_replace('/(ì|í|ị|ỉ|ĩ)/', 'i', $str);
        $str = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $str);
        $str = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $str);
        $str = preg_replace('/(ỳ|ý|ỵ|ỷ|ỹ)/', 'y', $str);
        $str = preg_replace('/(đ)/', 'd', $str);
        $str = preg_replace('/[^a-z0-9-\s]/', '', $str);
        $str = preg_replace('/([\s]+)/', $divider, $str);
        return $str;
    }

    public function crawl_apiiphim_page($url) {
        $html = mac_curl_get($url);
        if(empty($html)){
            return ['code'=>1001, 'msg'=>'Không lấy được HTML từ URL: ' . $url];
        }
        $html = mac_filter_tags($html);
        $sourcePage = json_decode($html, true);
        $listMovies = [];

        if(count($sourcePage['items']) > 0) {
            foreach ($sourcePage['items'] as $item) {
                array_push($listMovies, [
                    'slug' => $item['slug'],
                    'id' => $item['_id'],
                    'modified_time' => $item['modified']['time'],
                    'name' => $item['name'],
                    'origin_name' => $item['origin_name'],
                    'year' => $item['year']
                ]);
            }
            return $listMovies;
        } else {
            return [];
        }
    }

    public function crawl_apiiphim_movies($data_post, $filterType = [], $filterCategory = []) {
        $url = "https://apii.online/apii/phim/{$data_post['slug']}";
        $apiiphim_id = $data_post['id'];
        $title = $data_post['name'];
        $year = $data_post['year'];

        $html = mac_curl_get($url);
        $html = mac_filter_tags($html);
        $sourcePage = json_decode($html, true);

        if (isset($sourcePage['status']) && $sourcePage['status'] === false) {
            return [
                'status' => false,
                'msg' => "Crawl lỗi: URL không hợp lệ hoặc đã bị thay đổi",
            ];
        }

        $result = $this->add_movie($title, $year, $apiiphim_id, $sourcePage, $filterType, $filterCategory);
        return json_decode($result, true);
    }

    public function run() {
        // Lấy dữ liệu từ trang 1 tới 3
        $pages = range(1, 3);
        $allMovies = [];
        foreach ($pages as $page) {
            $url = "https://apii.online/apii/danh-sach/phim-moi-cap-nhat?page=$page";
            $movies = $this->crawl_apiiphim_page($url);
            $allMovies = array_merge($allMovies, $movies);
        }

        // Crawl từng phim
        $filterType = []; // Bạn có thể thêm logic để lọc loại phim nếu cần
        $filterCategory = []; // Bạn có thể thêm logic để lọc thể loại phim nếu cần
        foreach ($allMovies as $movie) {
            $result = $this->crawl_apiiphim_movies($movie, $filterType, $filterCategory);
            if ($result['status']) {
                echo "Crawl thành công: " . $movie['name'] . "\n";
            } else {
                echo "Crawl lỗi: " . $movie['name'] . "\n";
            }
        }
    }
}

$cron = new MovieCron();
$cron->run();
require __DIR__ . '/thinkphp/start.php';