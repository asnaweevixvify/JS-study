
// callback คือฟังก์ชั่นที่ถูกเรียกเมื่อฟังก์ชั่นก่อนหน้าทำเสร็จ

function cal (x,y,callback){ //เติม callback ตรงท้าย เป็นการรับฟังก์ชั่นที่ต้องทำต่อ
    console.log("กำลังคำนวณ....");
    setTimeout(()=>{
        const sum = x+y
        callback(sum); //เมื่อฟังก์ชั่น callback (display) จะทำงานหลังจบ cal จะรับค่า sum มาทำงาน
    },3000)
}

cal(5,10,(result)=>{
    console.log(result);
})




//โปรแกรมดาวน์โหลดไฟล์
const url1 = "vixvify.json"
const url2 = "anwa.json"
const url3 = "hanysia.json"


function dowloading(url,callback){
    console.log(`กำลังดาวน์โหลด ${url}`);
    setTimeout(()=>{
    callback(url)
},2000)}

dowloading(url1,(result)=>{
    console.log(`ดาวน์โหลด ${result} เรียบร้อย`);
    dowloading(url2,(result)=>{
        console.log(`ดาวน์โหลด ${result} เรียบร้อย`);
        dowloading(url3,(result)=>{
            console.log(`ดาวน์โหลด ${result} เรียบร้อย`);
        })
    })
})
 