//function แบบมีการรับค่า
//function ชื่อฟังก์ชั่น (parameter1,paremeter2,...){
//  คำสั่ง  
// }
// การเรียกใช้งาน 
// ชื่อฟังก์ชั่น(argument1,argument2);
// parameter ตัวแปรหรือค่าที่ต้องการส่งเข้ามาให้ฟังก์ชั่น
// argument ตัวแปรหรือต้ค่าที่สร้างไว้สำหรับรับค่าที่ส่งเข้ามาให้ฟังก์ชั่น

function plusnumber(x){
    console.log(x)
}
plusnumber(6);

function FullName(fname , lname){
    console.log(fname,lname);
}
FullName("alex","xander");

function bmiCal(weight,height){
    height=height/100;
    bmi=weight/(height*height);
    console.log(bmi);
}
bmiCal(60,160);