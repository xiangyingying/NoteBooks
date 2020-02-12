### 一 开发环境配置

全局安装typescript

```
npm i typescript -g
npm i ts-node -g
tsc --version  //查看版本号
```

vs-code安装插件

```
Code Runner
```

### 二 ts语言的特点

```
//强类型的语言，声明变量要指明其类型
var str:string="hello world";
console.log(str)
```

```
tsc app.ts命令将ts编译成js
```

### 三 数据类型

#### 3-1.基础类型

```ts
//number,sting,boolean
var num:number=24;
var b:boolean=true;
var str:string="hello world";
```

#### 3-2 引用类型

1.Array

```ts
var arr:string[]=['html','css','javascript']
var all:number[]=[1,2,3]
var list:Array<number>=[12,34,3]   //了解
```

2.遍历

```ts
var arr:string[]=['html','css','javascript']
arr.forEach(item=>{
    console.log(item)
})
```

3.元组

```
//元组，给数组中的每个元素指明一个类型
var list:[number,string]=[12,"html"]
```

4.对象

```ts
//obj
var obj:Object={
    name:"xiang",
    age:23
}
console.log(obj["name"])   //不能用点读，只能用[]
//数组对象 声明一个数组，里面是对象
var arr:Object[]=[{name:"yingying",age:22},{name:"wagnsi",age:23}]
```

#### 3-3 枚举类型

```ts
enum Status{
    success=200,
    fail=404,
    serverError=404
}
var s:Status=Status.success;
//用对象枚举
var statusObj:object={
    success:200,
}
```

#### 3-4 any

指明数据类型未any 后就不会类型检查了，数据可以改变成任意类型

```ts
var data:any=[1,2,3]
data="hello world";
data=1442;
console.log(data)
```

#### 3-5 void  没有返回值

```ts
function go():void{
    console.log("hello world")
}
go()
function test():number{
    console.log("a")
    return 10
}
```

#### 3-6 undefined、null  也是一种类型

```ts
var a:undefined;
a=10; //报错，因为变量已经声明为undefined类型

var a:undefined|number;
a=10;

var n:null|string;
n="hello world"
```

### 四 函数

#### 4-1带参数的函数

```ts
var fn=function(name:string,age:number):number{
    console.log(name,age)
    return 10
}
fn("xiang",23)   //不传参会报错
```

#### 4-2函数的默认参数

```ts
var fn=function(name:string,age:number=20):number{
    console.log(name,age)
    return 10
}
fn("xiang")   //默认参数后可以不传参
```

#### 4-3函数的可选参数

tips:可选参数要写在最后面   设置可选参数之后，调用函数的时候，这个参数是可传可不传的

```ts
var fn=function(name:string,age?:number):number{
    console.log(name,age)
    return 10
}
fn("xiang")   //输出：xiang undefined
```

### 五 类

```
//private 私有的 作用范围只在这个类中
//public  公有的 其他类型也可以访问
//不写变量修饰符 默认就是共有的
class Person{
    //定义类的一个属性
    name:String;
    age:Number;
    constructor(){
        console.log(this.name)      //undefined
    }
    getName(){
        console.log(this.name)		//xuang
    }
}
//new的时候调用的是构造函数
var p:Person=new Person();
p.name="xuang";
p.getName()         
//输出：undefined xuang
```

#### 5-1 导入导出

导出

```ts
class Person{
    name:String;
    age:Number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
export default Person;
```

导入

```
import Person from './08类'
var p:Person=new Person("xiang",20);
console.log(p)
```

#### 5-2 继承

```
class Person{
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
export default Person;
```

```
import Person from './08类'
//子类继承父类，子类的构造函数中第一行一定要加super()
//子类中调用父类的方法，this,super都可以调用
class Student extends Person{
    skill:string;
    constructor(name:string,age:number,skill:string){
        super(name,age);    
        this.skill=skill;
        super.getAge()   //或者this.getAge()
    }
}
var s:Student=new Student("xiang",12,"lsfs");
s.getName()
```

### 六 接口

```
//接口 在面向对象中编程中，接口中规范，定义了行为的规范，在程序设计中，接口起到限制和规范
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
```

