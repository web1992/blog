---
layout: post
title:  "spring BeanPostProcessor "
date:  2017-10-09 10:20:00 +0800
categories: spring
tags: spring
keywords: spring,web1992
---


> BeanPostProcessor

*from [autowired](https://docs.spring.io/spring/docs/4.3.x/spring-framework-reference/htmlsingle/#beans-autowired-annotation)*

> @Autowired, @Inject, @Resource, and @Value annotations are handled by Spring BeanPostProcessor implementations which in turn means that you cannot apply these annotations within your own BeanPostProcessor or BeanFactoryPostProcessor types (if any). These types must be 'wired up' explicitly via XML or using a Spring @Bean method.