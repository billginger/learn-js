# 来线上跟我一起玩吧！

## 课程内容

基于微信小程序实现一个猜数字游戏。

## 知识点

### 微信小程序

微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

随着微信的普及，很多人都了解或使用过微信小程序。那如何来开发一个微信小程序呢？

要进行微信小程序的开发，需要先阅读微信小程序的官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/

根据官方文档的指引，我们需要申请一个微信小程序帐号，并下载安装开发者工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 微信云开发

微信云开发是微信团队联合腾讯云推出的专业的小程序开发服务。

开发者可以使用云开发快速开发小程序，并且原生打通微信开放能力。

开发者无需搭建服务器，可免鉴权直接使用平台提供的 API 进行业务开发。

在我们的示例项目中，也选择了微信云开发来提供后端服务。

### 创建小程序

打开并登录微信开发者工具，新建小程序项目，填入 AppID，后端服务选择“微信云开发”并勾选同意“云开发服务条款”。

点击创建后，即可得到一个展示云开发基础能力的示例小程序。

详情请参考：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/quick-start/miniprogram.html

### 修改小程序

我们在示例小程序的基础上进行修改，开发我们的猜数字游戏。

我们修改了 miniprogram\app.json 文件，将 navigationBarTitleText 改为“跟我一起猜数字”。

然后对 miniprogram\pages\index 目录下的文件进行修改。

#### miniprogram\pages\index\index.wxml

wxml 文件是微信小程序的页面骨架文件，相当于 html 文件。

在我们的代码中，我们可以看到熟悉的 input 标签和 button 标签。

#### miniprogram\pages\index\index.wxss

wxss 文件是微信小程序的样式文件，相当于 css 文件。

在我们的代码中主要定义了 input-area 这个 class。

#### miniprogram\pages\index\index.js

js 文件是微信小程序的逻辑代码文件。

页面中所有的动态内容都会通过 data 来定义，并通过监听一些事件来改变 data。
