void main(){
  var obj={"name":"xiang","age":"20"};
  /* print(obj.keys.toList());
  print(obj.values.toList()); */
  /* obj.remove("name");
  print(obj);      //{age: 20} */
  /* obj.addAll({"sex":"女"});
  print(obj); */
  /* obj.forEach((key,value){
    print(key);
  }); */
  var m=obj.map((key,value){
      return new MapEntry(key,value+"s");
  });
  print(m);
}