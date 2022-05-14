/**
 * 任意值表示可以赋值任意类型和值
 * 普通值类型必须是指定的类型
 */

let str1: string = 'dom'

// 报错
// str1 = 111
// Type 'number' is not assignable to type 'string'.

let anyType: any = 11111
anyType = 'kkk'

// 2.未声明变量类型的变量 ==> 被解析为any类型
let str2;
str2 = 'dom2'
