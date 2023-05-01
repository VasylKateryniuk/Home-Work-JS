//Literals
//Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні об'єкти Javascript.
{
  let shoes = {
    brand: "Nike",
    model: "Air Max",
    color: "Black",
    size: 43,
    gender: "Men",
  };

  let book = {
    name: "Flowers for Algernon",
    author: "Daniel Kiz",
    publicationYear: 1959,
    pageCount: 304,
  };
}
//Literals expand
//Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів з будь-якими значеннями. Забезпечте введення назви ключа і значення через prompt прямо в літералі об'єкта {}
{
  shoes = {
    brand: "Nike",
    model: "Air Max",
    color: "Black",
    size: 43,
    gender: "Men",
    [prompt(`Введіть ключ`)]: prompt("Введіть значення"),
  };
  console.log(shoes);

  book = {
    name: "Flowers for Algernon",
    author: "Daniel Kiz",
    publicationYear: 1959,
    pageCount: 304,
    [prompt(`Введіть ключ №2`)]: prompt("Введіть значення №2"),
  };
  console.log(book);

  //Literals copy
  //Нехай користувач введе ще одну властивість змінну. Вставте цю змінну в новий об'єкт. Скопіюйте об'єкт із попереднього завдання на новий об'єкт.
  let key = prompt("Введіть ключ №3");
  let value = prompt("Введіть значення №3");
  let newObj = {
    [key]: value,
    ...book,
  };
  console.log(newObj);
}

//Html tree
// Зробіть декларативну JSON-структуру для тегів вище, у якій:
// кожен тэг буде об'єктом
// ім'я тега буде полем tagName
// Вкладені теги будуть у полі children
// Набір аттрибутів тега буде в полі attrs.
//Виведіть значення тексту в другій кнопці, використовуючи . та [].
//Виведіть значення атрибуту id у другому input, використовуючи . та [].

{
  const body = {
    tagName: "body",
    children: [
      {
        tagName: "div",
        children: [
          {
            tagName: "span",
            children: ["Enter a data please:"],
          },
          {
            tagName: "br",
          },
          {
            tagName: "input",
            attrs: {
              type: "text",
              id: "name",
            },
          },
          {
            tagName: "input",
            attrs: {
              type: "text",
              id: "surname",
            },
          },
        ],
      },
      {
        tagName: "div",
        children: [
          {
            tagName: "button",
            attrs: {
              id: "ok",
            },
            children: ["OK"],
          },
          {
            tagName: "button",
            attrs: {
              id: "cancel",
            },
            children: ["Cancel"],
          },
        ],
      },
    ],
  };
  console.log(body.children[1].children[1].attrs.id);
  console.log(body.children[0].children[3].attrs.id);
  //Parent
  //Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, використовуючи властивість parent та присвоєння
  body.children[0].parent = body;
  body.children[1].parent = body;
  body.children[0].children[0].parent = body.children[0];
  body.children[0].children[1].parent = body.children[0];
  body.children[0].children[2].parent = body.children[0];
  body.children[0].children[3].parent = body.children[0];
  body.children[1].children[0].parent = body.children[1];
  body.children[1].children[0].parent = body.children[1];

  //Change OK
  //Додайте (або змініть) будь-який введений користувачем атрибут тега <button id='ok'> із завдання HTML Tree. Також користувач вводить значення цього атрибута.
  body.children[1].children[0].attrs[prompt("Введіть атрибут")] =
    prompt("Введіть значення");
  console.log(body.children[1].children[0]);

  //Destructure
  //Використовуючи деструктуризацію структури із завдання HTML Tree:
  //Виведіть значення тексту у тезі span,
  //Виведіть значення тексту в другій кнопці та
  //Виведіть значення атрибуту id у другому input.

  const {
    children: [
      {
        children: [{ children: spanText }],
      },
    ],
  } = body;
  alert(" Значення тексту у тезі span буде: " + spanText);
  const {
    children: [
      ,
      {
        children: [, { children: buttonText }],
      },
    ],
  } = body;
  alert(" Значення тексту в другій кнопці буде: " + buttonText);
  const {
    children: [
      {
        children: [
          ,
          ,
          ,
          {
            attrs: { id: idText },
          },
        ],
      },
    ],
  } = body;
  alert(" Значення атрибуту id у другому input буде: " + idText);
}

