# FireShort

简体中文 | [English](./README.en.md)

FireShort 的一款基于 Firebase 的 Serverless 纯前端短链接生成工具

本项目不依赖后端，仅在前端使用 JS 跳转到目标网址，且 URL 结构可同普通短网址程序一样。

*项目灵感和原理可以参考 [我写了一个无需后端的短网址程序... ](https://ibcl.us/ShortLink-Firebase_20230626/)。*

## 快速开始

### 1. 创建 Firebase 项目

前往 [Firebase 控制台](https://console.firebase.google.com/)，然后点击 Add project 创建一个项目。

输入项目名称，点击 Continue，禁用 Google Analytics，点击 Create project。

项目创建完成后，在 Project Overview 页面展开侧边栏，在 Build 中选中 Realtime Database，然后创建数据库。对于中国用户，建议将数据库位置设置为 asia-northeast1。

### 2. 修改数据库安全规则

在 Realtime Database 页面，点击 Rules 选项卡，复制本仓库中 `rules.json` 的内容，粘贴到 Rules 编辑器中，然后点击 Publish。

[rules.json](https://github.com/bclswl0827/FireShort/blob/master/rules.json)

### 3. 部署项目

确保本地已安装 Node.js，然后克隆本仓库，进入项目根目录。

```bash
$ git clone https://github.com/bclswl0827/FireShort --depth=1 && cd FireShort
```

安装项目所需依赖。

```bash
$ npm install
```

构建项目。

```bash
$ npm run build
```

输出的 `build` 目录即为项目构建结果，将其部署到任意静态网站托管服务即可。

## 赞助商

[DartNode](https://dartnode.com) revolutionizes hosting with our Wholesale Cloud approach, combining affordability with high-performance in a state-of-the-art data center. As a dedicated ARIN Member and network operator, we ensure 24/7 reliability and superior service, empowering your digital journey with cost-effective solutions.

<a href="https://dartnode.com" _target="_blank">
    <img src="https://app.dartnode.com/assets/dash/images/brand/logo.png" style="background: #2d2d38; border-radius: 5px;" />
</a>
