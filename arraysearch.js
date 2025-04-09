// ค้นหาข้อมูลใน array
// indexOf(ข้อมูล) ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจจะได้ -1
// find(ช้อมูล)=> ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าไม่เจอจะได้ undefined
// findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
const data = [10,20,30,40,50,60]
console.log(data.indexOf(40));
console.log(data.indexOf(70));

let search = data.find(element=>element===30)
console.log(search);

let result = data.findIndex(element=>element===50)
console.log(result);