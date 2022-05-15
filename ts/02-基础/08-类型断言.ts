/**
 * 可以手动指定一个值的类型。
 * 语法：
 *  值 as 类型   ||   <类型>值（该方式不建议使用，ts中也用于泛型，react中不允许使用该方法）
 *   断言只能让ts在编译阶段通过，运行时仍可能出问题
 */


//****************** 用途1：将一个联合类型断言为其中一个类型
    // 不确定联合类型具体是哪一个，所以只能访问类型的公共属性和方法
interface Cat{
  name: string
  swin: ()=>void
}

interface Dog{
  name: string
  spark: ()=>void
}

function animal1(t: Cat | Dog): void{
  // if(typeof t.spark == 'function'){ // Property 'spark' does not exist on type 'Cat'
  // }
  if(typeof (t as Dog).spark == 'function'){ // 此时我们断言t是Dog类型，编译器信任此操作，一旦传入Cat类就会报错
  }
  console.log(t.name)
}

// ******************** 用途2：将一个父类断言为更加具体的子类
class ApiError extends Error{
  status: number
}
class HttpError extends Error{
  code: number
}

function isApiError(err: Error): boolean{
  if(typeof (err as ApiError).status == 'string'){
    return true
  }
  return false
}

// ************ 用途3：将任何类型断言为any
// window.foo = 'jkjk' // Property 'foo' does not exist on type 'Window & typeof globalThis'
(window as any).foo = 'dddd'

// ************* 用途4：将any断言为具体类型
function getCacheData(key: string): any{
  let cache = {}
  return cache[key]
}

interface o {
  name:string
  run(): void
}
let tom = getCacheData('tom') as o
tom.run()

/**
 * 总结:A兼容B，那么A能够被断言为B，而B不能被断言为A
 * 联合类型可以被断言为一个类型
 * 父类可以断言为子类
 * 任何类型都可以被断言为any
 * any可以被断言为任何一种类型
 * 
 */

// 双重断言
//  可行但是非常不建议

// 类型断言 不等于 类型转换
// 类型声明优与类型断言 ==> 在使用变量时就指定类型
// 类型断言vs泛型  ==> 去除any 的最佳方式

