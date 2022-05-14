/**
 * 如果没有明确指定一种类型，那么ts就会根据类型推断的规则出一个类型
 */


let str3 = 'yyy'
// 此时推断str3是string类型
// str3 = 3333 ==> Type 'number' is not assignable to type 'string'.

let anyT; // ==>推断为any类型