/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-08-13 09:22:48
 * @LastEditors  : tky
 * @LastEditTime : 2020-08-13 09:42:10
 */
// 抽象工厂接口
interface AbstractFactory {
  createProductA(): AbstractFactoryA
  createProductB(): AbstractFactoryB
}

// 抽象产品A接口
interface AbstractFactoryA { }

// 抽象产品B接口
interface AbstractFactoryB { }

// 具体工厂1
class ConcreteFactory1 implements AbstractFactory {
  constructor() { }
  public createProductA(): AbstractFactoryA {
    return new ConcreteProductA1()
  }
  public createProductB(): AbstractFactoryB {
    return new ConcreteProductB1()
  }
}

// 具体工厂2
class ConcreteFactory2 implements AbstractFactory {
  constructor() { }
  public createProductA(): AbstractFactoryA {
    return new ConcreteProductA2()
  }
  public createProductB(): AbstractFactoryB {
    return new ConcreteProductB2()
  }
}

// 具体产品A1
class ConcreteProductA1 implements AbstractFactoryA { }
// 具体产品A2
class ConcreteProductA2 implements AbstractFactoryA { }
// 具体产品B1
class ConcreteProductB1 implements AbstractFactoryB { }
// 具体产品B2
class ConcreteProductB2 implements AbstractFactoryB { }

// 使用
const factory1: AbstractFactory = new ConcreteFactory1();