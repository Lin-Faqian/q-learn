// 5种原始数据类型
// 1.布尔值
let bool: boolean = true
// 构造函数的布尔对象
let boolObj: Boolean = new Boolean(1) 

// 2. 数值
let num: number = 6
let binNum: number = 0b11 // 二进制
let notNum: number = NaN
let iniNum: number = Infinity

// 3.字符串
let str: string = 'dom'
let temp: string = `dom ${str}`


// null和undefined是所有类型的子类型可以赋值给任何类型
// 4.null
let nullData: null = null
let data: string = null

// 5.undefined
let u: undefined = undefined


/***  非原数值
 * 空值
 */

// 1.void: 表示毫无返回值的函数
function voidFun(): void{
  console.log("void")
}

export {} // 模块化