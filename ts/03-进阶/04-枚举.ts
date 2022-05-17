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

export {}