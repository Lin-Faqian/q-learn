// 枚举（Enum）类型用于取值被限定在一定范围内的场景

enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

/**enum编译原理 => 双向映射
var obj = {
  0: 'index',
  'index': 0
}

 */
console.log(Days.Sun == 0) // => true
console.log(Days[0] == 'Sun') // => true

// 可手动赋值
enum Days1 {
  Sat = 7,
  Sun = 1, // 此处开始递增，手动赋值避免覆盖
  Mon,
  Tue,
  Wed,
  Thu,
  Fri
}
console.log(Days1)

// 常数项、计算所得项
enum Colors {
  Red,
  Blue,
  Yellow,
  black = 'black'.length // 计算所得，后续项必须手动赋值
}
console.log(Colors)

/*
当满足以下条件时，枚举成员被当作是常数：
    1、 不具有初始化函数并且之前的枚举成员是常数。在这种情况下，当前枚举成员的值为上一个枚举成员的值加1。但第一个枚举元素是个例外。如果它没有初始化方法，那么它的初始值为0。
    2、 枚举成员使用常数枚举表达式初始化。常数枚举表达式：
      1、 数字字面量
      2、 引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用
      3、 带括号的常数枚举表达式
      4、 +, -, ~ 一元运算符应用于常数枚举表达式
      5、 +, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错
*/

// 常数枚举
const enum D1{
  up,
  down,
  left,
  right
} // 常数枚举与普通枚举的区别是常数枚举会在编译阶段被删除且不能包含计算选项

console.log([D1.down,D1.left,D1.right, D1.up])

// 外部枚举

declare enum D2 {
  up,
  down,
  left,
  right
}
console.log([D2.down,D2.left,D2.right, D2.up])

export {}