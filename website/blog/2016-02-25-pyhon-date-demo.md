---
layout: post
title:  "python date demo"
date:  2016-02-25 12:32:00 +0800
categories: python
tags: python
keywords: python,web1992
---

## `python` 日期格式化例子

<!--truncate-->

```python
	# encoding=utf-8
	import sys
	import datetime

	reload(sys)
	sys.setdefaultencoding('utf-8')
	__author__ = 'web'
	# Python2.5 初始化后会删除 sys.setdefaultencoding 这个方法，我们需要重新载入



	def get_data_name():
	    expire_time = '2016_02_24'
	    _start = datetime.datetime.strptime(expire_time, '%Y_%m_%d');
	    # 天数
	    dateCount = range(2)
	    # dateCount=range(1)
	    list1 = []
	    for d in dateCount:
	        _d = (str(_start + datetime.timedelta(days=+d)).split())[0].replace('-', '_')
	        list1.append(_d)
	    print list1
	    #['2016_02_24', '2016_02_25']
	    return list1


	if __name__ == '__main__':
	    get_data_name()
```
