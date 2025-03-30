//document.createElement(element) // สร้าง element ใหม่
//.removeChild(element) // ลบ node ลูก
//.appendChild(element) // นำ element ไปต่อใน node แม่
//.replaceChild(new, old) แทนที่ element

const menu = document.querySelector('#menu1');
let count=1;
function addItem(){
    const item = document.createElement('li')
    item.innerText=("hello")+count;
    count++
    menu.appendChild(item);
}





