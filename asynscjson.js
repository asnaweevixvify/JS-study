const list = document.getElementById('list')

let output = ''

async function getUser(){
    const res = await fetch("app.json")
    const json = await res.json()
    json.user.forEach(item => {
        output+="<li>"+item.name+"</li>"
    });
    list.innerHTML=output
}   
getUser();