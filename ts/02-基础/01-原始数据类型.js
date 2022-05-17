"use strict";
exports.__esModule = true;
// 5种原始数据类型
// 1.布尔值
var bool = true;
// 构造函数的布尔对象
var boolObj = new Boolean(1);
// 2. 数值
var num = 6;
var binNum = 3; // 二进制
var notNum = NaN;
var iniNum = Infinity;
// 3.字符串
var str = 'dom';
var temp = "dom ".concat(str);
// null和undefined是所有类型的子类型可以赋值给任何类型
// 4.null
var nullData = null;
var data = null;
// 5.undefined
var u = undefined;
/***  非原数值
 * 空值
 */
// 1.void: 表示毫无返回值的函数
function voidFun() {
    console.log("void");
}
