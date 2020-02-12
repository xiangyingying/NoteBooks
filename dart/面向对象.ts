class Person{
    sex:string="男";
    getData(){
        console.log(this.sex)
    }
}
var p=new Person();
p.getData();