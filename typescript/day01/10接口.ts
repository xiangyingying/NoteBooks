//接口 在面向对象中编程中，接口一中规范，定义了行为的规范，在程序设计中，接口起到限制和规范
interface Animal{
    name:String;
    eat():any;
    run():any;
}
//实现一个接口必须对里面的方法进行重写,在接口中定义一个属性，在使用的类中也必须定义这个属性
class Dog implements Animal{
    name:String;
    eat():void{
        console.log("吃骨头")
    }
    run():void{
        console.log("狗跑")
    }
}