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

* 支持 css module

* 支持 css预编译 (sass , less , stylus)
