//Temperature
//Оформіть Temperature як функцію, яку параметром передається температура в одній системі, а повертається до іншої. Жодних prompt та console.log у коді бути не повинно, якщо ви хочете надалі користуватися цією функцією будь-де в коді зручно. Чи потрібен блок коду функції для вирішення цього завдання?
const temperatureConverter = (celsius) => celsius * 1.8 + 32; //(можна без блоку коду)
temperatureConverter();

//RGB
//Оформіть Number: RGB як функцію, яку параметрами передаються три числа (r, g, b) => . Функція повинна повертати рядок у нотації #RRGGBB. Використовуючи умови або тернарний оператор Досягніть що б у результаті завжди було 7 символів, навіть коли значення кольору менше 15ти. Чи потрібний блок коду цієї функції?
const colorConverter = (r, g, b) =>
  "#" +
  (r < 16 ? "0" + r.toString(16) : r.toString(16)) +
  (g < 16 ? "0" + g.toString(16) : g.toString(16)) +
  (b < 16 ? "0" + b.toString(16) : b.toString(16));
console.log(colorConverter(14, 255, 100)); //блок коду не потрібний

//Flats
//Оформіть Number: flats як функцію. Продумайте достатню кількість параметрів для розв'язання задачі. Функція повинна повертати об'єкт
// виду {entrance, floor}, де entrance - номер падiка, floor - номер поверху, на якому знаходиться квартира.
const flats = (floors, apartmentsPerFloor, numberApartment) => {
  let apartmentsEntrance = apartmentsPerFloor * floors;
  let entranceNumber =
    Math.floor((numberApartment - 1) / apartmentsEntrance) + 1;
  let floorNumber =
    Math.floor(
      ((numberApartment - 1) % apartmentsEntrance) / apartmentsPerFloor
    ) + 1;
  return {
    entrance: entranceNumber,
    floor: floorNumber,
  };
};
console.log(flats(9, 4, 37));

//Credentials
//Оформіть завдання String: credentials як функцію без параметрів. Використовуйте функцію capitalize із домашнього завдання з масивів.
//Функція повинна містити виклики prompt та повертати об'єкт виду {name, surname, fatherName, fullName}
const capitalize = () => {
  let name = prompt("Введіть своє ім'я:");
  let surname = prompt("Введіть своє прізвище:");
  let fatherName = prompt("Введіть своє по-батькові:");
  let str1 =
    name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase().trim();
  let str2 =
    surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase().trim();
  let str3 =
    fatherName.slice(0, 1).toUpperCase() +
    fatherName.slice(1).toLowerCase().trim();
  let fullName = str1 + " " + str2 + " " + str3;
  return {
    name: name,
    surname: surname,
    fatherName: fatherName,
    fullName: fullName,
  };
};
console.log(capitalize());

//New line
//Оформіть завдання String: new line як функцію з параметром-рядком. Функція повинна повертати рядок із справжніми переносами.
const inputUser = (str) => {
  return prompt(str).split("\\n").join("\n");
};
alert(inputUser("Введіть рядок з переносами"));

//Prompt OR
//Оформіть завдання Prompt: OR як функцію, яка приймає рядок для prompt та значення за замовчуванням. Функція повинна повертати введений текст або значення за замовчуванням у разі відмови користувача вводити щось.
// Використовуйте функцію без блоку коду (функція одного виразу).
const age = () => prompt("Скільки вам років?") || 18;
alert(age());

//Login And Password
//Оформіть завдання Login And Password як функцію, яка приймає два параметри - правильний логін та пароль і повертає true якщо логін та пароль введені користувачами вірні, або false якщо користувач не зміг.
//Функція повинна містити в собі виклики prompt для введення логіну та пароля користувачем.
const userInput = (correctLogin = "admin", correctPassword = "qwerty") => {
  let login = prompt("Введіть свій логін");
  if (login === correctLogin) {
    let password = prompt("Введіть свій пароль");
    if (password === correctPassword) {
      alert("Вітаю все вірно!");
      return true;
    } else {
      alert("Неправильний пароль");
      return false;
    }
  } else {
    alert("Неправильний логін");
    return false;
  }
};
console.log(userInput());

