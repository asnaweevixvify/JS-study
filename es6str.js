//MultiLine String สามารถทำงานกับข้อความยาวๆ ได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ `
//Interpolation สามารถแทนค่าตัวแปรลงในพื้นที่ String ได้โดยใช้ ${ชื่อตัวแปร} ร่วมกับ `
const birthDay = 27
const info = `name : asnawee 
age : 17 
gender : male'
birthday : ${birthDay}
`
console.log(info);

    