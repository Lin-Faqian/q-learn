// 类型别名==>给一个类型起个新名字

// 常用于联合类型
type typeString = string
type typeStringResolve = number
type newName = typeString | typeStringResolve

let name: newName
name = 45122
console.log(name)
export {}