//ลดข้อมูลสมาชิกใน array เพื่อให้ได้ค่าๆเดียวส่งออกไป
const num = [10,20,30,40,50,60]
// array.reduce((ค่าที่ถูกประมวลผล,element)=>{,ค่าเริ่มต้น})
const result = num.reduce((value,element)=>{
    //value=0 และจะถูกสะสมไปเรื่อยๆ
    const total = element+value
    return total
},0)
console.log(result);
//ค่า value ที่อยู่ใน .reduce() ก็คือค่าที่ return มาจากรอบก่อนหน้า

const cart = [
    {name : "Bag" , price: 500},
    {name : "shoes" , price: 200},
    {name : "pant" , price: 150},
    {name : "shirt" , price: 400},
    {name : "tshirt" , price: 600},
    {name : "hat" , price: 100}
]
const pay = cart.reduce((value,element)=>{
    const allPrice = value + element.price
    return allPrice
},0)
console.log(pay);