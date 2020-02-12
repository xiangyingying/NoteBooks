import Person from './08类'
/* var p:Person=new Person("xiang",20);
console.log(p) */
//继承 子类继承父类，子类的构造函数中第一行一定要加super()
//子类中调用父类的方法，this,super都可以调用
class Student extends Person{
    skill:string;
    constructor(name:string,age:number,skill:string){
        super(name,age);    
        this.skill=skill;
        super.getAge()
    }
}
var s:Student=new Student("xiang",12,"lsfs");
s.getName()