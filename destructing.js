const color = ["red","yellow","blue"]
const a =color[0];
console.log(a);

const username = ["asnawee","anwa"]
const[x,y]=username;
console.log(x+y);

const product ={
    productName:"computer",
    price:500,
    color:"black"
}
nameProduct = product.productName;
console.log(nameProduct);

// destruc obj const { ชื่อ propeties ใน object : ชื่อตัวแปรใหม่}
const {productName:d,price:f,color:g} = product;
console.log(d+f+g);