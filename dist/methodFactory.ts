/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-07-31 18:07:50
 * @LastEditors  : tky
 * @LastEditTime : 2020-08-13 13:11:54
 */ 

// // 抽象产品接口
// interface Product2 {
//   method1() : void;
//   method2() : void;
// }

// // 具体产品一
// class ConcretePrduct_1 implements Product2 {
//   constructor(){}
//   method1(): void {
//   }
//   method2(): void {
//   }
// }

// // 具体产品二
// class ConcretePrduct_2 implements Product2 {
//   constructor(){}
//   method1(): void {
//   }
//   method2(): void {
//   }
// }

// // 抽象工厂 
// abstract class Creator {
//   public abstract createProduct(type: number) : Product2;
// }

// // 具体工厂 
// class ConcreteCreator extends Creator {
//   constructor(){
//     super();
//   }

//   public createProduct(type: number): Product2 | null {
//     let product = null;
//     if(type === 1) {
//       product = new ConcreteProduct_1()
//     }else if (type === 2) {
//       product = new ConcreteProduct_2()
//     }
//     return product;
//   }
  
// }

// const creator: Creator = new ConcreteCreator();
// const myProduct: Product = creator.createProduct(1)


// 抽象产品接口
interface Product2{
  method1() : void;
  method2() : void;
}

// 具体产品一
class ConcreteProduct_1 implements Product2 {
  constructor(){}
  method1() {

  }
  method2() {

  }
}

// 具体产品二
class ConcreteProduct_2 implements Product2 {
  constructor(){}
  method1() {

  }
  method2() {
      
  }
}

// 抽象工厂
abstract class Creator {
  public abstract createProduct(type : number) : Product2 | null;
}

// 具体工厂
class ConcreteCreator extends Creator {
  constructor(){
      super();
  }

  public createProduct(type : number) : Product2 | null {
      let product = null;
      if (type === 1) {
          product = new ConcreteProduct_1();
      } else if (type === 2) {
          product = new ConcreteProduct_2();
      }
      return product;
  }
}

// 使用
const creator : Creator = new ConcreteCreator();
const myProduct : Product2 | null = creator.createProduct(1);