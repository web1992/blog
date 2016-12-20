---
layout: post
title:  "使用 jekyll 搭建博客"
date:  2016-02-03 18:55:00 +0800
categories: jekyll
tags: jekyll
keywords: jekyll,web1992
---


## build blog with jekyll (使用 jekyll 搭建博客)

> 本文不涉及具体的安装步骤，官网都有详细的步骤，这里只提供相关的安装技巧&遇到问题的解决


[jekyll 官网地址](http://jekyllrb.com/)

[jekyll 中文官网地址](http://jekyll.bootcss.com/)


<!--more-->

* 安装准备
	* `ruby` 运行环境安装
	* `gem` 安装 （`ruby` 管理工具安装，类似linxu 的 `yum` Ubuntu 的`apt-get`）

## 安装 ruby,gem,jekyll

> yum install ruby 安装 ruby  环境
> 
> yum install gem  可以快速安装gem 
> 
> gem install jekyll 此命令会超时，需要翻墙，可以在这里 https://ruby.taobao.org/ 找到解决办法


## jekyll 主题

> 在搭建玩博客之后，jekyll 自带的主体非常的简单，如果需要更换网站的主体，在这里 
> 
> [http://jekyllthemes.org/](http://jekyllthemes.org/)
>
> 有许多网站主题可供选择，大多都在github 上面托管 
> 
> ![](http://i.imgur.com/rfjhQtj.png)
> 
> 可以在 README.md 中找到安装说明

## jekyll主题安装技巧

有许多主体使用了插件，如果不安装插件，在使用主题时，会报错

查看本地已经安装的插件

    gem list --local


常用的gem 命令可以在这里找到

[gem 命令](http://www.cnblogs.com/orez88/articles/1763022.html)

列出远程库的所有可用软件(插件)
 
    gem query --remote

也可以使用grep查找json软件

    gem query --remote | grep 'json' 

安装

    gem install json

查找提供分页的插件软件

    gem query --remote | grep 'jekyll-paginate' 

安装

    gem install jekyll-paginate

当你使用某个主题时，运行 jekyll s 如果缺少运行时的相关软件，按照上面的方法安装插件即可

大坑！！！

有时你虽然安装了gem的json环境，但是在使用 `jekyll s ` 启动博客时，依然报错，提示:

> not found json (Load error)

原因

一些博客主题会在 jekyll 网站目录下面配置 Gemfile,Gemfile.lock 相关文件（设置`ruby`依赖的）
删除 Gemfile 文件即可

    rm -rf Gemfile*
    




