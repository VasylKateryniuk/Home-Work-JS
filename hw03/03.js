//  String: greeting

{
  let userName = prompt("Введіть своє ім'я");
  alert(" Привіт! " + userName);
}

// String: gopni4ek

{
  let user = prompt("Введіть рядок:");
  let str = user.split(",").join(", блін,");
  alert(str);
}

// String: capitalize
{
  let str = "cANBerRa";
  let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  console.log(result);
}

//String: word count
{
  let str = prompt("Напишіть щось");
  let array = str.split(" ");
  alert(array.length);
}

//String: credentials

{
  let firstName = prompt("Введіть своє ім'я:");
  let lastName = prompt("Введіть своє прізвище:");
  let middleName = prompt("Введіть своє по-батькові:");
  let str1 =
    firstName.slice(0, 1).toUpperCase() +
    firstName.slice(1).toLowerCase().trim();
  let str2 =
    lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase().trim();
  let str3 =
    middleName.slice(0, 1).toUpperCase() +
    middleName.slice(1).toLowerCase().trim();

  let fullName = str1 + " " + str2 + " " + str3;
  alert(fullName);
}

// String: beer

{
  let str = "Було жарко. Василь пив пиво вприкуску з креветками";
  let index = str.indexOf("пиво");
  let startStr = str.slice(0, index);
  let endStr = str.slice(index + 4);
  let result = startStr + " чай " + endStr;
  console.log(result);
}

//String: no tag
{
  let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
  let tagStart = str.indexOf("<");
  let tagEnd = str.indexOf(">");
  let result = str.slice(0, tagStart) + str.slice(tagEnd + 1);
  console.log(result);
}

//String: big tag
{
  let str = "якийсь текст у якому є один тег <br /> і всяке інше";
  let tagStart = str.indexOf("<");
  let tagEnd = str.indexOf(">");
  let tag = str.slice(tagStart, tagEnd + 1);
  let result =
    str.slice(0, tagStart) + tag.toUpperCase() + str.slice(tagEnd + 1);
  console.log(result);
}

//String: new line
{
  let str = prompt("Введіть рядок");
  let array = str.split("\\n").join("\n");
  alert(array);
}
