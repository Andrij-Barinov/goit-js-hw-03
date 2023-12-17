// ❗ ЗАДАЧА #1

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.

// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".

// ТЕСТЫ

// ✅ Объявлена функция checkAge(age).
// ✅ В выражении проверки возраста использован оператор >=
// ✅ Вызов checkAge(20) возвращает "You are an adult"
// ✅ Вызов checkAge(8) возвращает "You are a minor"
// ✅ Вызов checkAge(14) возвращает "You are a minor"
// ✅ Вызов checkAge(38) возвращает "You are an adult"


// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));



// ❗ ЗАДАЧА #2

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе

// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".

// ТЕСТЫ

// ✅ Объявлена функция checkStorage(available, ordered).
// ✅ Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// ✅ Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// ✅ Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// ✅ Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// ✅ Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"


// function checkStorage(available, ordered) {
//   let message;
// if (available >= ordered) {
//   message = "Order is processed, our manager will contact you.";
// } else {
//   message = "Not enough goods in stock!";
// }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));



// ❗ ЗАДАЧА #3

// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

// ТЕСТЫ

// ✅ Значение переменной a равно 7
// ✅ Использован оператор +=
// ✅ Значение переменной b равно 6
// ✅ Использован оператор -=
// ✅ Значение переменной c равно 45
// ✅ Использован оператор *=
// ✅ Значение переменной d равно 2
// ✅ Использован оператор /=


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



// ❗ ЗАДАЧА #4

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента

// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

// ТЕСТЫ

// ✅ Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// ✅ Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// ✅ Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// ✅ Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// ✅ Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// ✅ Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
// const totalPrice = pricePerDroid*orderedQuantity;
//   if (totalPrice>customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`;
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(00, 10, 5000));



// ❗ ЗАДАЧА #5

// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

// ТЕСТЫ

// ✅ Объявлена функция checkPassword(password)
// ✅ Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword(null) возвращает "Canceled by user!"
// ✅ Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));



// ❗ ЗАДАЧА #6

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе

// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

// ТЕСТЫ

// ✅ Объявлена функция checkStorage(available, ordered)
// ✅ Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
// ✅ Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
// ✅ Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
// ✅ Вызов checkStorage(150, 0) возвращает "There are no products in the order!"


// function checkStorage(available, ordered) {
//   let message;
// if (ordered === 0) {
//   message = "There are no products in the order!";
// } else if (ordered > available) {
//   message = "Your order is too large, there are not enough items in stock!";
// } else {
//   message = "The order is accepted, our manager will contact you";
// }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));



// ❗ ЗАДАЧА #7

//Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка

// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.То есть число должно быть больше либо равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.

// ТЕСТЫ

// ✅ Объявлена функция isNumberInRange(start, end, number)
// ✅ В выражении проверки использован оператор &&
// ✅ Вызов isNumberInRange(10, 30, 17) возвращает true
// ✅ Вызов isNumberInRange(10, 30, 5) возвращает false
// ✅ Вызов isNumberInRange(20, 50, 24) возвращает true
// ✅ Вызов isNumberInRange(20, 50, 76) возвращает false


// function isNumberInRange(start, end, number) {
//   const isInRange = (number >= start && number <= end);
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));



// ❗ ЗАДАЧА #8

// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// ТЕСТЫ

// ✅ Объявлена функция checkIfCanAccessContent(subType)
// ✅ В выражении проверки использован оператор ||
// ✅ Вызов checkIfCanAccessContent("pro") возвращает true
// ✅ Вызов checkIfCanAccessContent("starter") возвращает false
// ✅ Вызов checkIfCanAccessContent("vip") возвращает true
// ✅ Вызов checkIfCanAccessContent("free") возвращает false


// function checkIfCanAccessContent(subType) {
//   const canAccessContent = (subType === "pro" || subType === "vip");
//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));



// ❗ ЗАДАЧА #9

// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка

// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор!.

// ТЕСТЫ

// ✅ Объявлена функция isNumberNotInRange(start, end, number)
// ✅ В выражении использован оператор !
// ✅ Вызов isNumberNotInRange(10, 30, 17) возвращает false
// ✅ Вызов isNumberNotInRange(10, 30, 5) возвращает true
// ✅ Вызов isNumberNotInRange(20, 50, 24) возвращает false
// ✅ Вызов isNumberNotInRange(20, 50, 76) возвращает true


// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));



// ❗ ЗАДАЧА #10

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// ТЕСТЫ

// ✅ Объявлена функция getDiscount(totalSpent)
// ✅ Вызов getDiscount(137000) возвращает 0.1
// ✅ Вызов getDiscount(46900) возвращает 0.05
// ✅ Вызов getDiscount(8250) возвращает 0.02
// ✅ Вызов getDiscount(1300) возвращает 0
// ✅ Вызов getDiscount(5000) возвращает 0.02
// ✅ Вызов getDiscount(20000) возвращает 0.05
// ✅ Вызов getDiscount(50000) возвращает 0.1


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
// if (totalSpent >= 50000) {
// discount = GOLD_DISCOUNT;
// } else if (totalSpent >= 20000) {
//   discount = SILVER_DISCOUNT;
// } else if (totalSpent >= 5000) {
//   discount = BRONZE_DISCOUNT;
// } else
//   discount = BASE_DISCOUNT;
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));



