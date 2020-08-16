/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-08-13 10:34:37
 * @LastEditors  : tky
 * @LastEditTime : 2020-08-13 13:22:37
 */
abstract class Builder {
  public abstract buildPartA(): void;
  public abstract buildPartB(): void;
  public abstract buildPartC(): void;
  public abstract buildProduct(): Product1;
}

class ConcreteBuilder extends Builder {
  private product: Product1;
  constructor(product: Product1) {
    super();
    this.product = product
  }

  public buildPartA(): void { }
  public buildPartB(): void { }
  public buildPartC(): void { }
  
  public buildProduct(): Product1 {
    return this.product;
  }
}

// 产品角色
class Product1 {
  public doSomething(): void {

  }
}

// 指挥者
class Director {
  private _builder: Builder;
  constructor(builder: Builder){
    this._builder = builder
  }
  set builder(builder: Builder){
    this._builder = builder
  }

  // 将处理建造的流程交给指挥者
  public constructorProduct2(){
    this._builder.buildPartA();
    this._builder.buildPartB();
    this._builder.buildPartC();
    return this._builder.buildProduct();
  }

}

// 使用
const builder: Builder = new ConcreteBuilder(new Product1());
const director: Director = new Director(builder)
const product1: Product1 = director.constructorProduct2()