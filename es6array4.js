//push() นำเอาสมาชิกเพิ่มไปใน array ต่อท้าย 
//pop() เอาตัวสุดท้ายออก
//shift() เอาตัวแรกออก
//unshift() เพิ่มสมาชิกใน array ไปต่อตัวแรก
const data = [10,20,30]
data.push(40,50)
data.push(...[70,80])
console.log(data);

let x = data.pop();
console.log(data);
console.log(x);

let y = data.shift();
console.log(y);
console.log(data);

data.unshift(5)
console.log(data);
