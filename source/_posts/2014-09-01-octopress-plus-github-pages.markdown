---
layout: post
title: "Octopress + Github Pages"
date: 2014-09-01 15:04:01 +0800
comments: true
categories: 
---

##Octopress + Github Pages = a new blog

#####[document](http://octopress.org/docs/setup)

#####Enviroment: Ubuntu 12.00

###1.Installing Ruby With RVM

####Install RVM

	curl -L https://get.rvm.io | bash -s stable --ruby

<!-- more -->

Then run:

	source ~/.rvm/scripts/rvm

to start RVM

####Install Ruby 1.9.3

	rvm install 1.9.3
	rvm use 1.9.3
	rvm rubygems latest

###2.Deploying to Github Pages

####With Github User/Organization pages

Create a new Github repository and name the repository with the format `username.github.io`

Just an empty repository is okay.

	rake setup_github_pages

Next run:

	rake generate
	rake deploy
