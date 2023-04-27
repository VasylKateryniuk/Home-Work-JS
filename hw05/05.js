//Confirms
//Збережіть у масив відповіді на запитання, задані за допомогою confirm.
//Використовуйте літеральний (декларативний) синтаксис масивів ([....,....,....])

{
  let arr = [];
  let question = confirm("Ти хороша людина?");
  let question1 = confirm("Псс, пішли гуляти?");
  arr.push(question, question1);
  console.log(arr);
}

//Prompts
//Збережіть у масив відповіді запитаннь, задані з допомогою prompts.
//Використовуйте доступ до масиву за індексом та присвоєння (arr[....] = ....)

{
  let arr1 = [];
  arr1[0] = prompt("Напишіть скільки вам років?");
  arr1[1] = prompt("З якого ви міста?");
  console.log(arr1);
}

//Item access
//Попросіть користувача ввести (prompt) індекс у масиві.
//Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".
{
  let arr = [1, 2, 3, 4, 5];
  let index = prompt("Введіть індекс у масиві");
  alert(arr[index]);
}

//Item change
//Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу.
//Присвойте у введений індекс введене значення
{
  let array = ["1", "2", "3", "4", "5"];
  let index1 = prompt("Введіть індекс:");
  let value = prompt("Введіть значення:");
  array[index1] = value;
  alert(array);
}

//Multiply table
//Створіть таблицю множення 5x5, як масив в пам'ятi, використовуючи декларативний синтаксис вкладених масивів const arr = [[....], [....], [....], .....]. Числа у вкладених масивах повинні
//дорівнювати добутку індексу зовнішнього масиву на індекс внутрішнього масиву: arr[2][3] === 6

const multiplicationTable = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4, 5],
  [0, 2, 4, 6, 8, 10],
  [0, 3, 6, 9, 12, 15],
  [0, 4, 8, 12, 16, 20],
  [0, 5, 10, 15, 20, 25],
];

//Multiply table slice
//Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, в якій не буде нулів

let multiplicationTable1 = multiplicationTable.slice(1);
for (let i = 0; i < multiplicationTable1.length; i++) {
  multiplicationTable1[i] = multiplicationTable1[i].slice(1);
}
console.log(multiplicationTable1);

//IndexOf Word
//Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено, виведіть повідомлення про це (а не -1)
{
  let userInput = prompt("Введіть рядок із кількох слів");
  let searchWord = prompt("Введіть слово, яке Ви хочете знайти у цьому рядку");
  let wordsArray = userInput.split(" ");
  let position = wordsArray.indexOf(searchWord) + 1;
  if (position === 0) {
    alert("Введене слово не знайдено");
  } else {
    alert(" Cлово знаходиться на позиції " + position + " у введеному рядку ");
  }
}

//Reverse
//Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). Створіть інший масив із цими ж елементами в зворотньому напрямку. Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого використовуючи push.

let arr2 = [];
for (let i = 0; i < 5; i++) {
  let userInput = prompt("Введіть елемент масиву:");
  arr2.push(userInput);
}
let reverseArr = [];
while (arr2.length > 0) {
  let poppedElement = arr2.pop();
  reverseArr.push(poppedElement);
}
alert(" Початковий масив залишився пустим " + arr2);
alert(" Елементи у новому масиві у зворотньому порядку " + reverseArr);

//Reverse 2
//Переверніть другий масив із попереднього завдання ще раз
//(послідовність буде як у першому масиві), використовуючи shift та unshift.

for (let i = 0; i < 5; i++) {
  let shiftedElement = reverseArr.shift();
  arr2.unshift(shiftedElement);
}
alert(" Елементи масива повернуті у початкове положення " + arr2);

//Copy
//Скопіюйте масив створений у завданні Multiply table неглибоко

const copyMultiplicationTable = [...multiplicationTable];
console.log(copyMultiplicationTable);

const deepCopy = [];
for (let i = 0; i < multiplicationTable.length; i++) {
  deepCopy[i] = [...multiplicationTable[i]];
}
console.log(deepCopy);

//Array Equals
//Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)
{
  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3];
  console.log(arr1 === arr2); //false
}

