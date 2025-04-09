//คัดกรองสมาชิกใน array ที่ตรงตามเงื่อนไข
const num = [10,20,30,40,50,60]

const result = num.filter(element=>{
    return element>20
})
console.log(result);

const data = [
    {day:"4/9/2568",weather:"sunny",temp:30},
    {day:"4/10/2568",weather:"rainy",temp:27},
    {day:"4/11/2568",weather:"cold",temp:24},
    {day:"4/12/2568",weather:"sunny",temp:26},
    {day:"4/13/2568",weather:"sunny",temp:28}
]
const tempData = data.filter(element=>{
    return element.temp>25.
}).filter(element=>element.weather==="sunny")//filter 2 ชั้น อุณหภูมิและสภาพอากาศ

console.log(tempData);