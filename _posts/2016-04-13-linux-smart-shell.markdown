---
layout: post
title:  "linux shell with sql"
date:  2016-04-12 14:00:00 +0800
categories: linux
tags: linux
keywords: linux,shell,web1992
---

撸下shell 
---
<!--more-->
	{% highlight sh %}
		#!/bin/bash
		
		beginId=2006

		## 替换
		replace(){
			sed -i "s/$1/$2/g"  $3;
		}
		## 删除已有数据
		delete(){
			id=$1;
			sql="delete from dbName.t_table_info where id=$id"

			echo $sql
			
			mysql -uroot -h127.0.0.1  -e "$sql" >> delete.log
		}

		append(){
			
			echo "file=" $1
			file=$1
			newid=$2
			echo 'SET CHARACTER_SET_CLIENT=utf8;'           > $file.txt
			echo 'SET CHARACTER_SET_CONNECTION=utf8;'       >>$file.txt
			echo 'use `dbName`;'                               >>$file.txt

			cat $file |grep -i ^insert  |grep 't_table_info'                  >>$file.txt

			oldid=`cat $file |grep t_table_info |gawk -F',' '{print $2}'`
			
			echo "-------------------------------------"
			sleep 1;

			a=$file
			#echo $a
			# 字符串截取 a 前面不能有 $ 符号
			# 从第四个字符开始，截取18个
			temp=${a:4:18}
			echo $temp

			delete $temp
			echo "delete suc."
			
			replace $oldid $newid $file.txt
			echo "replace suc."
			
			mysql -uroot -h127.0.0.1 -e "source $file.txt"
			echo "insert suc"
		}

		## 函数执行
		## 找到所有以.sql 结尾的文件
		for i in `find  .  -name "*.sql"   |gawk -F'/' '{print $2}'` ; do echo $i;a=`expr $beginId + 1`;beginId=$a;  append $i $a;   done;

		exit;

	{% endhighlight %}
