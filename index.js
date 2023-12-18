// ❗ ЗАДАЧА #1

// Запиши условие в инструкции if так, чтобы функция работала правильно.

// ТЕСТЫ

// ✅ Объявлена функция checkAge(age).
// ✅ В выражении проверки возраста использован оператор >=
// ✅ Вызов checkAge(20) возвращает "You are an adult"
// ✅ Вызов checkAge(8) возвращает "You are a minor"
// ✅ Вызов checkAge(14) возвращает "You are a minor"
// ✅ Вызов checkAge(38) возвращает "You are an adult"
// ✅ В теле функции есть только одна инструкция if
// ✅ В теле функции нет инструкции else или else if


// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));



// ❗ ЗАДАЧА #2

// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// ТЕСТЫ

// ✅ Объявлена функция checkPassword(password)
// ✅ Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));



// ❗ ЗАДАЧА #3

// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// ТЕСТЫ

// ✅ Объявлена функция checkStorage(available, ordered)
// ✅ Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
// ✅ Вызов checkStorage(70, 0) возвращает "Your order is empty!"
// ✅ Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
// ✅ Вызов checkStorage(150, 0) возвращает "Your order is empty!"


// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (available < ordered) {
//     return "The order is accepted, our manager will contact you";
//   }
//     return "Your order is too large, not enough goods in stock!";
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));



// ❗ ЗАДАЧА #4

// Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".

// ТЕСТЫ

// ✅ Объявлена переменная fruits
// ✅ Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]


// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);



// ❗ ЗАДАЧА #5

// Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

// firstElement -   первый элемент массива
// secondElement    -   второй элемент массива
// lastElement  -    последний элемент массива

// ТЕСТЫ

// ✅ Объявлена переменная firstElement
// ✅ Значение переменной firstElement это строка "apple"
// ✅ Объявлена переменная secondElement
// ✅ Значение переменной secondElement это строка "plum"
// ✅ Объявлена переменная lastElement
// ✅ Значение переменной lastElement это строка "orange"


// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);



// ❗ ЗАДАЧА #6

// Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".

// ТЕСТЫ

// ✅ Объявлена переменная fruits
// ✅ Значение переменной fruits это массив ["apple", "peach", "pear", "banana"]


// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);



// ❗ ЗАДАЧА #7

// Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.

// ТЕСТЫ

// ✅ Объявлена переменная fruitsArrayLength
// ✅ Значение переменной fruitsArrayLength это число 4


// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);



// ❗ ЗАДАЧА #8

// Объяви две переменные:

// lastElementIndex    -   Индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement -   Значение последнего элемента массива

// ТЕСТЫ

// ✅ Объявлена переменная lastElementIndex
// ✅ Значение переменной lastElementIndex это число 3
// ✅ Объявлена переменная lastElement
// ✅ Значение переменной lastElement это строка "banana"


// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);



// ❗ ЗАДАЧА #9

// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// ТЕСТЫ

// ✅ Объявлена функция getExtremeElements(array)
// ✅ Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// ✅ Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// ✅ Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]


// function getExtremeElements(array) {
// return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));



// ❗ ЗАДАЧА #10

// Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

// ТЕСТЫ

// ✅ Объявлена функция splitMessage(message, delimiter)
// ✅ Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// ✅ Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// ✅ Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]


// function splitMessage(message, delimiter) {
//   let words;
// words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));



// ❗ ЗАДАЧА #11

// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// ТЕСТЫ

// ✅ Объявлена функция calculateEngravingPrice(message, pricePerWord)
// ✅ Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// ✅ Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// ✅ Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// ✅ Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80


// function calculateEngravingPrice(message, pricePerWord) {
// const words = message.split(" ");
//   const wordCount = words.length;
//   return wordCount * pricePerWord;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));



// ❗ ЗАДАЧА #12

// Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.

// ТЕСТЫ

// ✅ Объявлена функция makeStringFromArray(array, delimiter)
// ✅ Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
// ✅ Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "") возвращает "Mango"
// ✅ Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"


// function makeStringFromArray(array, delimiter) {
//   let string;
// string = array.join(delimiter)
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));



// ❗ ЗАДАЧА #13

// // Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.

// Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// ТЕСТЫ

// ✅ Объявлена функция slugify(title)
// ✅ Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
// ✅ Вызов slugify("English for developer") возвращает "english-for-developer"
// ✅ Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// ✅ Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"


// function slugify(title) {
//   let slug;
//   slug = title.toLowerCase().split(' ').join('-');
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));



// ❗ ЗАДАЧА #14

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// ТЕСТЫ

// ✅ Объявлена переменная fruits
// ✅ Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
// ✅ Объявлена переменная firstTwoEls
// ✅ Значение переменной firstTwoEls это массив ["apple", "plum"]
// ✅ Объявлена переменная nonExtremeEls
// ✅ Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
// ✅ Объявлена переменная lastThreeEls
// ✅ Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
// ✅ Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными аргументами


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);



// ❗ ЗАДАЧА #15

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// ТЕСТЫ

// ✅ Объявлена переменная oldClients
// ✅ Значение переменной oldClients это массив ["Mango", "Ajax", "Poly", "Kiwi"]
// ✅ Объявлена переменная newClients
// ✅ Значение переменной newClients это массив ["Peach", "Houston"]
// ✅ Объявлена переменная allClients
// ✅ Значение переменной allClients это массив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// ✅ Переменной allClients присвоен массив после применения метода concat с правильными аргументами


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);



// ❗ ЗАДАЧА #16

// // Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.

// ТЕСТЫ

// ✅ Объявлена функция makeArray(firstArray, secondArray, maxLength)
// ✅ Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
// ✅ Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) возвращает ["Mango", "Poly", "Houston", "Ajax"]
// ✅ Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// ✅ Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// ✅ Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// ✅ Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
// ✅ Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив


// function makeArray(firstArray, secondArray, maxLength) {
//   const combinedArray = firstArray.concat(secondArray);
//   if (combinedArray.length > maxLength) {
//     return combinedArray.slice(0, maxLength);
//   }
//   return combinedArray;
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));