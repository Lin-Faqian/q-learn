/**
 * 使用接口来定义对象的类型
 */

// 赋值的时候，变量的形状必须和接口的形状保持一致
interface Person {
  name: string
  age: number
  height: number
  gender?: string // 可选属性
  readonly firstName: string // 可读属性
  [propName: string]: any // 任意属性
  // [propName: string]: number // 任意属性,报错
}

// 对象中必须包含接口所有的属性
let p1: Person = {
  name: 'un',
  age: 55,
  height: 110,
  firstName: 'lin',
  abs: 'hju'
}
console.log(p1)

// 1. 可选属性
// 该属性可有可无

// 2. 只读属性
// p1.firstName = 'jjk' ==> 不允许再次赋值
// Cannot assign to 'firstName' because it is a read-only property.

// 3. 任意属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集