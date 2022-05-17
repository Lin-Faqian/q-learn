"use strict";
// 枚举（Enum）类型用于取值被限定在一定范围内的场景
exports.__esModule = true;
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
/**enum编译原理 => 双向映射
var obj = {
  0: 'index',
  'index': 0
}

 */
console.log(Days.Sun == 0);
console.log(Days[0] == 'Sun');
