<?php
namespace app\admin\controller;
use think\Db;
use think\Cache;
use app\common\validate\Vod as VodValidate;
use DOMDocument;
use DOMXPath;
use think\Exception;

use function PHPSTORM_META\map;

class Collect extends Base
{
    public function __construct()
    {
        parent::__construct();
        //header('X-Accel-Buffering: no');
    }

    public function index()
    {
        $param = input();
        $param['page'] = intval($param['page']) < 1 ? 1 : $param['page'];
        $param['limit'] = intval($param['limit']) < 1 ? 100 : $param['limit'];
        $where = [];

        $order = 'collect_id desc';
        $res = model('Collect')->listData($where, $order, $param['page'], $param['limit']);

        $this->assign('list', $res['list']);
        $this->assign('total', $res['total']);
        $this->assign('page', $res['page']);
        $this->assign('limit', $res['limit']);

        $param['page'] = '{page}';
        $param['limit'] = '{limit}';
        $this->assign('param', $param);

        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_vod';
        $collect_break_vod = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_art';
        $collect_break_art = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_actor';
        $collect_break_actor = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_role';
        $collect_break_role = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_website';
        $collect_break_website = Cache::get($key);


        $this->assign('collect_break_vod', $collect_break_vod);
        $this->assign('collect_break_art', $collect_break_art);
        $this->assign('collect_break_actor', $collect_break_actor);
        $this->assign('collect_break_role', $collect_break_role);
        $this->assign('collect_break_website', $collect_break_website);

        $this->assign('title',lang('admin/collect/title'));
        return $this->fetch('admin@collect/index');
    }

    public function test()
    {
        $param = input();
        $res = model('Collect')->vod($param);
        return json($res);
    }

    public function info()
    {
        if (Request()->isPost()) {
            $param = input('post.');
            $validate = \think\Loader::validate('Token');
            if(!$validate->check($param)){
                return $this->error($validate->getError());
            }
            $res = model('Collect')->saveData($param);
            if ($res['code'] > 1) {
                return $this->error($res['msg']);
            }
            return $this->success($res['msg']);
        }

        $id = input('id');
        $where = [];
        $where['collect_id'] = ['eq', $id];
        $res = model('Collect')->infoData($where);
        $this->assign('info', $res['info']);
        $this->assign('title', lang('admin/collect/title'));
        return $this->fetch('admin@collect/info');
    }

    public function del()
    {
        $param = input();
        $ids = $param['ids'];

        if (!empty($ids)) {
            $where = [];
            $where['collect_id'] = ['in', $ids];

            $res = model('Collect')->delData($where);
            if ($res['code'] > 1) {
                return $this->error($res['msg']);
            }
            return $this->success($res['msg']);
        }
        return $this->error(lang('param_err'));
    }

    public function union()
    {
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_vod';
        $collect_break_vod = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_art';
        $collect_break_art = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_actor';
        $collect_break_actor = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_role';
        $collect_break_role = Cache::get($key);
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_website';
        $collect_break_website = Cache::get($key);

        $this->assign('collect_break_vod', $collect_break_vod);
        $this->assign('collect_break_art', $collect_break_art);
        $this->assign('collect_break_actor', $collect_break_actor);
        $this->assign('collect_break_role', $collect_break_role);
        $this->assign('collect_break_website', $collect_break_website);

        $this->assign('title', lang('admin/collect/title'));
        return $this->fetch('admin@collect/union');
    }

    public function load()
    {
        $param = input();
        $key = $GLOBALS['config']['app']['cache_flag']. '_'. 'collect_break_' . $param['flag'];
        $collect_break = Cache::get($key);
        $url = $this->_ref;
        if (!empty($collect_break)) {
            echo lang('admin/collect/load_break');
            $url = $collect_break;
        }
        mac_jump($url);
    }

    public function api($pp = [])
    {
        $param = input();
        if (!empty($pp)) {
            $param = $pp;
        }

        //分类
        $type_list = model('Type')->getCache('type_list');
        $this->assign('type_list', $type_list);

        if (!empty($param['pg'])) {
            $param['page'] = $param['pg'];
            unset($param['pg']);
        }
        @session_write_close();
        
        if ($param['mid'] == '' || $param['mid'] == '1') {
            return $this->vod($param);
        } elseif ($param['mid'] == '2') {
            return $this->art($param);
        } elseif ($param['mid'] == '8') {
            return $this->actor($param);
        }
        elseif ($param['mid'] == '9') {
            return $this->role($param);
        }
        elseif ($param['mid'] == '11') {
            return $this->website($param);
        }
    }

