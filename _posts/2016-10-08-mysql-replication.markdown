---
layout: post
title:  "mysql replication"
date:  2016-10-08 13:33:00 +0800
categories: spring
tags: spring
keywords: mysql,web1992
---

`mysql replication` mysql的主从复制,本文使用`binary log`方式进行数据的复制.

<!--more-->



- 1,主从复制的方法
- 2,主从复制的同步/异步方式
- 3,主从复制的配置
- 4,mysqldump 备份数据
- 5,配置slave
- 6,master没有数据的配置
- 7,master已有有数据的配置
- 8,slave链接到master
- 9,binary log  的格式
- 10,主从的作用

1,主从复制的方法
---

>binary log(旧方式) 或者 global transaction identifiers (GTIDs)(新方式)

- binary log 需要打开binlog
- 而GTIDs 不需要打开binglog

2,主从复制的同步/异步方式
---

- asynchronous  // 异步
- semi synchronous // 半同步

3,主从复制的配置
---

整体的步骤：master配置-> slave配置-> slave链接到master -> 开始复制数据

摘抄来自mysql官方文档:

- 1 Setting the Replication Master Configuration //  配置master
- 2 Creating a User for Replication // 创建提供复制数据的用户
- 3 Obtaining the Replication Master Binary Log Coordinates // 获取master binary log 文件的位置和Position 
- 4 Choosing a Method for Data Snapshots // 复制已经有的数据方式，mysqldump 或者 row data copy
- 5 Setting Up Replication Slaves // 配置 Slaves,链接到mster
- 6 Adding Slaves to a Replication Environment // 新增新的slave到master

1).`master` 配置

开启binary log ,设置`server-id`，`server-id`是唯一的，maset,slave 都不可以重复(需要重启生效)

	[mysqld]
	server-id=1
	log-bin=mysql-bin


2).在`master`配置新的mysql账户，确保有  `REPLICATION SLAVE` 的权限,(slave使用此账户，复制数据)

	CREATE USER 'repl'@'%.mydomain.com' IDENTIFIED BY 'slavepass';
	GRANT REPLICATION SLAVE ON *.* TO 'repl'@'%.mydomain.com';
	
3).获取master binary log 文件的位置和Position 

	mysql> SHOW MASTER STATUS;
	+------------------+----------+--------------+------------------+-------------------+
	| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
	+------------------+----------+--------------+------------------+-------------------+
	| mysql-bin.000004 |  9781044 |              |                  |                   |
	+------------------+----------+--------------+------------------+-------------------+

	File mysql-bin.000004 Position 9781044  需要在slave链接到master时使用
	


4.使用`mysqldump` 备份复制master原有的数据，生成dump文件(如果master 没有数据，省略此步骤)
	
	mysqldump -uroot -p -databases demo_db > demo_db.db
    #demo_db 是需要备份的数据库,demo_db.db 是备份之后的文件
	
> mysql 备份数据用两种方式：使用mysqldump 或者使用 `Raw Data Files`

建议使用mysqldump。


5.`slave` 配置,配置server-id，唯一的id,最好也开启binary log,提供数据备份

	[mysqld]
	server-id=2
	log-bin=mysql-bin

	
	
6.slave开始复制数据，如果master 没有数据，执行`8步骤`即可开始复制数据



7. slave开始复制数据，如果master 已经有数据了

- a).使用 --skip-slave-start 启动slave，
- b).导入dump 文件 shell> mysql < fulldb.dump
- c).执行`第8步`
- d).执行 `START SLAVE;` 开始主从复制





8.`slave`链接到`master`数据库

	mysql> CHANGE MASTER TO
		->     MASTER_HOST='master_host_name',
		->     MASTER_USER='replication_user_name',
		->     MASTER_PASSWORD='replication_password',
		->     MASTER_LOG_FILE='recorded_log_file_name',
		->     MASTER_LOG_POS=recorded_log_position;

	

至此，mysql可以开始复制数据了。
	
9,binary log  的格式
---

- SBR	Statement Based Replication
- RBR	Row Based Replication
- MBR	Mixed Based Replication


10,主从的作用
---

- performance // 提高性能(读写分离)
- backup of // 数据备份(防止数据丢失)




参考的文档：

[mysql replication(官网文档)](http://dev.mysql.com/doc/refman/5.7/en/replication.html)


