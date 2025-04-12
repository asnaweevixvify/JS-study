// การสร้าง promise
// promise(function(resolve,reject){

//})
//pending คือสถาระเริ่มต้นของ promise
// ทำงานสำเร็จจะเป็น resolve
//ล้มเหลวจะเป็น reject
//then() ใช้กับ resolve
//catch() ใช้กับ reject
//finally() ใช้กับสถานะไหนก็ได้

const connect = true;
const url1 = "vixvify.json"
const url2 = "vixvify.json"
const url3 = "vixvify.json"
const url4 = "vixvify.json"
const url5 = "vixvify.json"



function dowloading(url){
    console.log("กำลังโหลด");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(connect){
                resolve(`โหลด ${url} เรียบร้อย`);
            }else{
                reject("เกิดข้อผิดพลาด")
            }
        },1000)
    })
}
dowloading(url1)
  .then(result => {
    console.log(result);
    return dowloading(url2);
  })
  .then(result => {
    console.log(result);
    return dowloading(url3);
  })
  .then(result => {
    console.log(result);
    return dowloading(url4);
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("จบการทำงาน");
  });
