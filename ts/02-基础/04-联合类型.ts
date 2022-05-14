/**
 * 联合类型表示多个值取一个
 */

let union1: string | number; // ==> 可以是字符串或者数字
union1 = 'dom'
union1 = 55555

// 只能访问此联合类型的所有类型里共有的属性或方法
function getLength(w: string | number): number{

  // return w.length
  // Property 'length' does not exist on type 'string | number'.
  //  Property 'length' does not exist on type 'number'.

  return w.toString().length
}

console.log(getLength('tttttt'))
console.log(getLength(888))