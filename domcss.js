//element.classList.add("class"); // เพิ่ม class style
//element.classList.remove("class"); // ลบ class style
//element.classList.toggle("class"); // สลับ class style
//element.classList.contains("class"); // เปรียบเทียบ class style

function addItem(){
    const Shape = document.querySelector('.shape')
    Shape.classList.add("changeColor")
}
function removeItem(){
    const Shape = document.querySelector('.shape')
    Shape.classList.remove('changeColor');
}
function sufItem(){
    const Shape = document.querySelector('.shape')
    Shape.classList.toggle('changeColor');
}