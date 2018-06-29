---
layout: post
title:  "resin host conf"
date:  2016-03-16 09:24:00 +0800
categories: resin
tags: resin
keywords: java,resin,web1992
---


### resin host 配置

<!--more-->

```xml

	<!--  host-->
	<host id="www.web1992.cn">
	<host-name>www.web1992.cn</host-name>
	<host-alias>gradle.web1992.cn</host-alias>
	<web-app id="/" root-directory="/data/www/web1992/"/>
	<stdout-log path='/data/logs/stdout.log' timestamp="[%H:%M:%S.%s]" rollover-period='1D'/>
	<stderr-log path='/data/logs/stderr.log' timestamp="[%H:%M:%S.%s]" rollover-period='1D'/>
	<access-log path='/data/logs/access.log' archive-format="access.log.%Y-%m-%d.gz" rollover-period='1D'/>
	</host>
```
