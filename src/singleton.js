"use strict";
/*
 * @Descripttion :
 * @version      :
 * @Author       : tky
 * @Date         : 2020-07-31 11:57:53
 * @LastEditors  : tky
 * @LastEditTime : 2020-07-31 12:22:57
 */
// 饿汉式
var Singleton1 = /** @class */ (function () {
    // 将构造器私有化，外部不能通过new创建实例
    function Singleton1() {
    }
    // 提供一个公有的静态方法，返回实例对象
    Singleton1.getInstance = function () {
        return this.instance;
    };
    // 本类内部创建对象实例化
    Singleton1.instance = new Singleton1();
    return Singleton1;
}());
console.log(Singleton1.getInstance(), "1111");
// 懒汉式 
var Singleton2 = /** @class */ (function () {
    // 私有化构造器
    function Singleton2() {
    }
    // 判断是否为null,不为null就直接返回对象
    Singleton2.getInstance = function () {
        if (this.instance === null) {
            this.instance = new Singleton2;
        }
        return this.instance;
    };
    // 先声明对象
    Singleton2.instance = null;
    return Singleton2;
}());
console.log(Singleton2.getInstance(), "2222");
/**
 * 单例，一个类仅有一个实例
 * 优点(advangtage)：节约开销，优化和共享资源
 * 缺点(disadvangtage): 不易于扩展，对测试不利，于单一职责原则冲突
 *
 * 应用场景： 需要频繁进行创建和销毁的对象，创建对象耗时或耗资源过多但又经常用到
*/ 
