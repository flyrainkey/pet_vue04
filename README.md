## pet项目


### 项目组成
* 组长: 杨勇海
* 成员: 温景业 陈奎宁 施碧辉 赵越
* 项目开始: 2017年8月7日11:04:19

### 8.7 项目版本记录

#### 0.自己开发过程遇到的问题  

**`box-sizing` 盒模型**
1. 模拟不正确支持css盒子模型规范的浏览器 
2. 初始值 `content-box`
3. `border-box` 告诉浏览器你的内边框和padding包含在width在内
4. 伪元素的运用， 防止内外边距重叠、清除浮动
    ```
    clearfix:before , clearfix:after{
        content: '';
        display: table;
        clear: both;
    }
    ```
5. `vertical-align` 指定行内元素 (inline) 

   ```
   1. 初始值 baseline
   2. 适用元素 inline-level and table-cell elements
   3. 是否继承  否
   4. 大部分取值是相对于父元素来说的：
   ```


#### 1. 高成平
1. 样式引入 `href= './' ` 不知道绝对路径和相对路径
2. a 标签去除默认样式 `text-decoration: none`
3. 默认浏览器为360， 设置为Chrome

#### 2. 温景业
1. a 标签使用伪类修改样式
2. 轮播图引入插件和使用问题

#### 3. 赵越

1. 图片要保存到静态资源 static文件里

#### 4. 施碧辉

1. 轮播图插件的选取 
2. 脚手架下载和结构搭建
3. .清楚所有默认样式的css文件（reset） 

#### 5.陈奎宁

1. 在webStorm里怎么关联我的github账号？
2. 如何修改input里面的placeholder的字体大小？

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
  


















