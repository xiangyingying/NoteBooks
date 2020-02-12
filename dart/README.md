

### 一 入口方法（和java类似）

dart要写在主函数里面,语句后面一定要加 分号

dart是强类型语言

```
main(){
  print("hello world");
}
```

### 二 Dart的数据类型

```
Number int double
String
Boolean
List
Map
```

#### 变量

##### 2-1 不指明类型

```
void main(){
  var b=20;
  print(b)    //20
}
```

##### 2-2 指明类型

```
void main(){
  int a=10;           //10
  double c = 242.22;     //242.22
  bool b=true;          //true
}
```

#### 常量

创建之后不能更改

```
void main(){
  const int c=20;
  print(c); //20
}
```

或者

```
void main(){
  final int a = 20;
  print(a);         //20
}
```

#### 模板字符串

```
void main(){
  var s="hello";
  var t="$s world";
  print(t);            //hello world
}
```

### 三 Map,List

```
void main(){
  Map obj={"name":"xiangyingying","age":"21"};
  List arr=[1,3,4];
  print(obj["name"]);        //xiangyingying
}
```

#### 增加 add() insert()

向后添加

```
void main() {
  List<String> arr=["html","java","css"];
  arr.add("vue");
  print(arr);       //[html, java, css, vue]
}
```

定点增加

```
void main() {
  List<String> arr=["html","java","css"];
  arr.insert(1, "element");
  print(arr);      //["html","element","java","css"]
}
```

#### 获取List长度

```
 print(arr.length);
```

#### 移除 remove()

```dart
void main() {
  List<String> arr=["html","java","css"];
  arr.remove("css");
  arr.removeAt(1);    //删除对应下表的元素
  arr.removeLast();   //删除最后一个元素
  arr.removeRange(start, end);      //范围删除，不包括end这一位
  arr.removeWhere((item){          //根据条件删除    [java, css]
    return item=="html";
  });
  print(arr);        //[html,java]
}
```

#### 查询 indexOf();  indexOf();

```
- indexOf() //读取元素的下标值
- contains() //判断是否包含某个元素
```

#### 修改

```
void main() {
  List<String> arr=["html","java","css","react"];
  arr.setRange(0, 2, ["web","obj"]);
  print(arr);             //[web, obj, css, react]   从下标开始，修改多少个
}
```

```
arr.replaceRange(1, 2, ["vue","flutter","koa"]);  范围替换，可以不穿固定位数
//[html, vue, flutter, koa, css, react]
```

#### 遍历

foreach

```
void main(){
  List<String> arr=["html","java","css","react"];
  arr.forEach((item){
      print(item);       //html java css react
  });
}     
```

every

```
void main(){
  List<String> arr=["html","java","css","react"];
  var b=arr.every((item){
    return item=="html";
  });
  print(b);       //false
}
```

any

```
void main(){
  List<String> arr=["html","java","css","react"];
  var b=arr.any((item){
    return item=="html";
  });
  print(b);      //true 有一个满足返回ture，相当于some(0)
}
```

map  改变数组结构，结构变为Iterable

```
void main(){
  List<String> arr=["html","java","css","react"];
  var b=arr.map((item){
    return item+"s";
  });
  print(b);          //(htmls, javas, csss, reacts)
  print(b.toList());   //toList() 将结构变为list    [htmls, javas, csss, reacts]
}
```

#### Iterable

```
void main(){
  Iterable<String> arr=["html","css"];
  print(arr is Iterable);             //true  
} 
```

#### join

```
void main(){
  Iterable<int> arr=[1,2,3];
  print(arr.join(""));         //123
}
```

### 四 Set  集合    (es6新增)

元素都是唯一的，是无序的

```dart
void main(){
  var arr={"html","css","java","css"};
  print(arr is Set);      //true
  print(arr);           //{html, css, java}
}
```

#### 方法

```dart
void main(){
  var arr={"html","css","java"};
  arr.add("react");
  print(arr);       //{html, css, java, react}  结果顺序一样，但是能通过下标读取，依然是无序的
}
```

将集合变为list

