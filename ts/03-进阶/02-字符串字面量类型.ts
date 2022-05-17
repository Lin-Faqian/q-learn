// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。

type event = 'click' | 'move' | 'touch'

function handle(e: event, el: Element): any[] {
  return [e, el]
}
console.log(handle('click', document.getElementById('#id')))

// console.log(handle('scroll', document.getElementById('#id'))) 
// => Argument of type '"scroll"' is not assignable to parameter of type 'event'.

export {}