//Додаткове завдання
//Зліпити всі завдання в один текст, таким чином, щоб спочатку відбувалося введення назви завдання, а потім за допомогою if запускався код конкретного завдання
let searchTask = prompt("Введіть номер завдання, від 1 до 14");

завдання: 1;
//Number: odd
//За допомогою prompt дізнайтесь число, введене користувачем. За допомогою if перевірте, чи число коректно перетворено з рядка.
// У разі помилки виведіть повідомлення Виведіть парне число чи ні, використовуючи if.
if (searchTask === "1") {
  let userInput = prompt("Введіть число");
  let number = parseInt(userInput);
  if (isNaN(number)) {
    alert("введено неправильне число");
  } else {
    if (number % 2 === 0) {
      alert("Введене число є парним!");
    } else {
      alert("Введене число є непарним!");
    }
  }
}

завдання: 2;
//String: lexics
//Запитайте у користувача текст і перевірте його на наявність некоректного слова або кількох некоректних слів.
// Використовуйте метод indexOf (або includes) рядки:

if (searchTask === "2") {
  let text = prompt("Введіть текст для перевірки");
  if (
    text.includes("гімнюк") ||
    text.includes("ідіот") ||
    text.includes("дурак") ||
    text.includes("сцикло")
  ) {
    alert("У тексті є погані слова");
  } else {
    alert("Текст хороший, без поганих слів");
  }
}

завдання: 3;
//Boolean
//Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" за допомогою confirm, і зберігає відповіді в змінних.
if (searchTask === "3") {
  let answer = confirm("Ти вже вивчив JS?");

  //Boolean: if
  //Розширте попереднє завдання умовами за отриманими змінними умовами (if-else). Наприклад, якщо ви питаєте стать користувача з допомогою confirm,
  // то за умовою зробіть alert("Ви жінка") та alert("Ви чоловік")

  if (answer) {
    alert("Ваша відовідь: Так, знаю все");
  } else {
    alert("Ваша відповідь: Ні, але я стараюсь");
  }
}

завдання: 4;
//Comparison: sizes
//Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір.
// Використовуйте prompt, умови порівняння та alert.

if (searchTask === "4") {
  let ukSizes = parseInt(
    prompt("Введіть розмір української системи від 42 до 54")
  );
  if (ukSizes === 42) {
    alert("По Американській системі буде розмір 8");
  }
  if (ukSizes === 44) {
    alert("По Американській системі буде розмір 10");
  }
  if (ukSizes === 46) {
    alert("По Американській системі буде розмір 12");
  }
  if (ukSizes === 48) {
    alert("По Американській системі буде розмір 14");
  }
  if (ukSizes === 50) {
    alert("По Американській системі буде розмір 16");
  }
  if (ukSizes === 52) {
    alert("По Американській системі буде розмір 18");
  }
  if (ukSizes === 54) {
    alert("По Американській системі буде розмір 20");
  } else {
    ukSizes === "" || isNaN(ukSizes);
    alert("Помилка, Спробуйте ще раз");
  }
}

завдання: 5;
//Ternary
//Запитайте у користувача стать (confirm). Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". Використовуйте тернарний оператор.
if (searchTask === "5") {
  let sex = confirm("Ящо ви чоловік нажимай ОК. Якщо жінка жми - Отмена");
  alert((sex && "Ви чоловік") || "Ви жінка");
}

завдання: 6;
//Training
//Перегляньте вирази нижче і спробуйте обчислити їхній результат. Перевірте себе, використовуючи Console
if (searchTask === "6") {
  // bool type cast
  !!2; // true
  !!0; // false
  !!1; // true
  2 || 1; // 2
  2 || 0; // 2
  2 && 1; // 1
  1 && 2; // 2
  0 && 2; // 0
  // or and and difference
  0 || 1 || 2; // 1
  0 && 1 && 2; // 0
  2 || 1 || 0; // 2
  2 && 1 && 0; // 0
  confirm("left") || confirm("right"); // якщо користувач нажме ОК хотя би у одному випадку буде - true, якщо у обох випадках отмена - false
  confirm("left") && confirm("right"); // тут навпаки, якщо у обох випадках ОК - true, або false якщо у одному з них буде отмена
  null || 2; // 2
  undefined && 1; // undefined
  alert("Hello") && confirm("Are you sexy?"); // undefined
  alert("Hello") || confirm("Are you drunk?"); // якщо у сonfirm("Are you drunk?") користувач нажме ОК то буде- true, в інших випадках false
  //brackets and complex expressions
  (undefined || 2) && (3 || 0); // 3
  (2 && 1) || (null && 0); // 1
  2 > 1 && "greater"; // greater
  2 < 1 && null; // false
  null && 2 < 1; // null
  // ternary operator
  1 ? "one" : "not one"; // one
  0 ? "zero" : "not zero"; // not zero
  "0" ? '"zero"' : "not `zero`"; // zero
  parseInt("0") ? "true" : "false"; // false
  (("" || 2) && (3 || "3.5")) || (4 && 5); // 3
  -1 + 1 && "zero"; // 0
  "-1" + 1 && "oups"; // oups
  typeof null === "object" ? "null is object" : "null is null"; //null is object
  // ternary && ||
  (Math.random() < 0.5 && "less") || "more"; // якщо випадкове число буде менше 0.5 то поверне -less, якщо більше то - more
  ((a = Math.random()) < 0.5 && "less: " + a) || "more: " + a; // якщо випадкове число буде більше 0.5 то поверне -more, якщо менше то - less
  //in for array
  [2, 3, 5, 7, 11].indexOf(7) > -1 ? "prime" : "not found"; // prime
}

