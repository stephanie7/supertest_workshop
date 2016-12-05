###使用mkdir命令新建项目目录，然后进入该目录下，安装API测试所需要的安装包###

创建项目文件夹，安装下面步骤安装：

npm init
npm install
初始化以及安装相关依赖

##一：环境搭建##
supertest是一个测试http请求的库。本文主要是针对http请求的API测试，所以这是一个非常理想的工具。

安装Supertest：
命令：`npm install supertest --save-dev`

mocha支持BDD，且只关心总体的结构，而对于实际的断言毫不关心。这不仅允许我们持续观察测试，同时也允许我们自由选择使用自己喜欢的断言库。

安装mocha:
命令：`npm install -g mocha (带参数-g 为全局安装) `

Chai是一个非常好的assert库的替代品。
安装chai：
命令：`npm install chai`

Grunt是一个基于任务的JavaScript项目命令行构建工具，运行于 Node.js 平台
安装grunt：
命令：`npm install grunt-cli -g`

集成Mocha到Grunt，安装grunt-mocha-test
命令：`npm install grunt-mocha-test`

至此环境搭建完成。

##二：运行##
运行：
`grunt`

本地查看结果运行:
`mocha 文件名`
