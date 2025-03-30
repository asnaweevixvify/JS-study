
//การแปลงชนิดข้อมูลstr to num (parseInt/parseFloat)
let a = parseInt("500");  //หรือ parseFloat
console.log(a);
console.log(a+50);

//แปลงชนิดข้อมูลจากnum to str (+"")
let b = 50+"";
console.log(b);
console.log(b+"50");

//การสร้าง array 1
//let ชื่อarray = Array(สมาชิกคั่นด้วยคอมมา);
//indexเริ่มตัวแรกที่เลข0
let myarray = Array(100,200,300,400,500);
console.log(myarray);
console.log("ตัวแรก =",myarray[0]);
console.log("ตัวที่สอง =",myarray[1]);
//การสร้าง array 2
let myarray2 = ["red","yellow","blue"]
console.log("ตัวที่สอง =",myarray2[1]);

//เพิ่มค่าลดค่า a++(เพิ่มค่าaก่อนค่อยใช้) ++a (ใช้ค่าaก่อนค่อยเพิ่ม)
let f = 5;
let g = 10;
console.log(++f);
console.log(f);

console.log(g);
console.log(g++);
console.log(g);

//compound
let h = 10;
let r = 20;
h+=r;
console.log(h);

//if
let score = 60;

if(score < 50 && score < 100){
    console.log("failed");
}else if(score>50 && score<100){
    console.log("passed");
}else{
    console.log("error");
}

//if แบบลดรูป
// ตัวแปร=เงื่อนไข ? คำสั่งเมื่อเงื่อนไขเป็นจริง : คำสั่งเมื่อเงื่อนไขเป็นจริง;

// switch case
// switch กำหนดว่าจะสร้างตัวแปรอะไรมาคุม
// case จะเลือกเคสใด 
//default ค่าที่ส่งเข้ามาไม่ตรงกับเคสไหนเลย
let month = 2;
switch(month){
    case 1 : console.log("january");
        break;
    case 2 : console.log("febuary");
        break;
    default : console.log("not found");
}

