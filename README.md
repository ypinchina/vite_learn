# vite_learn
一个学习vite的项目实战

## 预章 —— vite的特点 
1. 开发效率极高
2. 超高速热重载
3. 社区丰富，兼容rollup
4. 开箱即用，功能完备
5. 预设应用和类库打包模式


## 什么是vite

1.构建工具的高级封装 底层主要是 rollup
2.起初是为vue服务的工具，现在第二版已经和前端框架无关绑定。
3.vite的star飞快增长，很快超越webpack

## 特点
* 使用非常简单 ，比vue-cli webpack简单很多
* 非常快，让开发者发开特别幸福，几乎没有修改热刷新的编译时间，非常快
* 便于扩展，兼容rollup的插件

## 与传统构建工具的区别 （webpack和rollup） 
* high level api (高封装，另外两个比较关注底层)
* 不包含自己编译能力，编译主要依靠esbuild和rollup。而vite不参与编译，他只是集成了rollup的功能。
* 完全基于ESM加载方式开发

* vite是为了项目而生，不是为了构建配置而生，它减少了很多配置量

* vite减少了的工作
1. dev serve (不需要配置，直接集成)
2. 各类loader(css-loader等)
3. 内置 build 命令（不需要配置）

# 第二章 Vite的优势
1. 上手非常简单
2. 开发效率极高
3. 社区成本低（兼容rollup插件）
4. 快！



## vite为什么比webpack快？

* vite只是按需编译，或者简单预编译，实时编译，不会一次编译大量文件；而webpack则是需要全部文件编译打包成一个bundle包，要消耗极大的时间
* vite使用esbuild在开发时编译，这种编译的方式比传统webpack、rollup快很多很多。 


## vite构建vue项目

* 1.0版本的vite,以vue3为主

* 2.0版本，跨框架


## vite 天生支持原生css

* 支持css-variable的使用

* 支持css alias 地址映射 

* 支持 css module

* 支持 css预编译 (sass , less , stylus)， vite天生支持预编译，只需要安装对应的预编译插件，并使用即可

## vite使用 typescript

* vite 使用的是esbuild，所以天生支持 ts 语法，但是vite只是对ts编译，不做校验

* 加上 tsc --noEmit 命令即可对ts文件进行校验

* 对于vue文件的ts校验 需要使用vue-tsc命令 以及安装该插件进行校验

* isolatedModules的使用

* client types的使用

## 静态资源处理

### types

vite中提供给import 三种 东西方便用户引入

* url (路径)

* raw (转字符串)

* worker / worker inline （与web worker相关）


### vite中import JSON


### web assembly

WASM不是一种编程语言🙂。简而言之，它是一种将用一种编程语言编写的代码转换为浏览器可理解的机器代码的技术。

WASM (WebAssembly的缩写)被设计为其他语言的编译目标，允许服务器端代码(如C或C++代码)被编译成WASM并在浏览器中执行。


vite中可以很方便地引入 web assembly文件


## vite中集成eslint 和 pritter （eslint用于规范带代码书写习惯，pritter用于自动格式化）

安装husky可以保证在git提交推送之前执行eslint规则校验，亦可执行单元测试测脚本命令


## 环境变量

### vite通过 import.meta.env 引入环境变量

### vite中有四种环境变量
* MODE（指名现在处于的环境）
* BASE_URL （基础路径）
* PROD （线上生产环境）
* DEV (开发环境)


**注意** import.meta.env这个对象只存在于dev环境中，生产环境中则没有这个对象，build命令可见


### vite 中也可以在根页面新增.env文件，从而新增环境变量


### 通过mode来指定新的环境变量文件


# 第三章 vite的高级特性

## vite热更新

### 开启热更新，不同框架有不同的方式 (使用websocket 来热更新客户端代码，热更新不会刷新页面)  HMR ，api