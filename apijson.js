// ดึงข้อมูลจาก api

const list = document.getElementById('list');

let output = ''
async function getUser(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const json = await res.json();
    json.forEach(item => {
        output+="<li>"+item.name+"</li>"
    });
    list.innerHTML=output
}
getUser();