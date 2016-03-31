---
layout: post
title:  "vim 插件"
date:  2016-03-30 9:55:00 +0800
categories: vim
tags: vim
keywords: vim,web1992
---

vim 插件
---
<!--more-->
.vimrc配置
---
	{% highlight sh %}
	set nocompatible              " be iMproved, required
	filetype off                  " required
	set nu
	" set the runtime path to include Vundle and initialize
	set rtp+=~/.vim/bundle/Vundle.vim
	call vundle#begin()
	" alternatively, pass a path where Vundle should install plugins
	"call vundle#begin('~/some/path/here')

	" let Vundle manage Vundle, required
	Plugin 'VundleVim/Vundle.vim'
	Plugin 'tomasr/molokai'
	Plugin 'scrooloose/nerdtree'
	Plugin 'Valloric/YouCompleteMe'
	Plugin 'miyakogi/conoline.vim'
	Plugin 'majutsushi/tagbar'
	Plugin 'ctrlpvim/ctrlp.vim'
	Plugin 'bling/vim-airline'
	Plugin 'vim-airline/vim-airline-themes'
	Plugin 'artur-shaik/vim-javacomplete2'
	"Plugin 'tpope/vim-pathogen'
	Plugin 'scrooloose/syntastic'


	" Highlight current line
	"au WinLeave * set nocursorline nocursorcolumn
	"au WinEnter * set cursorline cursorcolumn
	"set cursorline cursorcolumn

	"#######################################################
	"pathogen
	"execute pathogen#infect()
	"syntax on
	"filetype plugin indent on
	"#######################################################
	" Tagbar
	let g:tagbar_width=35
	let g:tagbar_autofocus=1
	nmap <F8> :TagbarToggle<CR>
	"/home/vim_tools/markdown2ctags
	let g:tagbar_type_markdown = {
		\ 'ctagstype': 'markdown',
		\ 'ctagsbin' : '/home/vim_tools/markdown2ctags/markdown2ctags.py',
		\ 'ctagsargs' : '-f - --sort=yes',
		\ 'kinds' : [
			\ 's:sections',
			\ 'i:images'
		\ ],
		\ 'sro' : '|',
		\ 'kind2scope' : {
			\ 's' : 'section',
		\ },
		\ 'sort': 0,
		\ }
	"#######################################################
	" NERD tree
	let NERDChristmasTree=0
	let NERDTreeWinSize=35
	let NERDTreeChDirMode=2
	let NERDTreeIgnore=['\~$', '\.pyc$', '\.swp$']
	let NERDTreeShowBookmarks=1
	let NERDTreeWinPos="left"
	" Automatically open a NERDTree if no files where specified
	autocmd vimenter * if !argc() | NERDTree | endif
	" Close vim if the only window left open is a NERDTree
	autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTreeType") && b:NERDTreeType == "primary") | q | endif
	" Open a NERDTree
	nmap <F5> :NERDTreeToggle<cr>
	"#######################################################

	"let g:molokai_original = 1
	let g:rehash256 = 1
	"#######################################################
	let g:ycm_python_binary_path = '/usr/bin/python'
	"#######################################################
	"java
	autocmd FileType java setlocal omnifunc=javacomplete#Complete
	nmap <F4> <Plug>(JavaComplete-Imports-Add)
	imap <F4> <Plug>(JavaComplete-Imports-Add)
	nmap <F5> <Plug>(JavaComplete-Imports-AddMissing)
	imap <F5> <Plug>(JavaComplete-Imports-AddMissing)
	nmap <F6> <Plug>(JavaComplete-Imports-RemoveUnused)
	imap <F6> <Plug>(JavaComplete-Imports-RemoveUnused)

	"#######################################################
	"#######################################################

	" For light colorschemes
	let g:conoline_color_normal_light = 'guibg=#eaeaea'
	let g:conoline_color_normal_nr_light = 'guibg=#eaeaea'
	let g:conoline_color_insert_light = 'guibg=#ffffff'
	let g:conoline_color_insert_nr_light = 'guibg=#ffffff'

	"#######################################################

	call vundle#end()            " required
	filetype plugin indent on    " required

	{% endhighlight %}

vim 效果图
---
参考教材：
[http://www.open-open.com/lib/view/open1429884437588.html](http://www.open-open.com/lib/view/open1429884437588.html)

> 主页面
>

![](http://i.imgur.com/4JljPIN.png)

> 底部搜索栏
>

![](http://i.imgur.com/5qcvHYj.png)