//Flat
//Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. Його довжина повинна дорівнювати 25. Використовуйте spread-оператор

const multiplicationTable2 = [
  ...multiplicationTable1[0],
  ...multiplicationTable1[1],
  ...multiplicationTable1[2],
  ...multiplicationTable1[3],
  ...multiplicationTable1[4],
];
console.log(multiplicationTable2);

//Destruct
//Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію. Виведіть їх

{
  let inputString = prompt("Введіть текст");
  let [firstLetter, , , , fifthLetter, , , , ninthLetter] = inputString;
  alert(
    " Перша літера " +
      firstLetter +
      " П'ята літера " +
      fifthLetter +
      " Дев'ята літера " +
      ninthLetter
  );
}

//Destruct default
//Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, використовуючи деструктуризацію.
//Якщо у рядку таких букв не виявиться задайте змінним значення за умовчанням ! (знак оклику). Виведіть ці змінні

{
  let inputString1 = prompt("Введіть текст");
  let [secondLetter = "!", fourthLetter = "!", fifthLetter1 = "!"] =
    inputString1;
  alert(
    " Друга літера " +
      secondLetter +
      " Четверта літера " +
      fourthLetter +
      " П'ята літера " +
      fifthLetter1
  );
}

//Multiply table rest
//Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації. Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів - зберіть загальний масив без нулів
{
  const multiplicationTable = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25],
  ];
  let [, ...multiplicationTable1] = multiplicationTable;
  let [
    [, a, ...rest1],
    [, b, ...rest2],
    [, c, ...rest3],
    [, d, ...rest4],
    [, e, ...rest5],
  ] = multiplicationTable1;
  let multiplicationTable3 = [
    a,
    ...rest1,
    b,
    ...rest2,
    c,
    ...rest3,
    d,
    ...rest4,
    e,
    ...rest5,
  ];
  console.log(multiplicationTable3);
}

//For Alert
//Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(), використовуючи цикл for .... of
{
  const names = ["John", "Paul", "George", "Ringo"];
  for (const name of names) {
    alert(name);
  }
}

//For Select Option
//Використовуючи код що у ДЗ, створіть список, що випадає, з валютами.
//Елементи списку, що випадає, створюються за допомогою тега <option>
{
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let str = "<select>";
  for (const currency of currencies) {
    str += `<option>${currency}</option>`;
  }
  str += "</select>";
  document.write(str);
}

//For Table Horizontal
//Аналогічно, виконайте виведення імен в осередки таблиці по горизонталі (один рядок з чотирма осередками)
{
  const names = ["John", "Paul", "George", "Ringo"];
  let str = "<table>";
  str += "<tr>";
  for (const name of names) {
    str += `<td>${name}</td>`;
  }
  str += "</tr>";
  str += "</table>";
  document.write(str);
}

//For Table Vertical
//Досягніть виведення імен в осередки таблиці по вертикалі (одна колонка з чотирма рядками, у кожному рядку - один осередок)
{
  const names = ["John", "Paul", "George", "Ringo"];
  let str = "<table>";
  for (const name of names) {
    str += "<tr>";
    str += `<td>${name}</td>`;
    str += "</tr>";
  }
  str += "</table>";
  document.write(str);
}

//For Table Letters
//Використовуючи код що у ДЗ, створіть таблицю 3x4. У кожному рядку три осередки з літерами, чотири рядки, так як 4 валюти в масиві.
{
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let str = "<table>";
  for (const currency of currencies) {
    str += "<tr>";
    for (const letter of currency) {
      str += "<td>" + letter + "</td>";
    }
    str += "</tr>";
  }
  str += "</table>";
  document.write(str);
}

