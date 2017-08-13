## pet项目

#### 项目测试访问地址

[项目测试地址](http://192.168.21.54:8080/#/shouye "内部测试地址")

#### 1.1 项目描述

* 此项目为宠物商城App核心的商家模块的SPA
* 包括商品、评论、商家介绍、购物车等多个子模块
* 使用Vuejs全家桶+ES6+Webpack等前端最新最热的技术
* 采用模块化、组件化、工程化开发
<div  align="center">    
<img src="http://i.imgur.com/KzGAHLE.png" width = "300" height = "200" alt="haha" align=center />
</div>

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
  2. 访问 http://192.168.21.54:8080/#/shouye
  3. 编码, 自动编译打包(HMR), 查看效果
  
* 打包发布
  1. `npm run build`
  2. `npm install -g pushstate-server`
  3. `pushstate-server dist`
  4. 访问: http://192.168.21.126:8080/#/index
> 注意: 在打包发布的时候，本地测试 需要将打包路径修改！

```
config/index.js/assetsPublicPath: '/',

修改为:

config/index.js/assetsPublicPath: './',
```
  
  
  
### 项目组成
* 组长: 杨勇海
* 成员: 温景业 陈奎宁 施碧辉 赵越
* 项目开始: 2017年8月7日11:04:19

<div  align="center">    
<img src="http://i.imgur.com/ktlz6mY.jpg" width = "300" height = "200" alt="haha" align=center />
</div>

### 8.7 项目版本记录

#### 开发过程遇到的问题 
 
#### 0.杨勇海  访问: http://192.168.21.126:8080/#/index

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
    经典去除浮动样式
    ```
    clearfix:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    ```
5. `vertical-align` 指定行内元素 (inline) 

   ```
   1. 初始值 baseline
   2. 适用元素 inline-level and table-cell elements
   3. 是否继承  否
   4. 大部分取值是相对于父元素来说的：
   ```
6. 学习使用轮播图 `mint-ui` 插件 
 
7. 伪类的使用 
    * `:first-child` CSS伪类代表父元素的第一个子元素
    * `:nth-child(2n+1)` CSS伪类代表父元素的2n+1个元素

8. `display: flex` 的巧妙利用

    * login组件 头部布局  首行文字 两侧对齐 `justify-content: space-between`

9   锚链接的利用

    * 从一个路由组件跳转到另外一个组件 可以直接用 `a` 标签的 `href` 属性  
    ` <a href="#index" class="back"> `
    
10. git 代码提交的时候可以插入表情了-GitHub表情的使用 
   `git commit –m 'commit some changes :blush:'`



#### 1. 高成平
1. 样式引入 `href= './' ` 不知道绝对路径和相对路径
2. a 标签去除默认样式 `text-decoration: none`
3. 默认浏览器为360， 设置为Chrome
4. Chrome插件安装 infinity 
5. position 定位 

#### 2. 温景业 访问: http://192.168.21.40:8080/#/shouye
1. a 标签使用伪类修改样式
2. 轮播图引入插件和使用问题
3. 子路由里面 a 标签 href属性的占位符值 不能写 ###   必须要用 `javascript:;` 



#### 3. 赵越  访问: http://192.168.21.47:8080

1. 图片要保存到静态资源 static文件里
2. 问题：git 环境变量的配置 
3. 轮播图不显示问题？ 原因：未写高度 
4. webstorm如何排除不想索引的文件
```
解决： 对着 /node_modules 右键 make directory as ---->  not excluded
```


#### 4. 施碧辉 访问: http://192.168.21.35:8080/#/homepage

1. 轮播图插件的选取 
2. 脚手架下载和结构搭建
3. 清楚所有默认样式的css文件（reset） 
4. vue-antd不稳定，官方文档不推荐使用，npm下载下来不能使用
5. click绑定多个事件：@click="xxx();xxx()"才能生效
6. 设置子路由的时候：缩进、标点问题
7. header footer抽取出来 

#### 5.陈奎宁 访问 http://192.168.21.54:8080/#/shouye



1. 在webStorm里怎么关联我的github账号？
2. 如何修改input里面的placeholder的字体大小？ 
3. 技术点  滑动ui库 mint-ui better-scroll
4. 一行文字不换行省略号显示文本的样式设计 
 ```
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
 ```
5. 事件委派 给父元素绑定事件 当子元素内部还有子元素 
    通过event.target得不到父元素下的第一代子元素 得到的是子元素内部的子元素 
    
6. 原生DOM操作为标签绑定class属性报错问题

   ```
   Uncaught TypeError: Cannot set property 'className' of null
        at VueComponent
   ```
   
   
 


















