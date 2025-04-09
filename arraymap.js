// การนำค่าใน array มาเปลี่ยนค่าแล้วสร้างเป็น array ใหม่
const num = [10,20,30,40,50,60]

const result = num.map(element=>element*2)
console.log(num);
console.log(result);

const color = ["red","yellow","blue"]
const darkColor = color.map(element=>"dark"+element)
console.log(darkColor);

const data = [
    {day:"4/9/2568",weather:"sunny",temp:30},
    {day:"4/10/2568",weather:"rainy",temp:27},
    {day:"4/11/2568",weather:"cold",temp:24},
    {day:"4/12/2568",weather:"cloudy",temp:26},
    {day:"4/13/2568",weather:"thunderstorm",temp:28}
]
const weatherData = data.map(element=>{
    return element.weather
})
console.log(weatherData);
