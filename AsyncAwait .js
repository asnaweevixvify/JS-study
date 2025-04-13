//Async
//Await

const connect = true;
const url1 = "vixvify.json1"
const url2 = "vixvify.json2"
const url3 = "vixvify.json3"
const url4 = "vixvify.json4"
const url5 = "vixvify.json5"



function dowloading(url){
    console.log(`กำลังโหลดไฟล์ ${url}`);
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
async function start(){
    console.log(await dowloading(url1))
    console.log(await dowloading(url2))
    console.log(await dowloading(url3))
    console.log(await dowloading(url4))
    console.log(await dowloading(url5))

}

start();