    public function timing()
    {
        //当日视频分类ids
        $res = model('Vod')->updateToday('type');
        $this->assign('vod_type_ids_today', $res['data']);

        return $this->fetch('admin@collect/timing');
    }

    public function clearbind()
    {
        $param = input();
        $config = [];
        if(!empty($param['cjflag'])){
            $bind_list = config('bind');
            foreach($bind_list as $k=>$v){
                if(strpos($k,$param['cjflag'])===false){
                    $config[$k] = $v;
                }
            }
        }

        $res = mac_arr2file( APP_PATH .'extra/bind.php', $config);
        if($res===false){
            return json(['code'=>0,'msg'=>lang('clear_err')]);
        }
        return json(['code'=>1,'msg'=>lang('clear_ok')]);
    }

    public function bind()
    {
        $param = input();
        $ids = $param['ids'];
        $col = $param['col'];
        $val = $param['val'];

        if(!empty($col)){
            $config = config('bind');
            $config[$col] = intval($val);
            $data = [];
            $data['id'] = $col;
            $data['st'] = 0;
            $data['local_type_id'] = $val;
            $data['local_type_name'] = '';
            if(intval($val)>0){
                $data['st'] = 1;
                $type_list = model('Type')->getCache('type_list');
                $data['local_type_name'] = $type_list[$val]['type_name'];
            }

            $res = mac_arr2file( APP_PATH .'extra/bind.php', $config);
            if($res===false){
                return $this->error(lang('save_err'));
            }
            return $this->success(lang('save_ok'),null, $data);
        }
        return $this->error(lang('param_err'));
    }

    public function vod($param)
    {
        if($param['ac'] != 'list'){
            $key = $GLOBALS['config']['app']['cache_flag']. '_'.'collect_break_vod';
            Cache::set($key, url('collect/api').'?'. http_build_query($param) );
        }
        $res = model('Collect')->vod($param);
        if($res['code']>1){
            return $this->error($res['msg']);
        }

        if($param['ac'] == 'list'){

            $bind_list = config('bind');
            $type_list = model('Type')->getCache('type_list');

            foreach($res['type'] as $k=>$v){
                $key = $param['cjflag'] . '_' . $v['type_id'];
                $res['type'][$k]['isbind'] = 0;
                $local_id = intval($bind_list[$key]);
                if( $local_id>0 ){
                    $res['type'][$k]['isbind'] = 1;
                    $res['type'][$k]['local_type_id'] = $local_id;
                    $type_name = $type_list[$local_id]['type_name'];
                    if(empty($type_name)){
                        $type_name = lang('unknown_type');
                    }
                    $res['type'][$k]['local_type_name'] = $type_name;
                }
            }

            $this->assign('page',$res['page']);
            $this->assign('type',$res['type']);
            $this->assign('list',$res['data']);

            $this->assign('total',$res['page']['recordcount']);
            $this->assign('page',$res['page']['page']);
            $this->assign('limit',$res['page']['pagesize']);

            $param['page'] = '{page}';
            $param['limit'] = '{limit}';
            $this->assign('param',$param);

            $this->assign('param_str',http_build_query($param)) ;

            return $this->fetch('admin@collect/vod');
        }
        $page_now = isset($param['page']) && strlen($param['page']) > 0 ? (int)$param['page'] : 1;
        mac_echo('<title>' . $page_now . '/' . (int)$res['page']['pagecount'] . ' collecting..</title>');
        mac_echo('<style type="text/css">body{font-size:12px;color: #333333;line-height:21px;}span{font-weight:bold;color:#FF0000}</style>');
        model('Collect')->vod_data($param,$res );

    }

