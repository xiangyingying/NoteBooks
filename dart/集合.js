/* var s=new Set([1,2,3,3])
var arr=Array.from(s)
console.log(arr) */
var arr=[1,2,3,4];
var test=Array.from(arr);
arr.push(5);
 //Array.from() 可以进行一个深拷贝        
console.log(arr)      //[ 1, 2, 3, 4, 5 ]