//For Table
//Оформіть завдання For Multiply Table як функцію, яка приймає будь-який масив з масивами, а повертає рядок HTML з тегом <table> і всякими tr та td.
const table = () => {
  const multiplicationTable = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25],
  ];
  let str = "<style>table, td {border: 1px solid black;}</style><table>";
  for (let row of multiplicationTable) {
    if (multiplicationTable.indexOf(row) % 2 == 0) {
      str += '<tr style="background-color: gray">';
    } else {
      str += "<tr>";
    }
    for (let number of row) {
      str += "<td>" + number + "</td>";
    }
    str += "</tr>";
  }
  str += "</table>";
  document.querySelector("body").innerHTML += str;
};
table();

//Filter Lexics
//Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок для перевірки та масив некоректних слів (['бляха', 'муха', "пляшка", "шабля"], наприклад).
//Функція повинна повертати рядок без цих некоректних слів.
const inputString = prompt("Введіть рядок");
const badWords = ["бляха", "муха", "пляшка", "шабля"];
const filterWords = (inputString, badWords) => {
  let wordsArr = inputString.split(" ");
  let arr = wordsArr.filter((word) => !badWords.includes(word));
  let censoredStr = arr.join(" ");
  return censoredStr;
};
alert(filterWords(inputString, badWords));

//Currency Table
//Оформіть завдання Currency Table як функцію без параметрів, яка складає отримані дані у внутрішній двовимірний масив, після чого відображає його використовуючи функцію із завдання For Table
{
  const table1 = () => {
    return fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        const { rates: exchangeRate } = data;
        const keys = Object.keys(exchangeRate);
        const exchangeArray = [];
        for (const currency1 of Object.keys(exchangeRate)) {
          const currency = [currency1];
          for (const currency2 of Object.keys(exchangeRate)) {
            const rate = exchangeRate[currency2] / exchangeRate[currency1];
            currency.push(rate.toFixed(3));
          }
          exchangeArray.push(currency);
        }
        return table2(exchangeArray, keys);
      });
  };

  const table2 = (arr, keys) => {
    let str = "<style>table, td {border: 1px solid black;}</style><table>";
    str += "<tr><th></th>";
    for (let key of keys) {
      str += "<th>" + key + "</th>";
    }
    str += "</tr>";
    for (let row of arr) {
      str += "<tr>";
      for (let number of row) {
        str += "<td>" + number + "</td>";
      }
      str += "</tr>";
    }
    str += "</table>";
    document.querySelector("body").innerHTML += str;
  };

  table1();
}

//Form
//Оформіть завдання Form як функцію, яка приймає будь-який об'єкт як параметр та створює форму на екрані.
const createTable = (obj) => {
  const arr = [];
  for (const person of persons) {
    for (const key of Object.keys(person)) {
      if (!arr.includes(key)) {
        arr.push(key);
      }
    }
  }
  let str2 = "<style>table, td { border: 1px solid; text-align:center}</style>";
  str2 += "<table><tr>";
  for (const key of arr) {
    str2 += "<th>" + key + "</th>";
  }
  for (const person of persons) {
    str2 += "<tr>";
    for (const key of arr) {
      if (person[key] !== undefined) {
        str2 += `<td>${person[key]}</td>`;
      } else {
        str2 += "<td></td>";
      }
    }
    str2 += "</tr>";
  }
  str2 += "</table>";
  document.querySelector("body").innerHTML += str2;
};

const persons = [
  {
    name: "Марія",
    fatherName: "Іванівна",
    surname: "Іванова",
    sex: "female",
  },
  {
    name: "Миколай",
    fatherName: "Іванович",
    surname: "Іванов",
    age: 15,
  },
  {
    name: "Петро",
    fatherName: "Іванович",
    surname: "Іванов",
    married: true,
  },
];
createTable(persons);