    public function art($param)
    {
        if($param['ac'] != 'list'){
            $key = $GLOBALS['config']['app']['cache_flag']. '_'.'collect_break_art';
            Cache::set($key, url('collect/api').'?'. http_build_query($param) );
        }
        $res = model('Collect')->art($param);
        if($res['code']>1){
            return $this->error($res['msg']);
        }

        if($param['ac'] == 'list'){

            $bind_list = config('bind');
            $type_list = model('Type')->getCache('type_list');

            foreach($res['type'] as $k=>$v){
                $key = $param['cjflag'] . '_' . $v['type_id'];
                $res['type'][$k]['isbind'] = 0;
                $local_id = intval($bind_list[$key]);
                if( $local_id>0 ){
                    $res['type'][$k]['isbind'] = 1;
                    $res['type'][$k]['local_type_id'] = $local_id;
                    $type_name = $type_list[$local_id]['type_name'];
                    if(empty($type_name)){
                        $type_name = lang('unknown_type');
                    }
                    $res['type'][$k]['local_type_name'] = $type_name;
                }
            }

            $this->assign('page',$res['page']);
            $this->assign('type',$res['type']);
            $this->assign('list',$res['data']);

            $this->assign('total',$res['page']['recordcount']);
            $this->assign('page',$res['page']['page']);
            $this->assign('limit',$res['page']['pagesize']);

            $param['page'] = '{page}';
            $param['limit'] = '{limit}';
            $this->assign('param',$param);

            $this->assign('param_str',http_build_query($param)) ;

            return $this->fetch('admin@collect/art');
        }

        mac_echo('<style type="text/css">body{font-size:12px;color: #333333;line-height:21px;}span{font-weight:bold;color:#FF0000}</style>');
        model('Collect')->art_data($param,$res );
    }

    public function actor($param)
    {
        if($param['ac'] != 'list'){
            $key = $GLOBALS['config']['app']['cache_flag']. '_'.'collect_break_actor';
            Cache::set($key, url('collect/api').'?'. http_build_query($param) );
        }
        $res = model('Collect')->actor($param);
        if($res['code']>1){
            return $this->error($res['msg']);
        }

        if($param['ac'] == 'list'){

            $bind_list = config('bind');
            $type_list = model('Type')->getCache('type_list');

            foreach($res['type'] as $k=>$v){
                $key = $param['cjflag'] . '_' . $v['type_id'];
                $res['type'][$k]['isbind'] = 0;
                $local_id = intval($bind_list[$key]);
                if( $local_id>0 ){
                    $res['type'][$k]['isbind'] = 1;
                    $res['type'][$k]['local_type_id'] = $local_id;
                    $type_name = $type_list[$local_id]['type_name'];
                    if(empty($type_name)){
                        $type_name = lang('unknown_type');
                    }
                    $res['type'][$k]['local_type_name'] = $type_name;
                }
            }

            $this->assign('page',$res['page']);
            $this->assign('type',$res['type']);
            $this->assign('list',$res['data']);

            $this->assign('total',$res['page']['recordcount']);
            $this->assign('page',$res['page']['page']);
            $this->assign('limit',$res['page']['pagesize']);

            $param['page'] = '{page}';
            $param['limit'] = '{limit}';
            $this->assign('param',$param);

            $this->assign('param_str',http_build_query($param)) ;

            return $this->fetch('admin@collect/actor');
        }

        mac_echo('<style type="text/css">body{font-size:12px;color: #333333;line-height:21px;}span{font-weight:bold;color:#FF0000}</style>');
        model('Collect')->actor_data($param,$res );
    }

    public function role($param)
    {
        if ($param['ac'] != 'list') {
            $key = $GLOBALS['config']['app']['cache_flag']. '_'.'collect_break_role';
            Cache::set($key, url('collect/api') . '?' . http_build_query($param));
        }
        $res = model('Collect')->role($param);
        if ($res['code'] > 1) {
            return $this->error($res['msg']);
        }

        if ($param['ac'] == 'list') {

            $bind_list = config('bind');
            $type_list = model('Type')->getCache('type_list');

            foreach ($res['type'] as $k => $v) {
                $key = $param['cjflag'] . '_' . $v['type_id'];
                $res['type'][$k]['isbind'] = 0;
                $local_id = intval($bind_list[$key]);
                if ($local_id > 0) {
                    $res['type'][$k]['isbind'] = 1;
                    $res['type'][$k]['local_type_id'] = $local_id;
                    $type_name = $type_list[$local_id]['type_name'];
                    if (empty($type_name)) {
                        $type_name = lang('unknown_type');
                    }
                    $res['type'][$k]['local_type_name'] = $type_name;
                }
            }

            $this->assign('page', $res['page']);
            $this->assign('type', $res['type']);
            $this->assign('list', $res['data']);

            $this->assign('total', $res['page']['recordcount']);
            $this->assign('page', $res['page']['page']);
            $this->assign('limit', $res['page']['pagesize']);

            $param['page'] = '{page}';
            $param['limit'] = '{limit}';
            $this->assign('param', $param);

            $this->assign('param_str', http_build_query($param));

            return $this->fetch('admin@collect/role');
        }

        mac_echo('<style type="text/css">body{font-size:12px;color: #333333;line-height:21px;}span{font-weight:bold;color:#FF0000}</style>');
        model('Collect')->role_data($param,$res );
    }

