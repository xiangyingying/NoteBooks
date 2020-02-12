void main(){
  var arr={"html","css","java"};
 /*  print(arr is Set);
  print(arr); */
 /*  arr.add("react");
  print(arr);
  var list=List.from(arr);
  print(list); */
  var list=[1,2,3,3];
  var s=new Set();
  s.addAll(list);
  print(s is Set);
  print(List.from(s));
}