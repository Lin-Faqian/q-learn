// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

// 1. 简单例子
function createArray<T>(n: number): Array<T>{
  let result = []
  for(let i = 0;i < n; i++){
    result[i] = i
  }
  return result
}

console.log(createArray<number>(6))

// 2. 多类型参数
function swap<T, U>(tuple: [a: T, b: U]): [U, T]{
  return [tuple[1], tuple[0]]
}

// 泛型约束

interface Log {
  length: number
}
// 限制args必须要有length属性
function logging<T extends Log>(args: T): T{
  console.log(args.length)
  return args
}

// 限制T属于U
function multi<T extends U, U>(arg: T, more: U): T{
  console.log(more)
  return arg
}

logging<Array<any>>([11,2])

// 2.泛型接口
interface createArrayFun<T>{
  (length: number, a1: T): Array<T>
}
  // 注意返回值的类型
let createArrayFunc: createArrayFun<number> = function<T>(length: T, a1: T){
  return [length, a1]
}

// 3.泛型类
class GenericsClass<T> {
  value: T
  add: (a: number, b: T) => T
}

// 4.泛型参数默认值
class GenericsClassString<T = string> {
  value: T
  add: (a: number, b: T) => T
}

export {}