    public function website($param)
    {
        if ($param['ac'] != 'list') {
            $key = $GLOBALS['config']['app']['cache_flag']. '_'.'collect_break_website';
            Cache::set($key, url('collect/api') . '?' . http_build_query($param));
        }
        $res = model('Collect')->website($param);
        if ($res['code'] > 1) {
            return $this->error($res['msg']);
        }

        if ($param['ac'] == 'list') {

            $bind_list = config('bind');
            $type_list = model('Type')->getCache('type_list');

            foreach ($res['type'] as $k => $v) {
                $key = $param['cjflag'] . '_' . $v['type_id'];
                $res['type'][$k]['isbind'] = 0;
                $local_id = intval($bind_list[$key]);
                if ($local_id > 0) {
                    $res['type'][$k]['isbind'] = 1;
                    $res['type'][$k]['local_type_id'] = $local_id;
                    $type_name = $type_list[$local_id]['type_name'];
                    if (empty($type_name)) {
                        $type_name = lang('unknown_type');
                    }
                    $res['type'][$k]['local_type_name'] = $type_name;
                }
            }

            $this->assign('page', $res['page']);
            $this->assign('type', $res['type']);
            $this->assign('list', $res['data']);

            $this->assign('total', $res['page']['recordcount']);
            $this->assign('page', $res['page']['page']);
            $this->assign('limit', $res['page']['pagesize']);

            $param['page'] = '{page}';
            $param['limit'] = '{limit}';
            $this->assign('param', $param);

            $this->assign('param_str', http_build_query($param));

            return $this->fetch('admin@collect/website');
        }

        mac_echo('<style type="text/css">body{font-size:12px;color: #333333;line-height:21px;}span{font-weight:bold;color:#FF0000}</style>');
        model('Collect')->website_data($param,$res );
    }

    // CRAWLER 3 Nguồn bay Apii
    public function ba_nguon()
    {
        return $this->fetch('admin@collect/ba_nguon');
    }

    public function crawl_ba_nguon_link()
    {
        try {
            $url = input('url');
            $host = parse_url($url, PHP_URL_HOST);
            $api_url = str_replace(['http://', 'https://', $host], '', $url);
            $api_url = $GLOBALS['config']['site']['site_url'] . $api_url;
            $html = mac_curl_get($api_url);
            $html = mac_filter_tags($html);
            $sourcePage = json_decode($html, true);
            $title = $sourcePage['movie']['name'];
            $year = $sourcePage['movie']['year'];
            $ba_nguon_id = $sourcePage['movie']['_id'];
            $result = $this->add_movie($title, $year, $ba_nguon_id, $sourcePage);
            return $result;
        } catch (\Throwable $th) {
            $result = array(
                'status' => false,
                'msg' => "Crawl error: " . $th,
            );
            return json_encode($result);
        }
    }

    public function crawl_ba_nguon_page()
    {
        $url = input('url');
        $html = mac_curl_get($url);
        if(empty($html)){
            return ['code'=>1001, 'msg'=>lang('model/collect/get_html_err') . ', url: ' . $url];
        }
        $html = mac_filter_tags($html);
        $sourcePage = json_decode($html);
        $listMovies = [];

        if(count($sourcePage->items) > 0) {
            foreach ($sourcePage->items as $key => $item) {
                array_push($listMovies, $GLOBALS['config']['site']['site_url'] . "/get.php?slug={$item->slug}|{$item->_id}|{$item->modified->time}|{$item->name}|{$item->origin_name}|{$item->year}");
            }
            echo join("\n", $listMovies);
        } else {
            echo [];
        }
        die();
    }

