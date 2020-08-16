/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-08-13 09:45:23
 * @LastEditors  : tky
 * @LastEditTime : 2020-08-13 13:00:51
 */
interface Prototype {
  clone(): Prototype;
}

class Dog implements Prototype {
  public name: string;
  public birthYear: number;
  public sex: string;
  public presentYear: number;
  constructor() {
    this.name = 'lili';
    this.birthYear = 2192;
    this.sex = '男';
    this.presentYear = 2018
  }

  public getDiscription(): string {
    return `名字：${this.name},sex: ${this.sex},birthYear: ${this.birthYear},..`
  }
  // 实现复制
  clone(): Prototype {
    return Object.create(this);
  }
}

// 使用
const dog = new Dog();
console.log(dog.getDiscription())
dog.presentYear = 2020;

const dog1 = Object.create(dog);
console.log(dog1.getDiscription());