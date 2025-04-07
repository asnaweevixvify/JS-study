//คือ เหตุการณ์หรือการกระทำบางอย่างที่เกิดขึ้นกับอิลิเมนต์ แต่รูปแบบการเขียนจะเขียนในฝั่ง javascript ทั้งหมด
//โครงสร้าง :
//element.addEventListener(event,callback)
// event เช่น onclick ใน html ใน js จะตัด on ออกเป็น click
// callback คือชื่อฟังก์ชั่น
const Button = document.querySelector('#button');
Button.addEventListener('click',Noti)
function Noti(){
    alert("hello");
}