declare let $1: (n1: number) => any
// 函数重载
declare function $2(selector: string): any
declare function $2(domReadyCallback: ()=>any ): any
// 类
declare class Animal{
  name: string
  callName: (name: string)=>string
}
// 枚举
declare enum enumlist {
  Up,
  Down,
  Left,
  Right
}

// 命名空间 ts会用namespace替代module
declare namespace space{
  function ajax (url: string, setting?: AjaxSettings): void;
  namespace insideSpace{
    function fn(): void;
  }
  interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
  }
}
// space.ajax(), space.insideSpace.fn()调用
// space.AjaxSettings