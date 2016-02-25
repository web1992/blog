---
layout: post
title:  "jpygments styles"
date:  2016-02-24 21:23:00 +0800
categories: jpygments
tags: jpygments
keywords: jpygments,web1992
---

### 使用 `jpygments` 进行代码高亮
> jpygments 是一个代码高亮工具
>
> jpygments 是基于pyhon的,需要安python
> 
> 如果是linux,Mac系统已经安装了python(window 请自行安装python)

<!--more-->

在linux 执行python 进入命令行环境,如下图

![](http://i.imgur.com/V4XMKG8.png)

可参考教程

[pygments css 样式生成教程](https://segmentfault.com/a/1190000000661337 "pygments安装教程")

### 具体流程
- 安装Python（jpygments 是基于pyhon的）
- 使用`pygmentize`命令进行生产想要的css样式
- 对原来已有的css 样式进行替换


	pygmentize -f html -a .highlight -S manni  > pygments.css
	manni 是我选择的一个css 样式
	我使用jekyll,代码高亮的css 是_syntax.scss
	对以前旧的css进行覆盖（记得备份旧的样式，文件路径请修改为自己的路径）
	cp -f ~/pygments.css ./_syntax.scss



喜欢黑色背景的样式

	vim
	rrt
	native
	monokai
	paraiso-dark
	fruity
喜欢白色背景的样式

	xcode
	autumn
	vs
	perldoc

下面是每个样式的效果图

######manni 
![](http://i.imgur.com/0CBR6xK.png)

######igor
![](http://i.imgur.com/82xZUcD.png)

######lovelace
![](http://i.imgur.com/GefzT1U.png)
######xcode
![](http://i.imgur.com/enSI6dl.png)
######vim
![](http://i.imgur.com/PA0rftl.png)
######autumn
![](http://i.imgur.com/uX04wt0.png)
######vs
![](http://i.imgur.com/VpWSB5z.png)
######rrt
![](http://i.imgur.com/jesJ5UQ.png)
######native
![](http://i.imgur.com/L0a6ECi.png)
######perldoc
![](http://i.imgur.com/izk0znY.png)
######borland
![](http://i.imgur.com/N9x8qos.png)
######tango
![](http://i.imgur.com/pB52DmV.png)
######emacs
![](http://i.imgur.com/I7us9XG.png)
######friendly
![](http://i.imgur.com/Cycgz1V.png)
######monokai
![](http://i.imgur.com/bNPEhAX.png)
######paraiso-dark
![](http://i.imgur.com/n7PIwtg.png)
######colorful
![](http://i.imgur.com/dqowQBC.png)
######murphy
![](http://i.imgur.com/gYnFB7x.png)
######bw
![](http://i.imgur.com/OHjf8O8.png)
######pastie
![](http://i.imgur.com/p4LUf6l.png)
######algol_nu
![](http://i.imgur.com/CLqwRxo.png)
######paraiso-light
![](http://i.imgur.com/qR1Jhu2.png)
######trac
![](http://i.imgur.com/FCxmf88.png)
######default
![](http://i.imgur.com/VjDbCyW.png)
######algol
![](http://i.imgur.com/q4IDAuo.png)
######fruity
![](http://i.imgur.com/fyCZK5c.png)