//Array of objects sort
//Зробіть узагальнену функцію сортування масиву з об'єктами
//Функція дозволяє відсортувати будь-який набір даних по імені поля (другий параметр). Третім параметром іде необов'язковий 'Boolean', який у разі true робить сортування за зростанням, у разі false - за спаданням. За замовчуванням (без третього параметра) відбувається сортування за зростанням.
//Якщо параметр не заданий - всередині функції він дорівнює undefined
var persons1 = [
  { name: "Іван", age: 17 },
  { name: "Марія", age: 35 },
  { name: "Олексій", age: 73 },
  { name: "Яків", age: 12 },
];
const sort = (arr, field, bollean = true) => {
  return arr.sort((a, b) => {
    const result = a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
    return bollean ? result : -result;
  });
};
console.log(sort(persons1, "age")); //сортує за віком за зростанням
// console.log(sort(persons1, "name", true)); //сортує на ім'я за спаданням

//Table
//Оформіть завдання Table як функцію, яка приймає такі параметри:
//будь-який масив об'єктів для відображення
//поле, яким сортувати
//порядок сортування (зменшення/зростання)
//Перед відображенням:
//скопіюйте вихідний масив, щоб сортування не змінило оригінал;
//відсортуйте за допомогою функції попереднього завдання
//Відображення візьміть із завдання Table
const createTable1 = (arr2, field, bollean = true) => {
  const keys = [];
  for (const person of arr2) {
    for (const key of Object.keys(person)) {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
  }
  const copyArr = JSON.parse(JSON.stringify(arr2));
  const sort = (copyArr, field, bollean) => {
    return copyArr.sort((a, b) => {
      const result = a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
      return bollean ? result : -result;
    });
  };
  sort(copyArr, field, bollean);
  let str2 = "<style>table, td { border: 1px solid; text-align:center}</style>";
  str2 += "<table><tr>";
  for (const key of keys) {
    str2 += "<th>" + key + "</th>";
  }
  for (const person of copyArr) {
    str2 += "<tr>";
    for (const key of keys) {
      if (person[key] !== undefined) {
        str2 += `<td>${person[key]}</td>`;
      } else {
        str2 += "<td></td>";
      }
    }
    str2 += "</tr>";
  }
  str2 += "</table>";
  document.querySelector("body").innerHTML += str2;
};
createTable1(persons, "name", false);

//Divide
//Реалізуйте завдання Number: divide у HTML:
//Скористайтеся наступною інформацією:
//всі id у HTML стають глобальними змінними (якщо це ім'я не зайняте, id="prompt" не спрацює, функція prompt працюватиме і далі);
//Будь-який DOM-елемент (те, що в HTML називається тегом або парою тегів) є об'єктом;
//Для доступу до атрибуту value тегів input використовується властивість value (наприклад, firstNumber.value)
//Для доступу до вкладеного тексту парних тегів використовується властивість innerHTML (наприклад, divisionResult.innerHTML)
//Заготівля вище забезпечує запуск функції calcResult з будь-якої зміни тексту в полях введення. Напишіть у ній поділ значень з полів введення та виведіть результат у div.
const calcResult = () => {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;
  const divisionResult = document.getElementById("divisionResult");
  if (secondNumber === "0") {
    divisionResult.innerHTML = "Ділення на 0 неможливе";
    return;
  }
  const result = Math.floor(firstNumber / secondNumber);
  divisionResult.innerHTML = " Результат: " + result;
};

//Calc Func
//Згадайте перше ДЗ з Javascript, в якому ви робили всякі розрахунки використовуючи код на Javascript. Оформіть це як функцію:
//знайдіть усі вхідні дані, зробіть їх параметри
//знайдіть змінну з результатом розрахунків і зробіть так, щоб ваша функція повертала цей результат.
//Якщо результатів декілька, створіть об'єкт із цих результатів та поверніть його.
const calc = (salary, month, tax = 19.5 / 100) => salary * month * tax;
alert(
  " Ваша сума податку складатиме: " +
    calc(prompt("Введіть сумму зарплати"), prompt("Введіть кількість місяців"))
);

//Calc Live
//Використовуючи приклад із завдання Divide та функцію з Calc Func зробіть кілька полів введення в HTML, змінюючи які ви отримуватимете результат калькуляції в якомусь div.
const calcResult1 = () => {
  const salary = document.getElementById("salary").value;
  const month = document.getElementById("month").value;
  const outputResult = document.getElementById("outputResult");
  const tax = 19.5 / 100;
  const result = salary * month * tax;
  outputResult.innerHTML = "Результат: " + result;
};
