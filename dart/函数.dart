void main(){
 /*  void go(){
    print("hello world");
  }
  go();
  String test(){
    return "good";
  }
  test(); */

  //默认参数
 /*  void getData([a="hello",b="good",c]){
    print(a+b);
    print(c);
  }
  getData("world"); */

  //箭头函数
 /*  void go()=>print("hello");
  go(); */

  //自调函数
  //不带参数
 /*  ((){
    print("hello world");
  })(); */
  //带参数
  ((n){
    print(n);
  })(10);
}