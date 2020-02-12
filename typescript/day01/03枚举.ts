 //枚举  enum
enum Status{
    success=200,
    fail=404,
    serverError=404
}
var s:Status=Status.success;
console.log(s)
var statusObj:object={
    success:200,
} 