// .length ต่อท้ายชื่อ array คือการหาจำนวนสมาชิก
// .sort() ต่อท้ายชื่อ array คือการเรียงลำดับ
// reverse คือเรียงกลับหลัง
// ชื่อ array[0]; คือการหาสามชิกตัวแรก
// ชื่อ array[ชื่อ array.length-1]; หาสามชิกตัวสุดท้าย
// ชื่อ array.push("สมาชิกที่จะใส่เพิ่ม") เป็นการเพิ่มสมาชิก

let color =  ["red","green","blue","yellow"];
let number = [1,2,3,4];
let a  = color.length;
console.log(a);

let b = color.sort();
console.log(b);

let c = number.sort();
console.log(c);

//let d = number.reverse();
//console.log(c); output = 4,3,2,1

console.log(number[0]);
console.log(color[color.length-1]);

color.push("gray");
console.log(color)