// ❗ ЗАДАЧА #11

// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// ТЕСТЫ

// ✅ Объявлена функция checkStorage(available, ordered).
// ✅ Использован тернарный оператор.
// ✅ Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// ✅ Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// ✅ Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"


// function checkStorage(available, ordered) {
//   let message;
// message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));



// ❗ ЗАДАЧА #12

// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".

// ТЕСТЫ

// ✅ Объявлена функция checkPassword(password)
// ✅ Использован тернарный оператор
// ✅ Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
// ✅ Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));



// ❗ ЗАДАЧА #13

// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.

// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }

// После рефакторинга инструкция if..else была заменена на switch.Дополни код инструкции switch, чтобы функция работала правильно.

// ТЕСТЫ

// ✅ Объявлена функция getSubscriptionPrice(type)
// ✅ Вызов getSubscriptionPrice("professional") возвращает число 20
// ✅ Вызов getSubscriptionPrice("organization") возвращает число 50
// ✅ Вызов getSubscriptionPrice("starter") возвращает число 0


// function getSubscriptionPrice(type) {
//   let price;
//  switch (type) {
//     case "starter":
//       price = 0;
//       break;
//     case "professional":
//       price = 20;
//       break;
//     case "organization":
//       price = 50;
//       break;
//   }
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));



// ❗ ЗАДАЧА #14

// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удовлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".

// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// ТЕСТЫ

// ✅ Объявлена функция checkPassword(password)
// ✅ Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword(null) возвращает "Canceled by user!"
// ✅ Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// ✅ Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"


// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
// switch (password) {
//   case null:
//     message = "Canceled by user!";
//     break;
//   case ADMIN_PASSWORD:
//     message = "Welcome!";
//     break;
//   default:
//     message = "Access denied, wrong password!";
// }
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));



// ❗ ЗАДАЧА #15

// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов

// Из списка видно, что доставка есть не везде.Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"

// ТЕСТЫ

// ✅ Объявлена функция getShippingCost(country)
// ✅ В теле функции использована инструкция switch
// ✅ Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
// ✅ Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
// ✅ Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
// ✅ Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
// ✅ Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
// ✅ Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"


// function getShippingCost(country) {
//   let message;
// switch (country) {
//   case "China":
//     message = "Shipping to China will cost 100 credits";
//     break;
//   case "Chile":
//     message = "Shipping to Chile will cost 250 credits";
//     break;
//   case "Australia":
//     message = "Shipping to Australia will cost 170 credits";
//     break;
//   case "Jamaica":
//     message = "Shipping to Jamaica will cost 120 credits";
//     break;
//   default:
//     message = "Sorry, there is no delivery to your country";
// }
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));



// ❗ ЗАДАЧА #16

// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// ТЕСТЫ

// ✅ Объявлена функция getNameLength(name)
// ✅ Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// ✅ Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// ✅ Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// ✅ Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"


// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));



// ❗ ЗАДАЧА #17

// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.

// ТЕСТЫ

// ✅ Объявлена переменная courseTopic
// ✅ Значение переменной courseTopic это строка "JavaScript essentials"
// ✅ Объявлена переменная courseTopicLength
// ✅ Значение переменной courseTopicLength это число 21
// ✅ Объявлена переменная firstElement
// ✅ Значение переменной firstElement это строка "J"
// ✅ Объявлена переменная lastElement
// ✅ Значение переменной lastElement это строка "s"


// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);



// ❗ ЗАДАЧА #18

// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки

// Присвой переменной substring выражение создания подстроки длинной length символов(от начала) из строки string.

// ТЕСТЫ

// ✅ Объявлена функция getSubstring(string, length)
// ✅ Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
// ✅ Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
// ✅ Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
// ✅ Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
// ✅ Вызов функции getSubstring("Hello world", 0) возвращает ""


// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));



// ❗ ЗАДАЧА #19

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// ТЕСТЫ

// ✅ Объявлена функция formatMessage(message, maxLength)
// ✅ Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
// ✅ Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
// ✅ Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
// ✅ Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
// ✅ Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
// ✅ Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"


// function formatMessage(message, maxLength) {
//   let result;
//   result = message.length;
//   if (result <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));



// ❗ ЗАДАЧА #20

// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// ТЕСТЫ

// ✅ Объявлена функция normalizeInput(input)
// ✅ Вызов функции normalizeInput("Hello world") возвращает "hello world"
// ✅ Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
// ✅ Вызов функции normalizeInput("Big SALE") возвращает "big sale"


// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();;
//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));



// ❗ ЗАДАЧА #21

// Функция checkForName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.

// Присвой переменной result выражение проверки вхождения имени(параметр name), в полное имя(параметр fullname).Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// ТЕСТЫ

// ✅ Объявлена функция checkForName(fullname, name).
// ✅ Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
// ✅ Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
// ✅ Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
// ✅ Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
// ✅ Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
// ✅ Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
// ✅ Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false


// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));



// ❗ ЗАДАЧА #22

// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// ТЕСТЫ

// ✅ Объявлена функция checkForSpam(message).
// ✅ Вызов функции checkForSpam("Latest technology news") возвращает false
// ✅ Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
// ✅ Вызов функции checkForSpam("Get best sale offers now!") возвращает true
// ✅ Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
// ✅ Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
// ✅ Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
// ✅ Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true


// function checkForSpam(message) {
//   let result;
// message = message.toLowerCase();
//   result = message.includes("spam") || message.includes("sale");
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));