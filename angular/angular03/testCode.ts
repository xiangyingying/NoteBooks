/* //泛型：任意类型,解决类，接口，方法的复用性，以及对不特定数据类型的支持  既有类型检查，又能传任意类型
   普通指明类型由局限性，只能传入指定类型  any可以传任意类型，但是放弃了类型检查
class Person<T>{
    emit(msg:T){
        console.log(msg)
    }
}
var p=new Person<number>();
p.emit(1) */
/* 
function getData<T>(value:T){
    console.log(value)
}
getData<string>("hello")
getData<number>(113)
 */
/* class Person<T>{
    print(msg:T){
        console.log(msg)
    }
}
class Student{
    name:String;
    age:Number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
}
var s=new Student("xiang",20);
var p=new Person<string>();
p.print("hwll")
var xiang=new Person<Student>();
xiang.print(s) */
