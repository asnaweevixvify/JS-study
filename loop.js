//while loop ทำตามคำสั่งไปเรื่อยๆจนกว่าเงื่อนไขจะเป็นจริง

let i = 1;
while(i<11){
    document.write(i);
    i+=1;
}

//for loop ทำตามคำสั่งแบบมีจำกักไว้ชัดเจน
// for(ค่าเริ่มต้น;เงื่อนไข;เปลี่ยนแปลงค่า){
// คำสั่ง
//}

for(f=11;f<21;f++){
    document.write(f);
}

let a = 8;
let b = 20;
b+=1;
for(c=a;c!=b;c++){
    document.write(c);
}

//do while
//do{
//  คำสั่งเมื่อเงื่อนไขเป็นจริง
//}
//while(เงื่อนไข)

let r = 0;

do{
    document.write("hello")
    r+=1
}while(r<10);

//null คือตัวแปรที่ไม่มีค่าใดๆเลย ไม่เท่ากับ0 คำนวณไม่ได้ มีค่าเป็น false
//undefined ประกาศตัวแปรไว้แต่ไม่ได้ประกาศค่า
//NaN การนำตัวแปรที่ไม่ใช่ตัวเลขไปคำนวณทางคณิตศาสตร์



