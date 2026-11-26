const quantity = prompt('Вкажіть кількість товарів');
const price = prompt('Вкажіть ціну одиниці товару');
const quantityNumber = Number(quantity);
const priceNumber = Number(price);
let total = quantityNumber * priceNumber;
let originalTotal = total;

total -= total * 0.15;

console.log(total);
console.log(originalTotal);
console.log(typeof quantityNumber);
console.log(typeof priceNumber);
console.log(Number.isNaN(total));
console.log(Number.isNaN(quantityNumber));
console.log(Number.isNaN(priceNumber));

const city = prompt('Введіть назву міста').trim();
const country = prompt('Введіть назву країни').trim();
let message = `I live in ${city}, ${country}`;
const cityLowerСase = city.toLowerCase();

console.log(city.toUpperCase());
console.log(country.toLowerCase());
console.log(city.length);
console.log(country.length);
console.log(cityLowerСase.includes('a'));
console.log(cityLowerСase.indexOf('a'));      
console.log(cityLowerСase.lastIndexOf('a'));
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
console.log(Math.max(a, b))
console.log(Math.min(a, b))
