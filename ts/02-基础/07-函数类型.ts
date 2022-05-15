/*
定义函数一般有两种：函数声明、函数表达式
  输入多余(少于)参数，是不被允许的
*/

//***************** 1. 函数声明
function func1():void{

}
//***************** 2. 函数表达式
const func2 = function():void{ // 类型推断

}

// 等价于
const func3: () => void = function(){}
/*在ts中 => 左侧是输入类型需括号起来，右侧是函数返回值类型*/

// **************** 3. 接口定义函数的形状
interface ShapeFunc{
  (str: string, num: number): boolean
}

let func4: ShapeFunc
func4 = function(str: string, n: number){
  return str.length == n
}

// *************** 4. 可选参数
// 可选参数必须是在必须参数的最后，也就是说可选参数后不允许出现必须参数
function func5(n1: number, n2: number, n3?: string): number{
  console.log(n1,n2,n3)
  return 5
}

// ************** 5. 参数默认值
// 默认参数会被ts识别为可选参数，此时不受可选参数后不允许必选参数的限制
function func6(n1: string = 'cat', n2: string): string {
  return n1 + n2
}

// ************** 6. 剩余参数
// 必须是最后一个参数
function funccRest(arr: any[], ...rest: any[]): void{

}

// ************* 7. 函数重载
function reverse(args: string): string;
function reverse(args: number): number;
function reverse(args: number|string): number|string{
  return args.toString().split('').reverse().join()
}

console.log(reverse(123), reverse('abc'))