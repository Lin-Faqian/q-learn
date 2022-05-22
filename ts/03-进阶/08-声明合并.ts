// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型

// 函数合并 ==> 函数重载

function add(a: string, b: number): string
function add(a: string, b: number): number
function add(a: string, b: number): string | number{
  return a + b
}

// 接口合并
interface Arm{
  value: string
}

interface Arm {
  length: number
}

// => 等价于
interface Arm{
  length: number
  value: string
}

// 类的合并规则与接口一样

export {}