//document.getElementById('ชื่อไอดี');   ****element ไม่มี s
//document.getElementsByTagName('ชื่อแท็ก');
//document.getElementsByClassName('ชื่อคลาส');
//document.querySelector('') //  ชื่อ class นำหน้าด้วย . ชื่อ id นำหน้าด้วย # ชื่อ tag ไม่ต้องใส่  ***ใช้อันนี้
//document.querySelectorAll('') // ดึงข้อมูลจากชื่อแท็กทั้งหน้า
//เปลี่ยนเนื้อหา HTML : element.innerHTML= ในข้อความไม่ต้องมีวงเล็บ
//เปลี่ยนเนื้อหา Text : element.innerText= ในข้อความไม่ต้องมีวงเล็บ
//เปลี่ยน style Element : element.style.properties = "value"  //properties คือสิ่งที่เราอยากเปลี่ยน ชื่อเหมือน css
//ดำเนินการผ่าน Method element.setAttribute(attribute, value) //attribute คือ class /  value คือชื่อ class

const a = document.getElementsByTagName('p');
console.log(a);

const nameElement=document.getElementById('demo')
let x = 10;
let y = 20;
function changeText(){
    nameElement.innerHTML="<b> vivifix </b> "+ x +" "+ y;
}

const lnameElement = document.querySelector('.name2')
const numElement = document.querySelector('#name1');
function changeText2(){
    lnameElement.innerHTML="HTML "
    numElement.innerHTML="ezor"
}

const colorElement=document.querySelector('.name3');
function changeColor(){
    colorElement.style.color="red";
    colorElement.style.backgroundColor="black"
}

const modeElement=document.querySelector('.name4')
function changeMode(){
    modeElement.setAttribute('class','dark');
    modeElement.innerHTML="Dark mode"
}