//For Multiply Table
//Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю, використовуючи вкладені for.... of та document.write
//Зробіть черезрядкове підсвічування - задавайте парним рядкам один колір тла, непарним - інший
{
  document.write("<table>");
  for (let i = 0; i <= 5; i++) {
    if (i % 2 == 0) {
      document.write("<tr style='background-color: lightgray;'>");
    } else {
      document.write("<tr>");
    }
    for (let j = 0; j <= 5; j++) {
      document.write("<td>" + i * j + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
//Function Capitalize
//Реалізуйте завдання String: capitalize як окрему функцію:
{
  const capitalize = (str) => {
    let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    return result;
  };
  console.log(capitalize("cANBerRa"));
}
//Map Capitalize
//Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи map та capitalize створіть масив у якому кожне слово буде з великої літери. Зберіть масив у рядок назад
{
  const userInput = prompt("Введіть рядок:");
  const words = userInput.split(" ");
  const capitalized_words = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  const result = capitalized_words.join(" ");
  console.log(result);
}

//Filter Lexics
//Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи filter поверніть true якщо елемент масиву не
//полягає у визначеному масиві неприпустимих слів. Якщо елемент масиву - неприпустиме слово, функція, передана в filter повинна повертати false. Зберіть масив у рядок назад.
{
  let inputString = prompt("Введіть рядок");
  let wordsArr = inputString.split(" ");
  let badWords = ["loser", "stupid", "freak"];
  let arr = wordsArr.filter((word) => !badWords.includes(word));
  let censoredStr = arr.join(" ");
  console.log(censoredStr);
}

//Beep Lexics
//Нехай користувач вводить рядок. Розбийте його за пробілами. Використовуючи map та тернарний оператор поверніть з функції слово без змін, якщо воно не полягає в якомусь іншому масиві заборонених слів. Якщо слово полягає в цьому списку, функція повинна повернути слово BEEP.
//Зберіть масив назад у рядок через пробіл. Таким чином, ви зможете реалізувати заміну кількох заборонених слів на BEEP.
{
  let inputString = prompt("Введіть рядок");
  let wordsArr = inputString.split(" ");
  let badWords = ["loser", "stupid", "freak"];
  let arr = wordsArr.map((word) => (badWords.includes(word) ? "BEEP" : word));
  let censoredStr = arr.join(" ");
  console.log(censoredStr);
}

//Reduce HTML
//Реалізуйте завдання For Select Option використовуючи reduce:
{
  const currencies = ["USD", "EUR", "GBP", "UAH"];
  let str = "<select>";
  str += currencies.reduce(
    (a, b) => a + `<option value="${b}">${b}</option>`,
    ""
  );
  str += "</select>";
  document.write(str);
}

//For Brackets Hell Check
//Нехай користувач вводить рядок з будь-якими парними дужками в ньому, наприклад [[](){{{[]()}}}]. Знайдіть місце можливої помилки (непарності) у цьому рядку. Для цього, кожну дужку, що відкриває, додавайте в стек. При знаходженні дужки, що закриває, вона повинна відповідати вершині стека (останнєй доданой дужцi).
//Якщо вона не відповідає, виведіть повідомлення про помилку та позицію у рядку. Якщо відповідає – приберіть дужку зі стека. Якщо рядок помилок не містить, порадуйте користувача.
{
  const line = prompt("Ведіть рядок з будь-якими дужками");
  const bracketsStack = [];
  let i = 0;
  for (const character of line) {
    if (character === "(" || character === "[" || character === "{") {
      bracketsStack.push(character);
    } else if (character === ")" || character === "]" || character === "}") {
      if (bracketsStack.length === 0) {
        alert("Помилка! дужка " + character + " не має відкриваючої дужки");
        break;
      } else {
        const lastOpenBracket = bracketsStack.pop();
        if (
          (lastOpenBracket === "(" && character == ")") ||
          (lastOpenBracket === "[" && character == "]") ||
          (lastOpenBracket === "{" && character == "}")
        ) {
          alert("Вітаю! ви ввели все вірно");
        }
        if (
          (lastOpenBracket === "(" && character !== ")") ||
          (lastOpenBracket === "[" && character !== "]") ||
          (lastOpenBracket === "{" && character !== "}")
        ) {
          alert(
            "Помилка! неправильна пара дужок " +
              lastOpenBracket +
              character +
              " на позиції " +
              i
          );
          break;
        }
      }
    }
    i++;
  }
  if (bracketsStack.length > 0) {
    alert("Помилка! є незакриті дужки");
  }
}
