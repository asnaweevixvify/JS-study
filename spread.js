//Spread Operator
//ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติม เครื่องหมาย ... ด้านหน้าตัวแปร Array

const numBer = [100,200,300]
const data = [10,20,...numBer]
const age = [17,20]
data.push(...age);
console.log(data);

