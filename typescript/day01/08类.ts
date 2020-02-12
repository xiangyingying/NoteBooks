//private 私有的 作用范围只在这个类中
//public  公有的 其他类型也可以访问
//不写变量修饰符 默认就是共有的
class Person{
    //类的一个属性
    name:String;
    age:Number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName():void{
        console.log(this.name)
    }
    getAge():void{
        console.log("hello world")
    }
}
/* //new的时候调用是构造函数
var p:Person=new Person("xiang",20);
console.log(p) */
export default Person;