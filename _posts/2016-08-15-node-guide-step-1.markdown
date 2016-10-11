---
layout: post
title:  "node 入门"
date:  2016-08-15 17:50:00 +0800
categories: node
tags: node
keywords: node,web1992
---

`node` 入门,记录`node`学习日记

本文标题虽然是`node`入门，其实讲的是搭建`node`开发环境所需要的工具，现在的`前端开发`，已经不是之前的时代。

`旧时代`：`一个记事本`＋`一个浏览器`，就可以进行开发，写页面了。

`新时代`：各种环境依赖，依赖管理，打包工具，等等。。。都是开发的准备环境

`旧时代`，减少了搭建环境的时间,可随时开始开发，但是如果项目过大，依赖过多，项目后期不方便项目管理，效率必然下降。

`新时代`，虽然搭建环境所需要的时间多了，（当然作为一个程序员，所学的技能也多了），但是可以统一项目构架，项目规范，
在项目比较大的时候，优势才更明显。（如果只是写个简单的静态页面，就没必要用这个了，浪费时间，不划算）

>PS: 现在如果随便在github上面下载一个web项目，基本都会用到node,npm,gulp,等等，所以熟悉`新时代`前端开发所使用的工具，
>跟进时代的步伐，是作为一个程序员必备的技能。

这里提供一个项目供参考（如果对现在的web项目的开发工具，流程没有接触， 我相信这个项目你就跑不起来）
[Bootstrap 后台模板](https://github.com/puikinsh/Bootstrap-Admin-Template)

<!--more-->

- [node 是什么][#node_what_is]
- [node 安装][#node_install]
- [npm 是什么][#npm]
- [npm 安装][#npm_install]
- [cnpm][#cnpm]
- [bower 是什么][#bower]
- [bower 安装][#bower_install]
- [gulp 是什么][#gulp]
- [gulp 安装][#gulp_install]
- [browsersync][#browsersync]



<a herf="#node_what_is"> </a>
###node_what_is 是什么

来自官网首页的描述
>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
>
>Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
> 
>Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
>

<a herf="#node_install"> </a>
###node_install 安装

>下载地址：https://nodejs.org/en/
>
下载后是一个exe,进行安装即可

window下cmd输入 `node -v` 出现如下内容，则说明node安装成功

![](http://i.imgur.com/4UYdpXV.jpg)


<a herf="#npm"> </a>
###npm 是什么

npm 官网地址 https://www.npmjs.com/

来自官网首页的描述
>npm is the package manager for JavaScript.
> 
>Find, share, and reuse packages of code from hundreds of thousands of developers — and assemble them in powerful new ways.


<a herf="#node_install"> </a>
###npm_install 安装

最新版本的node已经集成了npm, 输入 `npm -v`,出现如下内容，则说明npm安装成功

![](http://i.imgur.com/omBd0PE.jpg)

###cnpm 

[npm镜像，解决npm慢的问题](https://npm.taobao.org/)

<a herf="#bower"> </a>
###bower 是什么

官网地址：https://bower.io/

来自官网的描述：
>Web sites are made of lots of things — frameworks, libraries, assets, and utilities.
>
>Bower manages all these things for you.


博客教程：http://www.cnblogs.com/CraryPrimitiveMan/p/3695518.html

<a herf="#bower_install"> </a>
###bower_install 安装

`npm install -g bower`

输入 `bower -v`,出现如下内容，则说明bower安装成功

![](http://i.imgur.com/EFHsBWj.jpg)




<a herf="#bower"> </a>
###gulp 是什么

官网地址：http://www.gulpjs.com.cn/

来自官网的描述：
用自动化构建工具增强你的工作流程！

博客教程：http://www.cnblogs.com/starof/p/5194622.html



<a herf="#bower_install"> </a>
###gulp_install 安装

`npm install gulp -g`

或者

`cnpm install gulp -g`

博客教程：http://www.cnblogs.com/starof/p/5194622.html

输入 `gulp -v`,出现如下内容，则说明bower安装成功

![](http://i.imgur.com/O1WYvrG.jpg)



###browsersync 浏览器实时刷新

[省时的浏览器同步测试工具](http://www.browsersync.cn/)


[#node_what_is]:#node_what_is
[#node_install]:#node_install
[#npm]:#npm
[#npm_install]:#npm_install
[#cnpm]:#cnpm
[#bower]:#bower
[#bower_install]:#bower_install
[#gulp]:#gulp
[#gulp_install]:#gulp_install
[#git]:#git
[#git_install]:#git_install
[#browsersync]:#browsersync



