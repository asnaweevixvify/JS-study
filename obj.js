// let ชื่อวัตถุ = {propertyName:value}
// property = ชื่อ
// value = ข้อมูล
// การเข้าถึงข้อมูล objname.propertyname

let product = {name:"mango",color:"yellow",price:"50"}
console.log(product.price);
console.log(product.name);

let user={name:"javaScript",age:17,email:"asnaweeezor@gmail.com",
    getUser:function(){
    return this.name+" "+this.email
    }
    ,getAge:function(){
        return this.age
    }
}
let myData = user.getUser();
console.log(myData);
let myAge=user.getAge();
console.log(myAge);