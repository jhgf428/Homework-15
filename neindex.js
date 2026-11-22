const quantity = prompt('Вкажіть кількість товарів');
const price = prompt('Вкажіть ціну одиниці товару');

let total = Number(quantity) * Number(price);
let originalTotal = total;

total -= total * 0.15;

console.log(total);
console.log(originalTotal);
console.log(typeof quantity);
console.log(typeof price);
console.log(Number.isNaN(total));

const city = prompt('Введіть назву міста').trim();
const country = prompt('Введіть назву країни').trim();
let message = `I live in ${city}, ${country}`;

console.log(city.toUpperCase());
console.log(country.toLowerCase());
console.log(city.length);
console.log(country.length);
console.log(city.includes('а'));
console.log(city.indexOf('а'));      
console.log(city.lastIndexOf('а'));
console.log(message);

const a = 28;
const b = 11;
const quotient = a / b;

console.log(Math.round(quotient));
console.log(Math.floor(quotient));
console.log(Math.ceil(quotient));
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
