// 仅仅学习ts中的类

//1. 新增访问修饰符
    // public:修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是public的
    // private:修饰的属性或方法是私有的，不能在声明它的类的外部访问
        // TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性。
    // protected:修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类(继承)中也是允许被访问的
   

class Animal {
  private name: string = 'dom';
  protected o: string = 'dsds'
  public constructor(){
    console.log(this.name)
  }
}

class Dog extends Animal{
  readonly rd
  constructor(rd){
    super()
    console.log(this.o)
    // console.log(this.name) // 报错
    this.rd = rd
  }
}

// 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。


let animal = new Animal()
// console.log(animal.name) //Property 'name' is private and only accessible within class 'Animal'
let dog = new Dog(123)



// 抽象类
// 1. 抽象类不允许实例化
// 2. 抽象类中的抽象方法必须在其继承的子类被实现，未实现将编译报错

abstract class Person {
  protected name;
  constructor(){
    console.log('‘被实现')
  }
  public abstract say(name: number): void
}

class Lin extends Person {
  constructor(){
    super()
  }
  public say(): void {
    console.log('dsd')
  }
}
let lin = new Lin()
lin.say()





export {}