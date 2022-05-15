/**
 * 可以手动指定一个值的类型。
 * 语法：
 *  值 as 类型   ||   <类型>值（该方式不建议使用，ts中也用于泛型，react中不允许使用该方法）
 *   断言只能让ts在编译阶段通过，运行时仍可能出问题
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function animal1(t) {
    // if(typeof t.spark == 'function'){ // Property 'spark' does not exist on type 'Cat'
    // }
    if (typeof t.spark == 'function') { // 此时我们断言t是Dog类型，编译器信任此操作，一旦传入Cat类就会报错
    }
    console.log(t.name);
}
// ******************** 用途2：将一个父类断言为更加具体的子类
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HttpError;
}(Error));
function isApiError(err) {
    if (typeof err.status == 'string') {
        return true;
    }
    return false;
}
// ************ 用途3：将任何类型断言为any
// window.foo = 'jkjk' // Property 'foo' does not exist on type 'Window & typeof globalThis'
window.foo = 'dddd';
// ************* 用途4：将any断言为具体类型
function getCacheData(key) {
    var cache = {};
    return cache[key];
}
var tom = getCacheData('tom');
tom.run();
/**
 * 总结:A兼容B，那么A能够被断言为B，而B不能被断言为A
 * 联合类型可以被断言为一个类型
 * 父类可以断言为子类
 * 任何类型都可以被断言为any
 * any可以被断言为任何一种类型
 *
 */
// 双重断言
//  可行但是非常不建议
// 类型断言 不等于 类型转换
// 类型声明优与类型断言 ==> 在使用变量时就指定类型
// 类型断言vs泛型  ==> 去除any 的最佳方式
