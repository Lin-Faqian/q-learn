/**
 * 任意值表示可以赋值任意类型和值
 * 普通值类型必须是指定的类型
 */
var str1 = 'dom';
// 报错
// str1 = 111
// Type 'number' is not assignable to type 'string'.
var anyType = 11111;
anyType = 'kkk';
// 2.未声明变量类型的变量 ==> 被解析为any类型
var str2;
str2 = 'dom2';