    public function crawl_ba_nguon_movies()
    {
        try {
            $data_post = input('url');
            $filterType = input('filterType');
            $filterCategory = input('filterCategory');
            $url = explode('|', $data_post)[0];
            $ba_nguon_id = explode('|', $data_post)[1];
            $ba_nguon_update_time 	= explode('|', $data_post)[2];
            $title = explode('|', $data_post)[3];
            $org_title = explode('|', $data_post)[4];
            $year = explode('|', $data_post)[5];

            $host = parse_url($url, PHP_URL_HOST);
            $api_url = str_replace(['http://', 'https://', $host], '', $url);
            $api_url = $GLOBALS['config']['site']['site_url'] . $api_url;
            $html = mac_curl_get($api_url);
            $html = mac_filter_tags($html);
            $sourcePage = json_decode($html, true);

            if ($filterType) {
                $filterType = explode(",", $filterType);
            }
            if ($filterCategory) {
                $filterCategory = explode(",", $filterCategory);
            }
            
            $result = $this->add_movie($title, $year, $ba_nguon_id, $sourcePage, $filterType, $filterCategory);
            return $result;

        } catch (Exception $e) {
            $result = array(
                'status' => false,
                'msg' => "Crawl error"
            );
            return json_encode($result);
        }
    }

    // CRAWLER OPHIM_OLD by APII.ONLINE
    public function ophim_goc()
    {
        return $this->fetch('admin@collect/ophim_goc');
    }

    public function crawl_ophim_goc_link()
    {
        try {
            $url = input('url');
            $host = parse_url($url, PHP_URL_HOST);
            $api_url = str_replace($host, 'ophim1.com', $url);
            $html = mac_curl_get($api_url);
            $html = mac_filter_tags($html);
            $sourcePage = json_decode($html, true);
            $title = $sourcePage['movie']['name'];
            $year = $sourcePage['movie']['year'];
            $ophim_goc_id = $sourcePage['movie']['_id'];
            $result = $this->add_movie($title, $year, $ophim_goc_id, $sourcePage);
            return $result;
        } catch (\Throwable $th) {
            $result = array(
                'status' => true,
                'msg' => "Crawl error: " . $th,
            );
            return json_encode($result);
        }
    }

    public function crawl_ophim_goc_page()
    {
        $url = input('url');
        $html = mac_curl_get($url);
        if(empty($html)){
            return ['code'=>1001, 'msg'=>lang('model/collect/get_html_err') . ', url: ' . $url];
        }
        $html = mac_filter_tags($html);
        $sourcePage = json_decode($html);
        $listMovies = [];

        if(count($sourcePage->items) > 0) {
            foreach ($sourcePage->items as $key => $item) {
                array_push($listMovies, "https://ophim1.com/phim/{$item->slug}|{$item->_id}|{$item->modified->time}|{$item->name}|{$item->origin_name}|{$item->year}");
            }
            echo join("\n", $listMovies);
        } else {
            echo [];
        }
        die();
    }

    public function crawl_ophim_goc_movies()
    {
        try {
            $data_post = input('url');
            $filterType = input('filterType');
            $filterCategory = input('filterCategory');
            $url = explode('|', $data_post)[0];
            $ophim_goc_id = explode('|', $data_post)[1];
            $ophim_goc_update_time 	= explode('|', $data_post)[2];
            $title = explode('|', $data_post)[3];
            $org_title = explode('|', $data_post)[4];
            $year = explode('|', $data_post)[5];

            $host = parse_url($url, PHP_URL_HOST);
            $api_url = str_replace($host, 'ophim1.com', $url);
            $html = mac_curl_get($api_url);
            $html = mac_filter_tags($html);
            $sourcePage = json_decode($html, true);

            if ($filterType) {
                $filterType = explode(",", $filterType);
            }
            if ($filterCategory) {
                $filterCategory = explode(",", $filterCategory);
            }
            
            $result = $this->add_movie($title, $year, $ophim_goc_id, $sourcePage, $filterType, $filterCategory);
            return $result;

        } catch (Exception $e) {
            $result = array(
                'status' => true,
                'msg' => "Crawl error"
            );
            return json_encode($result);
        }
    }

