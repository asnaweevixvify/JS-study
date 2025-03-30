//function แบบมีการรับค่า
//function ชื่อฟังก์ชั่น (parameter1,paremeter2,...){
//  คำสั่ง
//  return ต่าที่จะส่งออก
// }
// วิธีใส่ค่าเริ่มต้น ใส่ ="" ต่อท้าย parameter

function bmiCal(weight,height){
    height=height/100;
    return weight/(height*height);
}
let answerBmi = bmiCal(60,160);

function showbmi(){
    document.write("ค่า BMI ของคุณคือ" , answerBmi);
}