завдання: 7;
//  Prompt: or
// Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert)
//  якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок
// або null, що інтерпретується як false)

if (searchTask === "7") {
  let age = prompt("Скільки вам років?");
  if (age === null || age === "") {
    alert("Error!!! Ваш вік не введено");
  }
}

завдання: 8;
// Confirm: or this days
//За допомогою цього ж трюку (використання АБО для запуску альтернативи)
//зробіть примхливого робота, який у confirm запитує "шопінг?", а у разі відмови - виводити alert "ти - бяка".
if (searchTask === "8") {
  let answerShopping = confirm("Шопінг?") || alert("Ти бяка");
}
завдання: 9;
//Confirm: if this days
//Зробіть те саме за допомогою if
if (searchTask === "9") {
  let answerShopping1 = confirm("Шопінг?");
  if (answerShopping1 == false) {
    alert("Ти бяка");
  }
}

завдання: 10;
//Default: or
//Попросіть користувача ввести ПІБ в три різні змінні. Використовуючи АБО || додайте рядки за промовчанням,
// які будуть зберігатися у внутрішніх змінних якщо користувач ввів порожній рядок або натиснув "Скасувати". Наприклад, якщо ви на кроці введення прізвища натиснете Escape, прізвище буде "Іванов"

if (searchTask === "10") {
  surName = prompt("Введіть своє прізвище:") || "Іванов";
  Name = prompt("Введіть своє ім'я:") || "Іван";
  secondName = prompt("Введіть своє по-батькові:") || "Іванович";
}

завдання: 11;
//Default: if
//Зробіть те саме за допомогою if та else

if (searchTask === "11") {
  surName = prompt("Введіть своє прізвище:");
  if (surName === null || surName === "") {
    surName = "Іванов";
  }
  Name = prompt("Введіть своє ім'я:");
  if (Name === null || Name === "") {
    Name = "Іванов";
  }
  secondName = prompt("Введіть своє по-батькові:");
  if (secondName === null || secondName === "") {
    secondName = "Іванович";
  }
}

завдання: 12;
//Login and password
//Напишіть код, який запитує логін, перевіряє його на вірність, якщо логін вірний, просить ввести пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити alert з текстом помилки.
//У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. Використовуйте вкладені if та else.
if (searchTask === "12") {
  let login = prompt("Введіть свій логін");
  if (login === "admin") {
    let password = prompt("Введіть свій пароль");

    if (password === "qwerty") {
      alert("Вітаю все вірно!");
    } else {
      password = false;
      alert("пароль невірний!");
    }
  } else {
    login = false;
    alert("логін невірний!");
  }
}

завдання: 13;
//Currency exchange
//Попросіть користувача ввести валюту (наприклад, usd, eur, інші валюти додати до смаку) за допомогою prompt.
//Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
//За допомогою декількох if та тернарного оператора всередині кожного з if задайте змінну rate, визначальну курс конкретної валюти на купівлю чи продаж. Зверніть увагу на місце оголошення змінної rate - вона має бути доступна в коді після всіх цих if.
//Попросіть користувача ввести суму на обмін
//Порахуйте та виведіть результат шляхом множення або поділу на rate
//Дайте можливість користувачеві вводити назви валют у будь-якому регістрі (UsD, eUR). Для цього в if використовуйте toUpperCase (або toLowerCase)

if (searchTask === "13") {
  let currency = prompt("Введіть валюту: наприклад usd, eur");
  let buying = confirm(
    "Якщо ви хочете купити валюту нажміть ОК. Якщо продати-Отмена"
  );
  let rate;
  if (currency.toUpperCase() === "USD") {
    rate = buying ? 37.66 : 37.77;
  } else if (currency.toUpperCase() === "EUR") {
    rate = buying ? 40.81 : 40.98;
  }
  let sum = parseFloat(
    prompt(
      "Введіть сумму на яку ви хочите купити, або скільки хочите продати валюти:"
    )
  );
  let result = buying ? sum / rate : sum * rate;
  alert("Ви отримаєте " + result.toFixed(2) + " валюти ");
}

завдання: 14;
//Scissors
//Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt,
//програма генерує свій варіант через Math.random() і виводить через alert. Наступний alert виводить ім'я переможця чи "нічия"
if (searchTask === "14") {
  let tools = ["камінь", "ножиці", "папір"];
  let userChoice = prompt("Оберіть: камінь, ножиці, папір");
  let computerChoice = tools[Math.floor(Math.random() * tools.length)];
  alert(" Вибір компютера: " + computerChoice);
  if (userChoice === computerChoice) {
    alert("Нічия!");
  } else if (
    (userChoice === "папір" && computerChoice === "камінь") ||
    (userChoice === "камінь" && computerChoice === "ножиці") ||
    (userChoice === "ножиці" && computerChoice === "папір")
  ) {
    alert("Ви перемогли!");
  } else {
    alert("Комп'ютер переміг!");
  }
}
