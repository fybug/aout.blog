<p align="center">
<img src="https://images.gitee.com/uploads/images/2022/0203/204940_06b67b32_2071767.png" width="351" height="210" alt="Icon"/>

# aout.blog
![](https://img.shields.io/badge/version-0.0.1-00b58a.svg "当前版本")
![](https://img.shields.io/badge/PDWebpack-0.0.1-76aecb.svg "开发所使用的 webpack 版本")
![](https://img.shields.io/badge/license-Apache%202.0-f27122.svg "使用的开源协议")

**PDWebpack** 的伪动态博客数据生成及使用插件，用于扫描 markdown 文件并生成为 json 数据文件。

采用单独文件记录分页总数，单独文件记录分页中的内容数据的方法，可以在不更改网页代码的情况下在完全静态以及动态网站之间切换。

> [插件使用实例: fybug.gitee.io](https://fybug.gitee.io/projectsby/main.html)

可通过 **WIKI** 学习如何使用

## 使用方法
下载库的压缩文件，通过 **发行版** 下载，带 _bin 后缀的是带有依赖库的。

安装方式参考 **wiki** 文档

## 依赖的其他项目
- [vhannels](https://gitee.com/fybug/vhannels)

## 安装 Node.js 依赖
需要在 **PDWebpack** 的基础上追加一些依赖库。
```
npm install fs globby marked path --save-dev
```

## 提供bug反馈或建议
- [码云Gitee](https://gitee.com/fybug/aout.blog)
- [Github](https://github.com/fybug/aout.blog)