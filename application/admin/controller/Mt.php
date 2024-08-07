<?php
namespace app\admin\controller;


class Mt extends Base
	{
		public function mtset()
		{
			if (Request()->isPost()) {
				$config = input();
				$config_new["mtcms"] = $config["mtcms"];
				$config_old = config("mtpc");
				$config_new = array_merge($config_old, $config_new);
				$res = mac_arr2file(APP_PATH . "extra/mtpc.php", $config_new);
				if ($res === false) {
					return $this->error("保存失败，请重试!");
				}
				return $this->success("保存成功!");
			}
			$this->assign("config", config("mtpc"));
			return $this->fetch("admin@system/mtcms");
		}
	}
