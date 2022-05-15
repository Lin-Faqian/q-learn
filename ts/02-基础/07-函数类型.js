/*
定义函数一般有两种：函数声明、函数表达式
  输入多余(少于)参数，是不被允许的
*/
//***************** 1. 函数声明
function func1() {
}
//***************** 2. 函数表达式
var func2 = function () {
};
// 等价于
var func3 = function () { };
var func4;
func4 = function (str, n) {
    return str.length == n;
};
// *************** 4. 可选参数
// 可选参数必须是在必须参数的最后，也就是说可选参数后不允许出现必须参数
function func5(n1, n2, n3) {
    console.log(n1, n2, n3);
    return 5;
}
// ************** 5. 参数默认值
// 默认参数会被ts识别为可选参数，此时不受可选参数后不允许必选参数的限制
function func6(n1, n2) {
    if (n1 === void 0) { n1 = 'cat'; }
    return n1 + n2;
}
// ************** 6. 剩余参数
// 必须是最后一个参数
function funccRest(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}
function reverse(args) {
    return args.toString().split('').reverse().join();
}
console.log(reverse(123), reverse('abc'));