```
void main(){
  var arr={"html","css","java"};
  arr.add("react");
  print(arr);                       //{html, css, java, react}
  var list=List.from(arr);        //[html, css, java, react]
  print(list);
}
```

list转换为Set Set转换为list

```
void main(){
  var list=[1,2,3,3];
  var s=new Set();
  s.addAll(list);      //添加一个属性
  或
  print(s.toList())
}
```

Array.from  可以将一个类数组对象，或迭代对象创建为一个新的数组

```
//js中
var s=new Set([1,2,3,3])
var arr=Array.from(s)
console.log(arr)       //[ 1, 2, 3, 4, 5 ]
```

### 五 Map  相当于对象

```
void main(){
  Map obj={"name":"xiang","age":20};
  print(obj.keys);    //(name, age)
  print(obj.values);     // print(obj.values);
  //变为list
  print(obj.keys.toList());
  print(obj.values.toList());
}
```

移除对象某个属性  remove()

```
void main(){
  var obj={"name":"xiang","age":20};
  obj.remove("name");
  print(obj);        //{age: 20}
}
```

js中

```
const Employee = {
  firstname: 'John',
  lastname: 'Doe'
}

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;                

console.log(Employee.firstname);
// expected output: undefined                                  
```

新添加一个属性

addAll()

```
void main(){
  var obj={"name":"xiang","age":20};
  obj.addAll({"sex":"女"});
  print(obj);
}
```

遍历

forEach()

```css
void main(){
  var obj={"name":"xiang","age":20};
  obj.forEach((key,value){
    print(key);         //name,age
  });
}
```

map   必须返回 MapEntry()

```java
void main(){
  var obj={"name":"xiang","age":"20"};
  var m=obj.map((key,value){
      return new MapEntry(key,value+"s");
  });
  print(m);           //{name: xiangs, age: 20s}
}
```

### 六 函数

```dart
//无返回值
void main(){
  void go(){
    print("hello world");
  }
  go();
}
```

```dart
//有返回值
void main(){
  String test(){
    return "good";
  }
  test();
}
```

#### 泛型函数

```

```

#### 默认参数

以List的形式传递的

```dart
void main(){
  //默认参数
  void getData([a="hello",b="good",c]){
    print(a+b);
    print(c);
  }
  getData("world");        //worldgood        null
}
```

#### 箭头函数

```
void main(){
  //箭头函数
  void go()=>print("hello");
  go();      //hello
}
```

#### 自调函数

```dart
//不带参数
void main(){
  //自调函数
  ((){
    print("hello world");
  })();        //hello world
}
```

```
//带参数的自调
void main(){
  //自调函数
  ((n){
    print(n);
  })(16);        //16
}
```

### 七 面向对象

```
 void main(){
   var p=new Person();
   p.getData();
 }
 class Person {
    String sex="女";
    getData(){
      print(sex);        //女
    }
  }
```

```
//ts
class Person{
    sex:string="男";
    getData(){
        console.log(this.sex)
    }
}
var p=new Person();
p.getData();
```

导入导出

```
//导出
class  Person {
  String name="xiang";
  int age=23;
  sayName(){
    print(this.name);
  }
}
//导入
import 'Person.dart';
void main(){
  Person p=new Person();
  p.sayName();
}
```

构造函数

定义一个类

```
class  Person {
  String name="xiang";
  int age=23;
  //构造函数就是构造一个对象的函数
  Person(String name,int age){
    this.name=name;
    this.age=age;
  }
}
```

```
import '导出.dart';
void main(){
  //实例化对象的时候，构造函数会自动触发
  Person p=new Person("xiang",20);
  print(p.name);     //xiang
}
```

构造函数的简写

```
class  Person {
  String name="xiang";
  int age=23;
  Person(this.name,this.age);
}
```

继承

```
class Person {
  String name;
  int age;
  // 构造函数就是构造一个对象的函数
  Person(this.name,this.age);
}
class  Student extends Person {
  String skill;
  Student(String name, int age,this.skill) : super(name, age);
}
```

```
import 'Person.dart';
void main(){
  // 实例化对象时,构造函数会自动触发
  Student s = new Student("cheng",20,"lol-code");
  print(s.skill);
}
```









