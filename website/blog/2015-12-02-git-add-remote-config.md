---
layout: post
title:  "Git 常用的命令"
date:  2015-12-02 09:55:00 +0800
categories: git
tags: git
keywords: web1992,Java, Linux,Jekyll,git
---

# Git 常用的命令

## create a new repository

```sh
  	echo  blog >> README.md
  	git init
  	git add README.md
  	git commit -m "first commit"
  	git remote add origin git@github.com:web1992/blog.git
 	git push -u origin master
```

## push an existing repository

```sh
  	git remote add origin git@github.com:web1992/blog.git
  	git push -u origin master
```

## 推送`Tag`到远程仓库

```sh
 	 # push 一个单独的tag
	 git push origin [tagname]
	 # push 所有的tag
	 git push --tags
 	 # or
	 git push origin --tags
```

## fetch tag

```sh
	获取远程的tag( 远程存在，本地不存在)
 	git fetch origin tag 2.4.7

	remote: Counting objects: 2, done
	remote: Finding sources: 100% (2/2)
 	remote: Total 2 (delta 0), reused 2 (delta 0)
 	Unpacking objects: 100% (2/2), done.
 	From ssh://project_name
 	* [new tag]         2.4.7      -> 2.4.7
 	* [new tag]         2.4.6      -> 2.4.6
```
