class  Person {
  String name="xiang";
  int age=23;
  /* sayName(){
    print(this.name);
  } */
  //构造函数就是构造一个对象的函数
  /* Person(String name,int age){
    this.name=name;
    this.age=age;
  } */

  //构造函数的简写
  Person(this.name,this.age);
}
class  Student extends Person {
  String skill;
  Student(String name, int age,this.skill) : super(name, age);
}