/**
 * 数组类型多种定义方式
 */

// 1. 类型 + []
let arr1: number[] = [1,2,3,4,5]
// ==> 只允许出现指定类型

// 2. 数组泛型
let arr2: Array<number> = [1,2,3,4]

// 3.接口实现数组
interface NumberArray {
  [propName: number]: number
}

let arr3: NumberArray = [1,2,3]

// 4. 类数组 ==> 内置接口
interface IArguments{
  [index: number]: any
  length: number
  callee: Function
}

function sum(){
  let args: IArguments = arguments
  console.log(args)
}

