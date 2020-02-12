void main(){
  List<String> arr=["html","java","css","react"];
  var b=arr.every((item){
    return item=="html";
  });
  print(b);
}