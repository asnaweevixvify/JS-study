//สามารถดึงค่าจากตัวแปรมากำหนดค่าให้ object ได้

const username = "asnawee";
const age = 17;
const gender = "male";

let info = {
    customerName : username,
    customerAge : age,
    customerGender :  gender
}
let info2 = {
    username,
    age,
    gender,
    infoAll(){
        console.log("ชื่อลูกค้า :"+username+"อายุ :"+age+"เพศ :"+gender);
    }
}
console.log(info);
console.log(info2);
info2.infoAll();
//แบบไหนก็ได้
