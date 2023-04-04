//  1-ше завдання

var a = 5;
var b, c;

b = a * 5;
c = b / 2;

//  2-ге завдання

let age = prompt("Скільки вам років?");
let currentYear = 2023;
let birthYear = currentYear - age;

alert("Ваш рік народження " + birthYear);

//  3-тє завдання

let celsius = prompt("Введіть температуру в градусах Цельсія:");
let fahrenheit = celsius * 1.8 + 32;

alert("Температура в градусах Фаренгейта: " + fahrenheit);

//  4-те завдання

let x = prompt("Введіть перше число");
let y = prompt("Введіть друге число");
let result = Math.floor(x / y);
alert(result);

//  5-те завдання

const rate = 37.8;

let amount = prompt("Введіть суму в доларах:");

let exchange = amount * rate;

exchange = exchange.toFixed(2);

alert("Ви отримаєте " + exchange + " гривень ");

//  6-те завдання

let red = parseInt(prompt("Введіть значення для red (від 0 до 255)"), 10);
let green = parseInt(prompt("Введіть значення для green (від 0 до 255)"), 10);
let blue = parseInt(prompt("Введіть значення для blue (від 0 до 255)"), 10);

let color = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

alert(color);

//  7-ме завдання

let floors = prompt("Введіть кількість поверхів в будинку: ");
let apartmentsPerFloor = prompt("Введіть кількість квартир на поверсі:");
let numberApartment = prompt("Введіть номер квартири: ");

let apartmentsEntrance = (apartmentsPerFloor * floors) / 4;
let entranceNumber = Math.ceil(numberApartment / apartmentsEntrance);
let floorNumber = Math.ceil(
  (numberApartment % apartmentsEntrance) / apartmentsPerFloor
);

alert(
  " Квартира з номером " +
    numberApartment +
    " знаходиться на " +
    floorNumber +
    " поверсі " +
    entranceNumber +
    " під'їзду "
);
