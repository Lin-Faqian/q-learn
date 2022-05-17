// 元组合并不同类型的对象

// 初始化必须或赋值必须提供元组中的所有项
let tuple: [number, string] = [1, 'jkk']
console.log(tuple)

// 越界元素 ==> 可以是联合类型,所有的元组类型联合
tuple.push(11111)
// tuple.push(true) // => Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log(tuple)
export {}