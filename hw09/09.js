//while confirm
//Зробіть цикл з confirm, який триває поки користувач тисне Скасування і закінчується по ОК.
{
  let i = 0;
  do {
    i++;
  } while (
    !confirm("Я твій цикл, жми СКАСУВАТИ і продовжимо, або ОК та закінчуємо")
  );
}

//array fill
//Створіть порожній масив і додавайте в нього елементи, введені користувачем, поки користувач не натисне Скасувати в черговому prompt. Використовуйте push для зручності: push У масиві не повинно бути null після роботи циклу;
{
  const arr = [];
  let input;
  while ((input = prompt("Введіть текст")) !== null) {
    arr.push(input);
  }
  console.log(arr);
}

//array fill nopush
//Зробіть попереднє завдання, не використовуючи push, а звертаючись до елементів індексу.
{
  let arr = [];
  let i = 0;
  let input;
  do {
    input = prompt("Введіть текст");
    if (input !== null) {
      arr[i] = input;
      i++;
    }
  } while (input !== null);
  console.log(arr);
}

//infinite probability
//Створіть нескінченний цикл, який переривається за допомогою конструкції break, коли Math.random() > 0.9. Код повинен підраховувати кількість ітерацій та вивести це число за допомогою alert.

let counter = 0;
while (true) {
  counter++;
  if (Math.random() > 0.9) {
    break;
  }
}
alert("Кількість ітерацій складає " + counter);

//empty loop
//Зробіть цикл з prompt, який переривається за натисканням OK і продовжується за натисканням "Скасувати" c порожнім тілом циклу.
{
  do {} while (
    prompt(
      " натисни OK якщо хочеш все це завершити, або СКАСУВАТИ та продовжимо "
    ) === null
  );
}

//progression sum
//Підрахувати суму арифметичної прогресії від 1 до N c кроком 3 (1,4,7...) використовуючи цикл for. Метод Гауса не застосовувати, навпаки, зробити максимально наївне рішення.
{
  let sum = 0;
  for (let i = 1; i <= 10; i += 3) {
    sum += i;
  }
  console.log(sum);
}

//chess one line
//Сформувати рядок # # # # # за допомогою циклу for. Довжина рядка може бути парною та непарною, і вказується в одному місці в коді.

{
  let str = "";
  let strLength = 10;
  for (i = 0; i < strLength; i++) {
    if (i % 2 == 0) {
      str += "#";
    } else {
      str += " ";
    }
  }
  alert(str);
}

//numbers
//Сформувати рядок за допомогою вкладених циклів. Для перекладу рядка використовуйте \n.
{
  let str = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
}

//chess
//Сформуйте рядок із шахівницею із вкладених циклів. Для перекладу рядка використовуйте '\n'. Код повинен підтримувати легку зміну розмірів дошки. Розмiр може бути непарним, наприклад 3x5. Цi значення (розмiри дошки) повиннi бути в кодi тiльки в одному мiсце кожне.
{
  let boardHight = 10;
  let boardWidth = 12;
  let str = "";
  for (let i = 0; i < boardHight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      if ((i + j) % 2 == 0) {
        str += "#";
      } else {
        str += ".";
      }
    }
    str += "\n";
  }
  console.log(str);
}

//cubes
//Сформуйте масив з N(вводиться користувачем за допомогою prompt) елементів , що містить в собі куби індексів, тобто:
{
  let n = prompt("Введіть число");
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i ** 3);
  }
  console.log(arr);
}

//multiply table
//За допомогою вкладеного циклу сформуйте масив масивів "таблиця множення". Для ініціалізації вкладених масивів використовуйте
let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = [];
  for (let j = 0; j < 10; j++) {
    arr[i][j] = i * j;
  }
}
console.log(arr);

// read array of objects
// Напишіть функцію readArrayOfObjects, яка циклічно додає масив об'єкти, які ввів користувач. Користувач вводить ключі та значення (їх у кожному об'єкті може бути будь-яка кількість), використовуючи prompt. Коли користувач натискає "Скасувати" у вікні prompt, введення об'єкта закінчується і об'єкт додається до масиву. Перед введенням наступного об'єкта користувачеві задається питання (використовуючи confirm), чи хоче він продовжить цi тортури введення об'єктів. При ствердній відповіді знову працює введення будь-якої кількості ключів для створення нового об'єкту
// Функція має повертати створений масив із об'єктами.
const readArrayOfObjects = () => {
  const arr = [];
  let continues = true;
  while (continues) {
    const obj = {};
    let addObj = true;
    while (addObj) {
      const key = prompt("Введіть ключ:");
      if (key === null) {
        addObj = false;
        continue;
      }
      const value = prompt(" Введіть значення для ключа " + key);
      obj[key] = value;
    }
    arr.push(obj);
    continues = confirm("Бажаєте продовжити введення об'єктів?");
  }
  return arr;
};
console.log(readArrayOfObjects());