    // CRAWLER KKPHIM_OLD by APII.ONLINE
    public function kkphim_goc()
    {
        return $this->fetch('admin@collect/kkphim_goc');
    }

    public function crawl_kkphim_goc_link()
    {
        try {
            $url = input('url');
            $host = parse_url($url, PHP_URL_HOST);
            $api_url = str_replace($host, 'phimapi.com', $url);
            $html = mac_curl_get($api_url);
            $html = mac_filter_tags($html);
            $sourcePage = json_decode($html, true);
            $title = $sourcePage['movie']['name'];
            $year = $sourcePage['movie']['year'];
            $kkphim_goc_id = $sourcePage['movie']['_id'];
            $result = $this->add_movie($title, $year, $kkphim_goc_id, $sourcePage);
            return $result;
        } catch (\Throwable $th) {
            $result = array(
                'status' => true,
                'msg' => "Crawl error: " . $th,
            );
            return json_encode($result);
        }
    }

    public function crawl_kkphim_goc_page()
    {
        $url = input('url');
        $html = mac_curl_get($url);
        if(empty($html)){
            return ['code'=>1001, 'msg'=>lang('model/collect/get_html_err') . ', url: ' . $url];
        }
        $html = mac_filter_tags($html);
        $sourcePage = json_decode($html);
        $listMovies = [];

        if(count($sourcePage->items) > 0) {
            foreach ($sourcePage->items as $key => $item) {
                array_push($listMovies, "https://phimapi.com/phim/{$item->slug}|{$item->_id}|{$item->modified->time}|{$item->name}|{$item->origin_name}|{$item->year}");
            }
            echo join("\n", $listMovies);
        } else {
            echo [];
        }
        die();
    }

    public function crawl_kkphim_goc_movies()
    {
        try {
            $data_post = input('url');
            $filterType = input('filterType');
            $filterCategory = input('filterCategory');
            $url = explode('|', $data_post)[0];
            $kkphim_goc_id = explode('|', $data_post)[1];
            $kkphim_goc_update_time 	= explode('|', $data_post)[2];
            $title = explode('|', $data_post)[3];
            $org_title = explode('|', $data_post)[4];
            $year = explode('|', $data_post)[5];

            $host = parse_url($url, PHP_URL_HOST);
            $api_url = str_replace($host, 'phimapi.com', $url);
            $html = mac_curl_get($api_url);
            $html = mac_filter_tags($html);
            $sourcePage = json_decode($html, true);

            if ($filterType) {
                $filterType = explode(",", $filterType);
            }
            if ($filterCategory) {
                $filterCategory = explode(",", $filterCategory);
            }
            
            $result = $this->add_movie($title, $year, $kkphim_goc_id, $sourcePage, $filterType, $filterCategory);
            return $result;

        } catch (Exception $e) {
            $result = array(
                'status' => true,
                'msg' => "Crawl error"
            );
            return json_encode($result);
        }
    }

     // CRAWLER NGUONC_OLD by APII.ONLINE
     public function nguonc_goc()
     {
         return $this->fetch('admin@collect/nguonc_goc');
     }
 
     public function crawl_nguonc_goc_link()
     {
         try {
             $url = input('url');
             $host = parse_url($url, PHP_URL_HOST);
             $api_url = str_replace(['http://', 'https://', $host], '', $url);
             $api_url = $GLOBALS['config']['site']['site_url'] . $api_url;
             $html = mac_curl_get($api_url);
             $html = mac_filter_tags($html);
             $sourcePage = json_decode($html, true);
             $title = $sourcePage['movie']['name'];
             $year = $sourcePage['movie']['year'];
             $nguonc_goc_id = $sourcePage['movie']['_id'];
             $result = $this->add_movie($title, $year, $nguonc_goc_id, $sourcePage);
             return $result;
         } catch (\Throwable $th) {
             $result = array(
                 'status' => true,
                 'msg' => "Crawl error: " . $th,
             );
             return json_encode($result);
         }
     }
 
