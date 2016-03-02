---
layout: post
title:  "mysqldump"
date:  2016-03-02 10:40:00 +0800
categories: mysql
tags: mysql
keywords: mysql,web1992
---


 mysqldump命令

<!--more-->

{% highlight sh %}
_id=123
# -c, --complete-insert
# -t, --no-create-info
# -q, --quick         Don't buffer query, dump directly to stdout.
# -w, --where=name    Dump only selected records. Quotes are mandatory.

# 根据条件备份数据
mysqldump -h${_dbhost} -P${_dbport} -u${_dbuser} -p${_dbpwd} -t -q -w id=${_id} ${_dbName} t_my_table >> "t_my_table.sql"

# 备份 t_my_table 中的数据到 t_my_table.sql 文件中
mysqldump   -t -q  my_database t_my_table >> "t_my_table.sql"

{% endhighlight %}

