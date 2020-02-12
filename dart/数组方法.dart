void main() {
  List<String> arr=["html","java","css","react"];
 /*  arr.add("vue");
  arr.insert(1, "element"); */
  /* arr.remove("css"); */
  /* arr.removeAt(1); */
  /* arr.removeLast(); */
  /* arr.removeRange(1, 2); */
  /* arr.removeWhere((item){
    return item=="html";
  });  */
 /*  print(arr.length); */
  /* print(arr.indexOf("html")); */
 /*  print(arr.contains("html")); */
  /* arr.setRange(0, 2, ["web","obj"]);    //修改 */
  arr.replaceRange(1, 2, ["vue","flutter"]);
  print(arr);
}