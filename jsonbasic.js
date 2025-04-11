let data = `{
    "name" : "asnawee",
    "age" : 17
}`
console.log(data); //string
//JSON.parse = แปลง json string เป็น js object
let myObj = JSON.parse(data) //object
console.log(myObj);

let obj = {
    "name" : "asnawee",
    "age" : 17
}
console.log(obj); //object
//JSON.stringify แปลง js object เป็ฯ json string
let myJ = JSON.stringify(obj);
console.log(myJ);
console.log(typeof myJ);
