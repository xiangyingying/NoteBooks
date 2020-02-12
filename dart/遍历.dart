void main(){
  List<String> arr=["html","java","css","react"];
 /*  arr.forEach((item){
      print(item);
  }); */
 /*  var b=arr.every((item){
    return item=="html";
  }); */
  /* var b=arr.any((item){
    return item=="html";
  }); */
  var b=arr.map((item){
    return item+"s";
  });
  print(b.toList());
}