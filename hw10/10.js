// Arrow to Functions
// Переведіть будь-які п'ять завдань з попереднього ДЗ з функцій у синтаксис function

// завдання №1
{
  function colorConverter(r, g, b) {
    return (
      "#" +
      (r < 16 ? "0" + r.toString(16) : r.toString(16)) +
      (g < 16 ? "0" + g.toString(16) : g.toString(16)) +
      (b < 16 ? "0" + b.toString(16) : b.toString(16))
    );
  }

  console.log(colorConverter(14, 255, 100));

  //   завдання №2
  function flats(floors, apartmentsPerFloor, numberApartment) {
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
  }
  console.log(flats(9, 4, 37));

  //завдання №3
  function userInput(correctLogin = "admin", correctPassword = "qwerty") {
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
  }
  console.log(userInput());

  // завдання №4
  function filterWords(inputString, badWords) {
    let wordsArr = inputString.split(" ");
    let arr = wordsArr.filter((word) => !badWords.includes(word));
    let censoredStr = arr.join(" ");
    return censoredStr;
  }
  const inputString = prompt("Введіть рядок");
  const badWords = ["бляха", "муха", "пляшка", "шабля"];
  alert(filterWords(inputString, badWords));

  //завдання №5
  function temperatureConverter(celsius) {
    return celsius * 1.8 + 32;
  }
}

// createPerson
// Створіть функцію createPerson, яка приймає два параметри: name та surname, і повертає об'єкт із ключами name, surname, getFullName.
//  getFullName має бути функцією, яка працює з об'єктом через this, а так ж готова до того, що в об'єкті потім додати ключ fatherName

{
  function createPerson(name, surname) {
    return {
      name,
      surname,
      getFullName() {
        if (this.fatherName) {
          return `${this.name} ${this.fatherName} ${this.surname}`;
        }
        return `${this.name} ${this.surname}`;
      },
    };
  }
}

const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");

console.log(a.getFullName()); //Вася Пупкін
a.fatherName = "Іванович";
console.log(a.getFullName()); //Вася Іванович Пупкін

console.log(b.getFullName()); //Ганна Іванова

// createPersonClosure
// Завдання в цілому, аналогічно попередньому, проте, в об'єкт заносити name, surname, fatherName та age не потрібно. name і surname повинні бути параметрами, змінні age та fatherName оголосіть через let у тілі createPersonClosure. Всередині createPersonClosure оголосіть такі функції:
// getName
// getSurname
// getFatherName
// getAge
// getFullName
// Ці функції повинні повертати змінні, оголошені функції createPersonClosure
// Наступні функції:
// setName
// setSurname
// setFatherName
// setAge
// setFullName
// повинні приймати один параметр (newName, newSurname і т.п.), перевіряти його на коректність та змінювати значення змінних, оголошених всередині createPersonClosure. Перевірки на коректність:
// ім'я, прізвище, по батькові має бути рядком з великої літери
// Вік повинен бути числом від 0 до 100.
// Якщо перевірку на коректність не пройдено, функція не повинна змінювати відповідну змінну.
// Функція setFullName повинна розбивати рядок по пробілах і заносити частини рядка в surname, name та fatherName
// Усі функції set повинні повертати те значення, яке за підсумком потрапило до внутрішньої змінної. Тобто якщо нове значення некоректне, то функція повертає старе значення
// В об'єкті-результаті createPersonClosure повинні бути лише ці 10 функцій (гетерів та сеттерів). У коді функцій this не використовується

