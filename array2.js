// .toString() แปลงเป็น string
// .join("") นำแต่ละค่าในตัวแปร array มารวมเป็นข้อความ
// ชื่อarray.pop(); เอาตัวสุดท้ายออก
// let x= ชื่อarray.pop(); เอาตัวแรกออกเก็บใน x
// let x = ชื่อarray1.concat(ชื่อarray2,ชื่อarray3)
// .sort(function(a,b)){
//    return a-b  //เรียงน้อยไปมาก
//    return b-a  // เรียงมากไปน้อย
//}

color = ["red","green","blue","orange","gray"];
console.log(color.toString());

console.log(color.join(" "));

let a = (color.pop());
console.log(color);
console.log(a);
number= ["1","2","3","4"]

let all = color.concat(number);
console.log(all);

numberAll=[5,10,-5,-6,1]

numberAll.sort(function(a,b){
    return a-b;
})
console.log(numberAll);

numberAll.sort(function(a,b){
    return b-a;
})
console.log(numberAll);