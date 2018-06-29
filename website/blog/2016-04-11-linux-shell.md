---
layout: post
title:  "linux自动重启服务脚本"
date:  2016-04-11 10:55:00 +0800
categories: linux
tags: linux
keywords: linux,,shell,web1992
---

###linux 自动重启服务命令

<!--more-->
```sh
		#!/bin/bash
        pid=`ps aux |grep java |awk '{if($12=="-Dserver.name=game_server_s1") print $2}'`

        echo 'game_server_s1 is' $pid

        if [ "$pid" = "" ]; then
                echo "no game server run."
                echo "exit"
                exit;
        fi;
		
		# 统计文件打开数
        open_file=`lsof -p $pid | wc -l`

        if [[ $open_file -gt 65535 ]]; then
                echo "open files=" $open_file
                echo "restart game server ..."
                kill -9 $pid
                cd /data/my_server/ && sh launch.sh start;
        else
			echo "game server is ok";
		fi;
		exit;
```
