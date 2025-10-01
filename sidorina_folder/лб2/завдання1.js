let date = new Date();
let futureDate=new Date(date)

futureDate.setDate(futureDate.getDate()+100);

console.log(date.toLocaleString('uk-UA'));
console.log(futureDate.toLocaleString('uk-UA'));
