// 类实现接口
// 实现（implements）是面向对象中的一个重要概念。
interface Person {
  alert(): void;
}
interface Say {
  saying(): number;
}
class Dog {
}
// 先继承类并实现接口
class Miki extends Dog implements Person {
  alert(): void {
    console.log('alert')
  }
}

class Laki implements Person {
  alert(): void {
    console.log('laki')
  }
}

// 类实现多个接口
class Kuki implements Person, Say {
  saying(): number {
    return 111
  }
  alert(): void {
    console.log(4545)
  }
}

// 接口继承 ==> 与类继承相似
interface Face {
  pretty: string
}
interface Noise extends Face {
  name: string
}

// 接口继承类

// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的
// 当我们声明一个类时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）。
// 类时创建的类型只包含其中的实例属性和实例方法

class Point {
  // 原点
  static origin = new Point(0, 0);
  /** 静态方法，计算与原点距离 */
  static distanceToOrigin(p: Point) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
  }
  /** 实例属性，x 轴的值 */
  x: number;
  /** 实例属性，y 轴的值 */
  y: number;
  /** 构造函数 */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  /** 实例方法，打印此点 */
  printPoint() {
    console.log(this.x, this.y);
  }
}

interface PointFace {
  x: number;
  y: number;
  printPoint(): void;
}

// p1&p2类型是一样的
function fn(p1: Point,p2: PointFace): void{

}
export { }