//Destruct array
//let arr = [1,2,3,4,5, "a", "b", "c"]
//напишіть код, який використовуючи деструктуризацію покладе:
//парні числа в змінні even1, even2,
//непарні в odd1, odd2, odd3,
//Букви в окремий масив
{
  let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
  let [odd1, even1, odd2, even2, odd3, ...arr1] = arr;
  alert(
    " odd1: " +
      odd1 +
      " even1: " +
      even1 +
      " odd2: " +
      odd2 +
      " even2: " +
      even2 +
      " odd3: " +
      odd3 +
      " окремий масив: " +
      arr1
  );
}

//Destruct string
//let arr = [1, "abc"]
//напишіть код, який використовуючи деструктуризацію покладе:
//Число в змінну number
//літеру a в змінну s1
//літеру b у змінну s2
//літеру c у змінну s3
{
  let arr = [1, "abc"];
  let [number, [s1, s2, s3]] = [...arr];
  alert(" number: " + number + " s1: " + s1 + " s2: " + s2 + " s3: " + s3);
}

//Destruct 2
//let obj = {name: 'Ivan',
//surname: 'Petrov',
//children: [{name: 'Maria'}, {name: 'Nikolay'}]}
//вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2
let obj = {
  name: "Ivan",
  surname: "Petrov",
  children: [{ name: "Maria" }, { name: "Nikolay" }],
};
let {
  children: [{ name: name1 }, { name: name2 }],
} = obj;
alert(" name1 " + name1 + " name2 " + name2);

//Destruct 3
//let arr = [1,2,3,4, 5,6,7,10]
//вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length
{
  let arr = [1, 2, 3, 4, 5, 6, 7, 10];
  let { 0: a, 1: b, length } = arr;
  alert(" a " + a + " b " + b + " length " + length);
}

//Copy delete
//Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, з використанням деструктурiзацiї та rest.
{
  let book = {
    name: "Flowers for Algernon",
    author: "Daniel Kiz",
    publicationYear: 1959,
    pageCount: 304,
  };
  let deleteKey = prompt("Введіть ключ, який потрібно видалити з об'єкта");
  let { [deleteKey]: _, ...copyBook } = book;
  console.log(copyBook);
}

//Currency real rate
//Нижче наведено код, який завантажує актуальну інформацію про курси валют. Скопіюйте посилання з нього вставте в браузер заради інтересу. Реалізуйте калькулятор обміну валют таким чином:
//Користувач вводить вхідну валюту
//Користувач вводить валюту, в яку відбувається конвертація
//Користувач вводить суму у вхідній валюті
//Користувач бачить результат конвертації

{
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      const { rates: exchangeRate } = data;
      const fromCurrency = prompt(
        " Введіть свою валюту " + Object.keys(exchangeRate)
      )
        .trim()
        .toUpperCase();
      const toCurrency = prompt(
        " Введіть валюту на яку обмінюєти " + Object.keys(exchangeRate)
      )
        .trim()
        .toUpperCase();
      const amount = +prompt(" Введіть сумму ");
      if (fromCurrency === toCurrency) {
        alert(" Помилка, ви вибрали одинакові валюти ");
      } else if (
        fromCurrency in exchangeRate &&
        toCurrency in exchangeRate &&
        !isNaN(amount)
      ) {
        const result =
          (amount / exchangeRate[fromCurrency]) * exchangeRate[toCurrency];
        alert(
          " При обміні " +
            amount +
            fromCurrency +
            " на " +
            toCurrency +
            " Ви отримаєте: " +
            result +
            " " +
            toCurrency
        );
      } else {
        alert("Ви в чомусь помилились");
      }
    });
}

