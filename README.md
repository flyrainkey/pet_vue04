## pet项目


### 项目组成
* 组长: 杨勇海
* 成员: 温景业 陈奎宁 施碧辉 赵越
* 项目开始: 2017年8月7日11:04:19

### 项目期间版本记录

* 

#### 1.1 项目描述

* 此项目为宠物商城App核心的商家模块的SPA
* 包括商品、评论、商家介绍、购物车等多个子模块
* 使用Vuejs全家桶+ES6+Webpack等前端最新最热的技术
* 采用模块化、组件化、工程化开发

#### 1.2 技术选型

* 前后台数据处理/交互/组件化
* 后台 `mockjs`
* 项目构建 `webpack`， `vue-cli` ，`eslint`
* css预编译 stylus
* 编码检查规范 eslint

### 2.1 项目开发流程

#### 1. 使用 vue-cli(脚手架)搭建项目 

* Vue-cli是vue官方提供的用于搭建基于vue+webpack+es6项目的脚手架工具
* 在线文档: https://github.com/vuejs/vue-cli
* 具体操作: 
```
npm install -g vue-cli : 全局下载工具
vue init webpack pet :下载基于webpack模板项目
cd pet
npm install : 下载项目依赖的所有模块
npm run dev
访问: localhost:8080

```
#### 2. 项目结构分析

```
pet_vue04
  |-- build : webpack相关的配置文件夹(基本不需要修改)
    |-- dev-server.js : 通过express启动后台服务器
  |-- config: webpack相关的配置文件夹(基本不需要修改)
    |-- index.js: 指定的后台服务的端口号和静态资源文件夹
  |-- node_modules
  |-- src : 源码文件夹
    |-- components: vue组件及其相关资源文件夹
    |-- app.vue: 应用根主组件
    |-- main.js: 应用入口js
  |-- static: 静态资源文件夹
  |-- .babelrc: babel的配置文件
  |-- .editorconfig: 通过编辑器的编码/格式进行一定的配置
  |-- .eslintignore: eslint检查忽略的配置
  |-- .eslintrc.js: eslint检查的配置
  |-- .gitignore: git版本管制忽略的配置
  |-- index.html: 主页面文件
  |-- package.json: 应用包配置文件 
  |-- README.md: 应用描述说明的readme文件

```
#### 3.	编码测试与打包发布项目

* 编码测试
  1. `npm run dev`
  2. 访问 http://localhost:8080
  3. 编码, 自动编译打包(HMR), 查看效果
  
* 打包发布
  1. `npm run dev`
  2. `npm install -g pushstate-server`
  3. `pushstate-server dist`
  4. 访问: http://localhost:9000