function createPersonClosure(name, surname) {
  let age;
  let fatherName;
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${getName()} ${getFatherName()} ${getSurname()}`;
  }
  function setName(newName) {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
      return name;
    }
  }
  function setSurname(newSurname) {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      surname = newSurname;
      return surname;
    }
  }
  function setFatherName(newFatherName) {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      fatherName = newFatherName;
      return fatherName;
    }
  }

  function setAge(newAge) {
    if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
      age = newAge;
      return age;
    }
    return undefined;
  }

  function setFullName(fullName) {
    const names = fullName.split(" ");
    if (names.length === 3) {
      const [newSurname, newName, newFatherName] = names;
      if (
        typeof newName === "string" &&
        newName[0] === newName[0].toUpperCase() &&
        typeof newSurname === "string" &&
        newSurname[0] === newSurname[0].toUpperCase() &&
        newFatherName[0] === newFatherName[0].toUpperCase()
      ) {
        name = newName;
        surname = newSurname;
        fatherName = newFatherName;
      }
    }
    return getFullName();
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}

const a1 = createPersonClosure("Вася", "Пупкін");
const b1 = createPersonClosure("Ганна", "Іванова");
console.log(a1.getName());
a1.setAge(15);
a1.setAge(150); //не працює

b1.setFullName("Петрова Ганна Миколаївна");
console.log(b1.getFatherName()); //Миколаївна

// createPersonClosureDestruct
// Зробіть набір параметрів функції попереднього завдання об'єктом, використовуйте деструктуризацію для вилучення параметрів.
// Вкажіть значення за замовчуванням

function createPersonClosureDestruct({
  name = "",
  surname = "",
  fatherName = "",
  age = undefined,
} = {}) {
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }
  function getFatherName() {
    return fatherName;
  }
  function getAge() {
    return age;
  }
  function getFullName() {
    return `${getName()} ${getFatherName()} ${getSurname()}`;
  }
  function setName(newName) {
    if (
      typeof newName === "string" &&
      newName[0] === newName[0].toUpperCase()
    ) {
      name = newName;
      return name;
    }
  }
  function setSurname(newSurname) {
    if (
      typeof newSurname === "string" &&
      newSurname[0] === newSurname[0].toUpperCase()
    ) {
      surname = newSurname;
      return surname;
    }
  }
  function setFatherName(newFatherName) {
    if (
      typeof newFatherName === "string" &&
      newFatherName[0] === newFatherName[0].toUpperCase()
    ) {
      fatherName = newFatherName;
      return fatherName;
    }
  }

  function setAge(newAge) {
    if (typeof newAge === "number" && newAge >= 0 && newAge <= 100) {
      age = newAge;
      return age;
    }
    return undefined;
  }

  function setFullName(fullName) {
    const names = fullName.split(" ");
    if (names.length === 3) {
      const [newSurname, newName, newFatherName] = names;
      if (
        typeof newName === "string" &&
        newName[0] === newName[0].toUpperCase() &&
        typeof newSurname === "string" &&
        newSurname[0] === newSurname[0].toUpperCase() &&
        newFatherName[0] === newFatherName[0].toUpperCase()
      ) {
        name = newName;
        surname = newSurname;
        fatherName = newFatherName;
      }
    }
    return getFullName();
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}
const a2 = createPersonClosureDestruct(createPerson("Вася Пупкін"));
const b2 = createPersonClosureDestruct({ name: "Миколай", age: 75 });

// isSorted
// Напишіть функцію isSorted, яка приймає набір параметрів будь-якого розміру, та повертає true, коли всі параметри - це числа, і кожeн з них більше за попередній параметр

function isSorted(...numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (Number.isNaN(numbers[i]) || numbers[i] < numbers[i - 1]) {
      return false;
    }
  }
  return true;
}

// Test isSorted
// Використовуючи циклічне введення в масив (завдання array fill), забезпечте введення даних для isSorted

let arr = [];
let input = "";
do {
  input = prompt("Введіть числа");
  if (input !== null) {
    arr.push(input);
  }
} while (input !== null);
const result = isSorted(...arr);
console.log(result);

// personForm
// Напишіть функцію, яка приймає два параметри: батьківський DOM-елемент та об'єкт-результат роботи createPersonClosure (або createPersonClosureDestruct, результати в обох цих функцій однакові) і малює форму, яка дозволяє редагувати дані про персону.
// На початку роботи personForm створює 5 полів введення (ім'я, прізвище, по батькові, вік, ПІБ) у батьківському DOM-елементі та встановлює туди значення, прочитані за допомогою getName , getSurname і т.д.
// Події oninput в будь-якому з полів введення потрібно запускати відповідний set..... Наприклад, при зміні поля введення імені повинен запускатися setName(якийсь инпут.value). Функції set... повертають значення, і його потрібно занести назад до input. Таким чином, у полях введення неможливо буде ввести некоректні значення (наприклад вік не зможе вийти за межі 0-100 років)

function personForm(parent, person) {
  const nameInput = document.createElement("input");
  const surnameInput = document.createElement("input");
  const fatherNameInput = document.createElement("input");
  const ageInput = document.createElement("input");
  const fullNameInput = document.createElement("input");

  nameInput.type = "text";
  nameInput.value = person.getName();
  surnameInput.type = "text";
  surnameInput.value = person.getSurname();
  fatherNameInput.type = "text";
  fatherNameInput.value = person.getFatherName();
  ageInput.type = "number";
  ageInput.value = person.getAge();
  fullNameInput.type = "text";
  fullNameInput.value = person.getFullName();

  parent.appendChild(nameInput);
  parent.appendChild(surnameInput);
  parent.appendChild(fatherNameInput);
  parent.appendChild(ageInput);
  parent.appendChild(fullNameInput);

  nameInput.oninput = () => {
    person.setName(nameInput.value);
    nameInput.value = person.getName();
    fullNameInput.value = person.getFullName();
  };

  surnameInput.oninput = () => {
    person.setSurname(surnameInput.value);
    surnameInput.value = person.getSurname();
    fullNameInput.value = person.getFullName();
  };

  fatherNameInput.oninput = () => {
    person.setFatherName(fatherNameInput.value);
    fatherNameInput.value = person.getFatherName();
    fullNameInput.value = person.getFullName();
  };

  ageInput.oninput = () => {
    const age = parseInt(ageInput.value);
    if (!isNaN(age)) {
      person.setAge(age);
      ageInput.value = person.getAge();
    }
  };

  fullNameInput.oninput = () => {
    person.setFullName(fullNameInput.value);
    fullNameInput.value = person.getFullName();
    nameInput.value = person.getName();
    surnameInput.value = person.getSurname();
    fatherNameInput.value = person.getFatherName();
  };
}

const b3 = createPersonClosure("Ганна", "Іванова");
b3.setAge(15);
b3.setFullName("Петрова Ганна Миколаївна");
const parentElement = document.getElementById("parent");
personForm(parentElement, b3);

// getSetForm
// Зробіть функцію, яка вирішує попереднє завдання універсально, тобто для будь-якого об'єкта, в якому є набір функцій get... та set.... Кода стане менше, гнучкості більше, адже в попередньому завданні багато копіпасти (x5)

let car;
{
  let brand = "BMW",
    model = "X5",
    volume = 2.4;
  car = {
    getBrand() {
      return brand;
    },
    setBrand(newBrand) {
      if (newBrand && typeof newBrand === "string") {
        brand = newBrand;
      }
      return brand;
    },

    getModel() {
      return model;
    },
    setModel(newModel) {
      if (newModel && typeof newModel === "string") {
        model = newModel;
      }
      return model;
    },

    getVolume() {
      return volume;
    },
    setVolume(newVolume) {
      newVolume = +newVolume;
      if (newVolume && newVolume > 0 && newVolume < 20) {
        volume = newVolume;
      }
      return volume;
    },

    getTax() {
      return volume * 100;
    },
  };
}

function getSetForm(parent, getSet) {
  const inputs = {};

  const updateInputs = () => {
    for (const keyName of Object.keys(inputs)) {
      const getter = "get" + keyName;
      if (getter in getSet) {
        inputs[keyName].value = getSet[getter]();
      }
    }
  };

  for (const getSetName in getSet) {
    const getOrSet = getSetName.slice(0, 3);
    const fieldName = getSetName.slice(3);
    const setKey = "set" + fieldName;
    const getKey = "get" + fieldName;
    const input = document.createElement("input");
    input.placeholder = fieldName;

    if (typeof getSet[getKey]() === "number") {
      input.type = "number";
    } else {
      input.type = "text";
    }

    parent.appendChild(input);
    inputs[fieldName] = input;
    input.oninput = () => {
      const value = input.value;
      if (getOrSet === "set") {
        getSet[setKey](value);
      } else {
        input.value = getSet[getKey]();
      }
    };
  }
  updateInputs();
}

getSetForm(document.body, car);
getSetForm(document.body, createPersonClosure("Анон", "Анонов"));