//Currency drop down
//Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення HTML-тегів у рядковій змінній. Для списків, що випадають, в HTML передбачені теги <select> і <option>
// Додаємо список в HTML-документ
{
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      const { rates: exchangeRate } = data;
      const currencies = Object.keys(exchangeRate);
      let str = "<select>";
      for (const currency of currencies) {
        str += " <option> " + currency + " </option> ";
      }
      str + " </select>";
      document.querySelector("body").innerHTML += str;
    });
}

//Currency table
//Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, використовуючи код із завдання Currency real rate:
//Використовуйте тільки один запит на сервер. Використовуйте розрахунок кроскурсу для обчислення курсу між будь-якою парою валют
{
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      const { rates: exchangeRate } = data;
      let str1 =
        "<style>table, td { border: 1px solid; text-align:center}</style>";
      str1 += "<table><tr><th></th>";
      for (const currency1 of Object.keys(exchangeRate)) {
        str1 += "<td>" + currency1 + "</td>";
      }
      str1 += "</tr>";
      for (const currency1 of Object.keys(exchangeRate)) {
        str1 += "<tr><td>" + currency1 + "</td>";
        for (const currency2 of Object.keys(exchangeRate)) {
          const rate = exchangeRate[currency2] / exchangeRate[currency1];
          str1 += "<td>" + rate.toFixed(3) + "</td>";
        }
        str1 += "</tr>";
      }
      str1 += "</table>";
      document.querySelector("body").innerHTML += str1;
    });
}

//Form
//Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту
//Для створення правильного типу тега input використовуйте оператор typeof Javascript:
{
  const car = {
    Name: "chevrolet chevelle malibu",
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: "USA",
    in_production: false,
  };
  let form = "<form>";
  for (let [key, value] of Object.entries(car)) {
    let inputType = "text";
    if (typeof value === "number") {
      inputType = "number";
    } else if (typeof value === "boolean") {
      inputType = "checkbox";
    }
    const checkedAttr = value ? "checked" : undefined;
    form += `<label>${key}: <input type="${inputType}" name="${key}" value="${value}" ${checkedAttr} /></label>`;
  }
  form += "</form>";
  document.querySelector("body").innerHTML += form;
}

//Table
//Дано будь-який масив з об'єктами
//Сформувати таблицю (використовуючи накопичення тегів HTML у рядку):
{
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
}

//Тестові дані
//Перевірте ваше рішення, наприклад, на цьому масиві об'єктів:
{
  const persons1 = [
    {
      Name: "chevrolet chevelle malibu",
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Origin: "USA",
    },
    {
      Name: "buick skylark 320",
      Miles_per_Gallon: 15,
      Cylinders: 8,
      Displacement: 350,
      Horsepower: 165,
      Weight_in_lbs: 3693,
      Acceleration: 11.5,
      Year: "1970-01-01",
    },
    {
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 318,
      Horsepower: 150,
      Weight_in_lbs: 3436,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      Name: "amc rebel sst",
      Miles_per_Gallon: 16,
      Cylinders: 8,
      Displacement: 304,
      Horsepower: 150,
      Year: "1970-01-01",
      Origin: "USA",
    },
  ];
  const arr = [];
  for (const person of persons1) {
    for (const key of Object.keys(person)) {
      if (!arr.includes(key)) {
        arr.push(key);
      }
    }
  }
  let str3 = "<style>table, td { border: 1px solid; text-align:center}</style>";
  str3 += "<table><tr>";
  for (const key of arr) {
    str3 += "<th>" + key + "</th>";
  }
  for (const person of persons1) {
    str3 += "<tr>";
    for (const key of arr) {
      if (person[key] !== undefined) {
        str3 += `<td>${person[key]}</td>`;
      } else {
        str3 += "<td></td>";
      }
    }
    str3 += "</tr>";
  }
  str3 += "</table>";
  document.querySelector("body").innerHTML += str3;
}
