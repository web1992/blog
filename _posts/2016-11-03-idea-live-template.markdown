---
layout: post
title:  "idea code 模板"
date:  2016-11-03 10:33:00 +0800
categories: idea
tags: idea
keywords: idea,web1992
---

`idea` code live template 模板

`idea` 自动生成`main`方法

<!--more-->

用过`eclipse`的同学都知道，在eclipse中 输入 `main`,`alt + /`

可以进行自动补全，就可以自动补全main方法。

当然强大的`idea` 也是可以的，需要配置

先看下效果图：

输入`main`,按下`tab`,就可以出现想要的main方法了

![](http://i.imgur.com/lKIq4pw.gif)



配置idea:

    public static void main(String[] args){

        
    }

File > Settings > Editor > Live Templates

![](https://i.imgur.com/ig63CBs.png)



注意这里,设置下命令的缩写，就可以使用了

![](https://i.imgur.com/urHl2xJ.png)


还可以配置导出，可以在其他电脑上时候，就不需要重新配置一遍了

![](https://i.imgur.com/7S1JIHV.png)
	







