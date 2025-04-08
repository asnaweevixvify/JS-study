//เป็นการกำหนดค่าเรื่มต้นให้ parameter เติม = ในวงเล็บ parameter ได้เลย
getDataCustomer=(customerName,customerAddress="Bangkok")=>{
    address = `ชื่อลูกค้า = ${customerName} ที่อยู่ = ${customerAddress}
    `
    return address
}
console.log(getDataCustomer("asnawee","rayong"))
console.log(getDataCustomer("asnawee"))