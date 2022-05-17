/** 相关语句
  declare var 声明全局变量
  declare function 声明全局方法
  declare class 声明全局类
  declare enum 声明全局枚举类型
  declare namespace 声明（含有子属性的）全局对象
  interface 和 type 声明全局类型
  export 导出变量
  export namespace 导出（含有子属性的）对象
  export default ES6 默认导出
  export = commonjs 导出模块
  export as namespace UMD 库声明全局变量
  declare global 扩展全局变量
  declare module 扩展模块
  /// <reference /> 三斜线指令
 */

// 1. 什么是声明语句？
declare var Jquery: (selector: string)=>any // 此时并没有声明有个变量仅仅是定义了变量的类型，用于编译检查，在结果中会被删除
    // 声明语句中只能定义类型，切勿在声明语句中定义具体的实现。
// 2. 什么是声明文件？
    // 1. 通常声明文件会放在（***.d.ts）文件中
$1 = function (n: number): any{
  return n
}
console.log($1(14111))

    // 2. 第三方声明文件
        // 一般使用@types来管理

/***************************** */
// 4. 书写声明文件

/**使用场景
    全局变量：       通过 <script> 标签引入第三方库，注入全局变量
    npm 包：         通过 import foo from 'foo' 导入，符合 ES6 模块规范
    UMD 库：         既可以通过 <script> 标签引入，又可以通过 import 导入
    直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构
    在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
    模块插件：        通过 <script> 或 import 导入后，改变另一个模块的结构
 */

// 5. 三斜线用法
/**
    书写一个全局变量的声明文件  /// <reference types="jquery" />
    依赖一个全局变量的声明文件
    拆分声明文件
 */