     public function crawl_nguonc_goc_page()
     {
         $url = input('url');
         $html = mac_curl_get($url);
         if(empty($html)){
             return ['code'=>1001, 'msg'=>lang('model/collect/get_html_err') . ', url: ' . $url];
         }
         $html = mac_filter_tags($html);
         $sourcePage = json_decode($html);
         $listMovies = [];
 
         if(count($sourcePage->items) > 0) {
             foreach ($sourcePage->items as $key => $item) {
                 array_push($listMovies, $GLOBALS['config']['site']['site_url'] . "/nguonc.php?slug={$item->slug}|{$item->_id}|{$item->modified->time}|{$item->name}|{$item->origin_name}|{$item->year}");
             }
             echo join("\n", $listMovies);
         } else {
             echo [];
         }
         die();
     }
 
     public function crawl_nguonc_goc_movies()
     {
         try {
             $data_post = input('url');
             $filterType = input('filterType');
             $filterCategory = input('filterCategory');
             $url = explode('|', $data_post)[0];
             $nguonc_goc_id = explode('|', $data_post)[1];
             $nguonc_goc_update_time 	= explode('|', $data_post)[2];
             $title = explode('|', $data_post)[3];
             $org_title = explode('|', $data_post)[4];
             $year = explode('|', $data_post)[5];
 
             $host = parse_url($url, PHP_URL_HOST);
             $api_url = str_replace(['http://', 'https://', $host], '', $url);
             $api_url = $GLOBALS['config']['site']['site_url'] . $api_url;
             $html = mac_curl_get($api_url);
             $html = mac_filter_tags($html);
             $sourcePage = json_decode($html, true);
 
             if ($filterType) {
                 $filterType = explode(",", $filterType);
             }
             if ($filterCategory) {
                 $filterCategory = explode(",", $filterCategory);
             }
             
             $result = $this->add_movie($title, $year, $nguonc_goc_id, $sourcePage, $filterType, $filterCategory);
             return $result;
 
         } catch (Exception $e) {
             $result = array(
                 'status' => true,
                 'msg' => "Crawl error"
             );
             return json_encode($result);
         }
     }

    // Kết thúc APII
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

            $where = [
                'vod_name' => mac_filter_xss($title),
                'vod_year' => $year,
                'vod_writer' => $ophim_id
            ];
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

            $vod_pic = $poster_url;          // Ảnh chính dùng poster_url
            $vod_pic_slide = $thumb_url;     // Ảnh phụ vẫn là thumb (hoặc dùng poster_url luôn cũng được)
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
            if (stripos($server['server_name'], 'Thuyết Minh') !== false || stripos($server['server_name'], 'Lồng Tiếng') !== false) {
                $play_from_embed = 'embed7';
                $play_from_m3u8 = 'hls7';
                $play_from_server = 'server0';
            } elseif (strpos($server['server_name'], '[SV #1]') !== false) {
                $play_from_embed = 'embed1';
                $play_from_m3u8 = 'hls1';
                $play_from_server = 'server1';
            } elseif (strpos($server['server_name'], '[SV #2]') !== false) {
                $play_from_embed = 'embed2';
                $play_from_m3u8 = 'hls2';
                $play_from_server = 'server2';
            } elseif (strpos($server['server_name'], '[SV #3]') !== false) {
                $play_from_embed = 'embed3';
                $play_from_m3u8 = 'hls3';
                $play_from_server = 'server3';
            } elseif (strpos($server['server_name'], '[SV #4]') !== false) {
                $play_from_embed = 'embed4';
                $play_from_m3u8 = 'hls4';
                $play_from_server = 'server4';
            } elseif (strpos($server['server_name'], '[SV #5]') !== false) {
                $play_from_embed = 'embed5';
                $play_from_m3u8 = 'hls5';
                $play_from_server = 'server5';
            } elseif (strpos($server['server_name'], '[SV #6]') !== false) {
                $play_from_embed = 'embed6';
                $play_from_m3u8 = 'hls6';
                $play_from_server = 'server6';
            } else {
                $play_from_embed = 'embed1';
                $play_from_m3u8 = 'hls1';
                $play_from_server = 'server1';
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


    protected function getElementsByAttr($parentNode, $tagName, $attributeName, $className) {
        $nodes=array();

        $childNodeList = $parentNode->getElementsByTagName($tagName);
        for ($i = 0; $i < $childNodeList->length; $i++) {
            $temp = $childNodeList->item($i);
            if (stripos($temp->getAttribute($attributeName), $className) !== false) {
                $nodes[]=$temp;
            }
        }

        return $nodes;
    }
}
