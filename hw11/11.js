// makeProfileTimer
// Напишіть функцію makeProfileTimer, яка служить для виміру часу виконання іншого коду і працює наступним чином:
// Використовуйте performance.now() для того, щоб запам'ятати момент часу. Ця функцiя повертає час у мiлiсекундах вiд моменту завантаження сторiнки.

function makeProfileTimer() {
  const start = performance.now();

  return function () {
    const end = performance.now();
    const duration = end - start;
    return duration;
  };
}

const timer = makeProfileTimer();
alert("Вимiрюємо час роботи цього alert");
alert(timer());
const timer2 = makeProfileTimer();
prompt("");
alert(`Час роботи двух alert та одного prompt ${timer()}`);
alert(`Час роботи prompt та попереднього alert ${timer2()}`);

// makeSaver
// Напишіть функцію makeSaver, яка:
// створює функцію-сховище результату переданої як параметр функції (Math.random
//  у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
//  saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
//  saver надалі просто зберігає результат функції, і більше НЕ викликає передану
//  в makeSaver функцію;
// Таким чином makeSaver вирішує два завдання:
// Назавжди зберігає результат функції. Це актуально, наприклад, для Math.random.
// Діє ліниво, тобто викликає Math.random тільки тоді, коли результат дійсно потрібний. Якщо ж з якихось причин значення не знадобиться, то Math.random навіть не буде викликано

function makeSaver(fn) {
  let value;
  let called = false;

  return function () {
    if (!called) {
      value = fn();
      called = true;
    }
    return value;
  };
}

let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();
alert(`Random: ${value1} === ${value2}`);

let saver2 = makeSaver(() => {
  console.log("saved function called");
  return [null, undefined, false, "", 0, Math.random()][
    Math.floor(Math.random() * 6)
  ];
});
let value3 = saver2();
let value4 = saver2();
value3 === value4;

let namePrompt = prompt.bind(window, "Як тебе звуть?");
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);

// myBind
// Вивчіть вбудовану функцію bind, і зробіть свою версію, яка дозволить визначити "значення за замовчуванням" не тільки для перших параметрів, але для будь-яких інших, наприклад для ступеня в Math.pow:
function myBind(func, context, params) {
  return function (...args) {
    let arr = [];
    for (let i = 0; i < params.length; i++) {
      if (params[i] === undefined) {
        arr.push(args[0]);
        args.shift();
      } else {
        arr.push(params[i]);
      }
    }
    return func.apply(context, arr);
  };
}

let pow5 = myBind(Math.pow, Math, [, 5]);
let cube = myBind(Math.pow, Math, [, 3]);
console.log(pow5(2)); // => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
console.log(pow5(4)); // => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
console.log(cube(3)); // => 27
let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
console.log(chessMin(-1, -5, 3, 15)); // викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5
let zeroPrompt = myBind(prompt, window, [undefined, "0"]); // аналогічно, тільки тепер задається "0" як текст за замовчанням в prompt,
// а текст запрошення користувача задається під час виклику zeroPrompt
let someNumber = zeroPrompt("Введіть число"); // викликає prompt("Введіть число","0")
const bindedJoiner = myBind((...params) => params.join(""), null, [
  ,
  "b",
  ,
  ,
  "e",
  "f",
]); //('a','c','d') === 'abcdef'
bindedJoiner("a", "c", "d") === "abcdef";
bindedJoiner("1", "2", "3") === "1b23ef";

// checkResult
// приймає функцію для запуску (оригінал)
// приймає функцію для перевірки результату (валідатор)
// повертає обгортку, яка запускає оригінал доти, доки оригінал не поверне значення, що задовольняє функції-валідатору. У валідатор передається результат оригінальної функції. Якщо валідатор повертає true, то обгортка повертає результат. оригінальної функції. Якщо валідатор повертає щось інше, то оригінал запускається ще, доти, доки валідатор не поверне true.
function checkResult(original, validator) {
  function wrapper(...params) {
    const result = original.call(this, ...params);
    if (validator(result)) {
      return result;
    } else {
      return wrapper.call(this, ...params);
    }
  }

  return wrapper;
}

//numberPrompt - це функція, яка буде запускати prompt до тих пір, поки користувач не введе число
const numberPrompt = checkResult(prompt, (x) => !isNaN(+x));
let number = +numberPrompt("Введіть число", "0"); //параметри передаються наскрізь до оригіналу. Не забудьте передати це, використовуючи call або apply

//gamePrompt - це функція, яка буде запускати prompt доти, доки користувач не введе одне зі слів 'камінь', 'ножиці', 'папір'
const gamePrompt = checkResult(prompt, (x) =>
  ["камень", "ножиці", "папір"].includes(x.toLowerCase())
);
const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'");

// Використовуючи checkResult зробіть функції, які:
// RandomHigh. Повертає будь-яке число в діапазоні від 0.5 до 1 завдяки Math.random
// AlwaysSayYes. Дістає користувача вікном confirm поки він не погодиться (не натисне OK)
// respectMe. Дістає користувача запуском цієї функції, поки якесь із полів не введено

const RandomHigh = checkResult(
  () => Math.random(),
  (x) => x >= 0.5 && x <= 1
);
console.log(RandomHigh());
const AlwaysSayYes = checkResult(confirm, (x) => x === true);
console.log(AlwaysSayYes("тисни ОК якщо хочеш закінчити"));

const capitalize = (str) => {
  if (!str) {
    return "";
  }
  let result;
  result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
};

const credentials = () => {
  let name = prompt("Введіть своє ім'я:");
  let surname = prompt("Введіть своє прізвище:");
  let fatherName = prompt("Введіть своє по-батькові:");
  name = capitalize(name.trim());
  surname = capitalize(surname.trim());
  fatherName = capitalize(fatherName.trim());
  let fullName = name + " " + surname + " " + fatherName;
  return {
    name: name,
    surname: surname,
    fatherName: fatherName,
    fullName: fullName,
  };
};
credentials();

const respectMe = checkResult(
  credentials,
  (credentials) =>
    credentials.name !== "" &&
    credentials.surname !== "" &&
    credentials.fatherName !== ""
);

console.log(respectMe());
