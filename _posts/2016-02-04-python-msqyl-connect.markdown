---
layout: post
title:  "使用 python 连接mysql 数据库"
date:  2016-02-04 14:33:00 +0800
categories: phthon
tags: python
keywords: jekyll,web1992
---

>使用`python`连接`mysql`数据库

<!--more-->
	{% highlight python %}
	
	# encoding=utf-8
	import sys
	reload(sys)
	sys.setdefaultencoding('utf-8')
	__author__ = 'web'
	import MySQLdb
	
	def get_mysql_conn(dbIp, dbName):
	    """
	    :desc 获取数据链接
	    :param hostname: 数据库地址
	    :param db:要链接的数据
	    :return:
	    """
	    _use_pwd=get_user_pwd_from_file();
	    user=_use_pwd['username'].strip('\n')
	    pwd=_use_pwd['password'].strip('\n')
	    # print user,pwd
	    # print dbIp,dbName
	    # print  dbIp
	    return MySQLdb.connect(host=str(dbIp), user=user, passwd=pwd, db=dbName, port=3306, charset='utf8')
	
	
	def get_user_pwd_from_file():
	    """
	    1，读取配置文字中的用户名&密码
	    :return: 字典，包含了用户名&密码
	    """
	    _d={}
	    pwd_file = r'E:\dev\python\python-game\config\pwd.class'
	    with open(pwd_file,'r') as f:
	        for _str in f.readlines():
	            _data=str(_str);
	            if _data.startswith("#") or  _data=='\n':
	                continue
	            if _data.startswith('username'):
	                 _user = _data.split('=')[1]
	                 _d_user = {'username':_user}
	                 _d.update(_d_user)
	            if _data.startswith('password'):
	                 _pwd = _data.split('=')[1]
	                 _d_pwd = {'password':_pwd}
	                 _d.update(_d_pwd)
	
	        # print _d
	        return _d
	
	def get_data_from_db(server_name, db_ip,dbName,sql):
	    '''
	        执行SQL 并返回结果集
	    '''
	    # print 'start get data from db ',db_ip,server_name
	    if dbName is None:
	        dbName='tr';
	    try:
	        # dbName = 'tr'
	        conn = get_mysql_conn(db_ip, dbName)
	        cur = conn.cursor()
	        # file_name=str(server_name) + '.txt'
	        # output = open(file_name, 'w')
	        cur.execute(sql)
	        rows = cur.fetchall()
	        # build_result_as_file(output, rows)
	        # analyze_data(file_name)
	        # 关闭连接
	        # output.close()
	        cur.close()
	        conn.close()
	        return  rows
	
	    except MySQLdb.Error, e:
	        print "Mysql Error %d: %s" % (e.args[0], e.args[1])
	
	
	if __name__=='__main__':
	    pass
	
	{% endhighlight %}
