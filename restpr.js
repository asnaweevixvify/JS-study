//Rest Parameter
//ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวนโดยใช้เครื่องหมาย ...
summation=(...numArr)=>{
    let total =0;
    for(let number of numArr){
    total+=number
    }
    return total
}
console.log(summation(500,1000));