//Ромбік
//Сформувати наступний рядок – ромбік використовуючи цикли та змiнну size яка дорiвнює ширинi та висотi отриманого рядка:
let size = 6;
let str = "";
for (let i = 1; i <= size; i++) {
  let dotStart = ".".repeat(size - i);
  let dotEnd = ".".repeat(size - i);
  let romb = "#".repeat(2 * i - 1);
  str += dotStart + romb + dotEnd + "\n";
}
for (let i = size - 1; i >= 1; i--) {
  let dotStart = ".".repeat(size - i);
  let dotEnd = ".".repeat(size - i);
  let romb = "#".repeat(2 * i - 1);
  str += dotStart + romb + dotEnd + "\n";
}
console.log(str);

//DOM: multiply table
//Зробити таблицю множення, використовуючи DOM createElement та innerText. Створіть таблицю, вкладені рядки та комірки у циклах. результат щось на кшталт цього:
const table = document.getElementById("multiplicationTable");
const header = document.createElement("tr");
for (let i = 0; i < 10; i++) {
  const header1 = document.createElement("td");
  header1.innerText = i;
  header.appendChild(header1);
}
table.appendChild(header);

for (let i = 1; i < 10; i++) {
  const row = document.createElement("tr");
  const rowHeader = document.createElement("td");
  rowHeader.innerText = i;
  row.appendChild(rowHeader);
  for (let j = 1; j < 10; j++) {
    const cell = document.createElement("td");
    cell.innerText = i * j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
const cells1 = document.getElementsByTagName("td");
for (let i = 0; i < cells1.length; i++) {
  cells1[i].style.border = "1px solid black";
  const rows = document.getElementsByTagName("tr");
  for (let j = 0; j < rows.length; j++)
    if (j % 2 !== 0) {
      rows[j].style.backgroundColor = "lightgray";
    }
}

//DOM: highlight cell
//Підсвітити комірку, над якою знаходиться курсор миші. Використовуйте події mouseover та mouseout, і style.backgroundColor для підсвічування. Для того, щоб підсвітити правильну комiрку, додайте обробники подій у вкладений цикл, і використовуйте у них ту змінну, яка зберігає <td>. У такому разі замикання вам допоможуть.

const cells = table.getElementsByTagName("td");
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", () => {
    cells[i].style.backgroundColor = "red";
  });
  cells[i].addEventListener("mouseout", () => {
    cells[i].style.backgroundColor = "";
  });
}

//DOM: Highlight cross
//Підсвітити рядок і стовпець, у якому знаходиться підсвічена комiрка. Якщо у вас обробники подій оголошені у вкладеному циклі, то ви можете користуватися лічильниками циклу (зазвичай i та j) та іншими змінними, наприклад змінної, що містить у собі DOM-елемент рядка.
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", () => {
    cells[i].addEventListener(
      "mouseover",
      () => (cells[i].style.backgroundColor = "red")
    );
    cells[i].addEventListener(
      "mouseout",
      () => (cells[i].style.backgroundColor = "")
    );
    const colIndex = cells[i].cellIndex;
    const rows = table.getElementsByTagName("tr");
    for (let j = 0; j < rows.length; j++) {
      rows[j].cells[colIndex].style.backgroundColor = "blue";
    }
  });
  cells[i].addEventListener("mouseout", () => {
    cells[i].style.backgroundColor = "";
    const colIndex = cells[i].cellIndex;
    const rows = table.getElementsByTagName("tr");
    for (let j = 0; j < rows.length; j++) {
      rows[j].cells[colIndex].style.backgroundColor = "";
    }
  });
}
const rows = table.getElementsByTagName("tr");
for (let j = 0; j < rows.length; j++) {
  rows[j].addEventListener("mouseover", () => {
    rows[j].style.backgroundColor = "yellow";
  });
  rows[j].addEventListener("mouseout", () => {
    rows[j].style.backgroundColor = "";
  });
}
