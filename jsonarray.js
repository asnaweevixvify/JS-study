// JSON สามารถสร้าง array หรือ object ได้
//ดึงข้อมูลจากไฟล์ app.json มาแสดงผล

const list = document.getElementById('list')

let output = ''

fetch("app.json")
.then(res=>res.json())
.then(json=>{
    json.user.forEach(item => {
        output+="<li>"+item.name+"</li>"
    });
    list.innerHTML=output
}).catch(error=>{
    console.log(error);
})


