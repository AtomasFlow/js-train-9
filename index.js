// Завдання: 1

/**
 * Функція `findElementGreaterThan` знаходить перший елемент масиву, який є більшим за задане число.
 *  arr - вхідний масив, в якому відбувається пошук.
 *  num - число, яке використовується для порівняння з елементами масиву.
 * Повертає - foundElement - перший елемент масиву, який є більшим за задане число
 */
function findElementGreaterThan(arr, num) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо undefined
  // повертаємо undefined
  // Використовуємо метод find для пошуку першого елементу, який є більшим за задане число num.
  // Перевіряємо чи є елемент який задовільняє умову
  //Якщо так повертаємо елемент
  // Якщо ні повертаємо рядок Числа яке задовільняе умову не знайдено
	if (Array.isArray(arr)) {
		return arr.find((elem) => elem > num)
	} else {
		return undefined;
	}
}

console.log("Завдання: 1  ==============================");
console.log(findElementGreaterThan([1, 2, 3, 4, 5], 3)); // Виведе 4

// Завдання: 2

/**
 * Функція `findIndexByProperty` знаходить індекс першого об'єкта в масиві, властивість 'name' якого співпадає з заданим іменем.
 *  arr - вхідний масив об'єктів, в якому відбувається пошук.
 *  name - ім'я, яке використовується для порівняння з властивістю 'name' об'єктів масиву.
 * Повертає - foundIndex - індекс першого об'єкта, властивість 'name' якого співпадає з заданим іменем.
 * Якщо об'єкт не знайдено, повертає -1.
 */
function findIndexByProperty(arr, name) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо -1
  // Використовуємо метод findIndex для пошуку індексу об'єкта, властивість 'name' якого співпадає з заданим іменем.
  // Повертаємо знайдений індекс або -1, якщо об'єкт не знайдено.
	if (Array.isArray(arr)) {
		return arr.findIndex((elem) => elem.name === name)
	} else {
		return -1;
	}
}

console.log("Завдання: 2  ==============================");
console.log(
  findIndexByProperty(
    [
      { name: "Ivan", age: 23 },
      { name: "Petro", age: 30 },
    ],
    "Petro"
  )
); // Виведе 1

// Завдання: 3 . ЗВЕРНІТЬ УВАГУ, метод findLast працює на версії ноди вище 18.0.0 якщо ваша версія нижче, завдання можно не виконувати
// щоб перевірити версію ноди виконайте в терміналі команду node -v

/**
 * Функція `findLastEvenNumber` знаходить останнє парне число в масиві.
 *  arr - вхідний масив чисел, в якому відбувається пошук.
 * Повертає - lastEvenNumber - останнє парне число в масиві.
 * Якщо таке число не знайдено, повертає 'Парних чисел не знайдено'.
 */
function findLastEvenNumber(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою метода findLast знаходимо останнє парне число в масиві.
  // Повертаємо знайдене число або 'Парних чисел не знайдено', якщо таке число не знайдено.
	if (Array.isArray(arr)) {
		return arr.findLast((elem) => elem % 2 === 0)
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 3 ==============================");
console.log(findLastEvenNumber([1, 2, 3, 4, 5])); // Виведе 4

// Завдання: 4

/**
 * Функція `getSubArrayAndConvertToString` отримує підмасив від заданого індексу до кінця масиву і конвертує його в рядок.
 * Використовується методи `slice()` і `join()` для реалізації.
 *  arr - вхідний масив.
 *  startIdx - індекс з якого починається підмасив.
 * Повертає - subArrayString - рядок, отриманий в результаті конвертації підмасиву.
 */
function getSubArrayAndConvertToString(arr, startIdx) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу slice() отримуємо підмасив від заданого індексу до кінця масиву.
  // За допомогою методу join() конвертуємо підмасив в рядок.
  // Повертаємо рядок.
	if (Array.isArray(arr)) {
		let subArrayString = [...arr].slice(startIdx);
		return subArrayString.join(' ');
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 4 ==============================");
console.log(
  getSubArrayAndConvertToString(
    ["Я", "люблю", "JavaScript!", "Він", "дуже", "потужний"],
    3
  )
);
// Виведе "Він дуже потужний"

// Завдання: 5

/**
 * Функція `getArrayKeys` отримує ключі масиву.
 * Використовується метод `keys()` для реалізації.
 *  arr - вхідний масив.
 * Повертає - arrayKeys - масив ключів вхідного масиву.
 */
function getArrayKeys(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу keys() отримуємо об'єкт ітератора, який містить ключі масиву.
  // Конвертуємо ітератор в масив за допомогою методу from.
  // Повертаємо масив ключів.
	if (Array.isArray(arr)) {
		const iter = arr.keys();
		return Array.from(iter);
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 5  ==============================");
console.log(getArrayKeys(["яблуко", "банан", "апельсин"])); // Виведе [0, 1, 2]

// Завдання: 6

/**
 * Функція `getPositiveArrayValues` отримує лише додатні значення з масиву.
 * Використовується методи `values()` і `filter()` для реалізації.
 *  arr - вхідний масив.
 * Повертає - positiveArrayValues - масив додатніх значень вхідного масиву.
 */
function getPositiveArrayValues(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу values() отримуємо об'єкт ітератора, який містить значення масиву.
  // Конвертуємо ітератор в масив.
  // За допомогою методу filter() отримуємо масив лише з додатніми значеннями.
  // Повертаємо масив додатніх значень.
	if (Array.isArray(arr)) {
		const iter = arr.values();
		const iterArrey = Array.from(iter)
		return iterArrey.filter((elem) => elem > 0)
		
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 6  ==============================");
console.log(getPositiveArrayValues([-2, -1, 0, 1, 2])); // Виведе [1, 2]

// Завдання: 7

/**
 * Функція `removeAndDouble` видаляє елементи з масиву починаючи з заданого індексу і подвоює залишені елементи.
 * Використовується методи `splice()` і `map()` для реалізації.
 *  arr - вхідний масив.
 *  startIdx - індекс з якого починається видалення елементів.
 * Повертає - doubledArray - масив подвоєних елементів після видалення.
 */
function removeAndDouble(arr, startIdx) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу splice() видаляємо елементи масиву починаючи з заданого індексу.
  // За допомогою методу map() подвоюємо кожен елемент масиву.
  // Повертаємо масив подвоєних елементів.
	if (Array.isArray(arr)) {
		arr.splice(startIdx);
		const doubledArray = arr.map((elem) => elem * 2);
		return doubledArray;
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 7 ==============================");
console.log(removeAndDouble([1, 2, 3, 4, 5], 2)); // Виведе [ 2, 4 ]

// Завдання: 8

/**
 * Функція `sumAndPrint` обчислює суму елементів масиву і виводить кожен елемент в консоль.
 * Використовується методи `reduce()` і `forEach()` для реалізації.
 *  arr - вхідний масив.
 * Повертає - sum - сума елементів масиву.
 */
function sumAndPrint(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу reduce() обчислюємо суму елементів масиву.
  // За допомогою методу forEach() виводимо кожен елемент масиву в консоль.
  // Повертаємо суму елементів масиву.
	if (Array.isArray(arr)) {
		const result = arr.reduce((elem, values) => elem + values, 0);
		arr.forEach(element => console.log(element));
		return result;
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 8  ==============================");
console.log(sumAndPrint([1, 2, 3, 4, 5])); // Виведе
// 1
// 2
// 3
// 4
// 5
// 15

// Завдання: 9

/**
 * Функція `flattenSquareAndFilter` вирівнює масив, підносить кожен елемент до квадрату і фільтрує по заданому порогу.
 * Використовується методи `flat()`, `map()`, і `filter()` для реалізації.
 *  arr - вхідний масив.
 *  threshold - порогове значення для фільтрації.
 * Повертає - filteredSquaredArray - вирівняний масив, елементи якого підняті до квадрату і профільтровані.
 */
function flattenSquareAndFilter(arr, threshold) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу flat() вирівнюємо масив.
  // За допомогою методу map() підносимо кожен елемент масиву до квадрату.
  // За допомогою методу filter() фільтруємо елементи, які більше за порогове значення.
  // Повертаємо вирівняний масив, елементи якого підняті до квадрату і профільтровані.
	if (Array.isArray(arr)) {
		const arrFlat = arr.flat();
		const squarArray = arrFlat.map((elem) => elem **2)
		return squarArray.filter((elem) => elem > threshold)
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 9 ==============================");
console.log(
  flattenSquareAndFilter(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    10
  )
); // Виведе [16, 25, 36]

// Завдання: 10

/**
 * Функція `getLastElementsSumAndPrint` обчислює суму останніх n елементів масиву і виводить їх в консоль.
 * Використовується методи `reduceRight()`, `slice()` і `forEach()` для реалізації.
 *  arr - вхідний масив.
 *  n - кількість останніх елементів, які необхідно взяти до уваги.
 * Повертає - sum - сума останніх n елементів масиву.
 */
function getLastElementsSumAndPrint(arr, n) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // За допомогою методу slice() вибираємо останні n елементів масиву.
  // За допомогою методу reduceRight() обчислюємо суму останніх n елементів масиву.
  // За допомогою методу forEach() виводимо кожен елемент з останніх n в консоль.
  // Повертаємо суму останніх n елементів масиву.
	if (Array.isArray(arr)) {
		const arrIsSlice = arr.slice(-n);
		let sum = arrIsSlice.reduceRight((elem, values) => elem + values, 0)
		arrIsSlice.forEach(element => console.log(element));
		return sum;
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 10  ==============================");
console.log(getLastElementsSumAndPrint([1, 2, 3, 4, 5], 2)); // Виведе
// 4
// 5
// 9

// Завдання: 11

/**
 * Функція `wordLengths` приймає масив слів та повертає новий масив, де кожний елемент - це довжина відповідного слова.
 *  arr - вхідний масив слів.
 * Повертає - lengthsArray - новий масив, де кожний елемент - це довжина відповідного слова з вхідного масиву.
 */
function wordLengths(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо 'Вхідний параметр має бути масивом'
  // Використовуємо метод map для створення нового масиву, де кожний елемент - це довжина відповідного слова з вхідного масиву
  // Повертаємо новий масив
	if (Array.isArray(arr)) {
		const lengthsArray = arr.map((elem) => elem.length);
		// const arrFrom = Array.from(lengthsArray)
		return lengthsArray;
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 11 ==============================");
console.log(wordLengths(["apple", "banana", "pineapple", "watermelon"])); // Виведе [5, 6, 9, 10]

// Завдання: 12

/**
 * Функція `insertElementAt` вставляє заданий елемент в масив на задану позицію.
 * Використовується метод `splice()` для реалізації.
 *  arr - вхідний масив.
 *  index - індекс, на якому необхідно вставити елемент.
 *  element - елемент, який необхідно вставити.
 * Повертає - arr - масив з вставленим елементом.
 */
function insertElementAt(arr, index, element) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // Використовуємо метод splice для вставки елемента на позицію index
  // Повертаємо масив з вставленим елементом
	if (Array.isArray(arr)) {
		arr.splice(index, 0, element);
		return arr;
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 12 ==============================");
console.log(insertElementAt([1, 2, 3, 4, 5], 2, "три")); // Виведе [1, 2, 'три', 3, 4, 5]

// Завдання: 13

/**
 * Функція `flattenArray` приймає масив (вкладені масиви допустимі) і повертає новий одновимірний масив з усіма елементами.
 *  arr - вхідний масив, який може містити вкладені масиви.
 * Повертає - flattenedArray - одновимірний масив з усіма елементами вхідного масиву.
 */
function flattenArray(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні повертаємо 'Вхідний параметр має бути масивом'
  // Використовуємо метод flat з параметром Infinity, щоб "випрямити" масив на будь-яку глибину вкладеності
  // Повертаємо "випрямлений" масив
	if (Array.isArray(arr)) {
		const arrFlat = arr.flat(Infinity);
		return arrFlat;
	} else {
		return 'Вхідний параметр має бути масивом';
	}
}

console.log("Завдання: 13 ==============================");
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Виведе [1, 2, 3, 4, 5]

// Завдання: 14

/**
 * Функція `expandArrayByN` приймає масив чисел і число n, та повертає новий масив, де кожне число з початкового масиву повторюється n разів.
 *  arr - вхідний масив чисел.
 *  n - кількість разів, скільки кожне число повторюється в новому масиві.
 * Повертає - expandedArray - новий масив, де кожне число повторюється n разів.
 */
function expandArrayByN(arr, n) {
  // Перевіряємо, чи вхідні параметри є масивом та числом відповідно, якщо ні повертаємо 'Перший вхідний параметр має бути масивом, другий - числом'
  // Використовуємо метод flatMap для створення нового масиву, де кожне число повторюється n разів
  // Повертаємо розширений масив
	if (Array.isArray(arr)) {
		const expandedArray = arr.flatMap((num) => {
			return Array(n).fill(num);
		});
		return expandedArray;
	} else {
		return 'Перший вхідний параметр має бути масивом, другий - числом';
	}
}

console.log("Завдання: 14 ==============================");
console.log(expandArrayByN([1, 2, 3], 3)); // Виведе [1, 1, 1, 2, 2, 2, 3, 3, 3]

// Завдання: 15

/**
  
  Функція findLongestWord приймає масив слів і повертає найдовше слово.
  Використовується метод reduce() для реалізації.
   arr - вхідний масив слів.
  Повертає - longestWord - найдовше слово.
  */
function findLongestWord(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий рядок
  // Використовуємо метод reduce() для знаходження найдовшого слова
  // Порівнюємо довжину поточного слова з довжиною найдовшого слова
  // Інакше повертаємо попереднє найдовше слово без змін
  // Повертаємо найдовше слово
	if (Array.isArray(arr)) {
		const longestWord = arr.reduce((elem, values) => elem < values.length ? elem : values);
		return longestWord;
	} else {
		return "";
	}
}
console.log("Завдання: 15 ==============================");
console.log(findLongestWord(["apple", "banana", "pineapple", "watermelon"])); // Виведе 'watermelon'

// Завдання: 16

/**

Функція findDuplicateElements приймає масив чисел і повертає новий масив, в якому лише дубльовані елементи.
Використовується методи filter(), indexOf() та lastIndexOf() для реалізації.
 arr - вхідний масив чисел.
Повертає - duplicateElements - новий масив, в якому лише дубльовані елементи.
*/
function findDuplicateElements(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий масив
  // Використовуємо метод filter() для вибірки лише дубльованих елементів
  // Перевіряємо, чи є індекс поточного елемента відмінним від індексу першого входження елемента, та повертаємо результат
  // Повертаємо новий масив з дубльованими елементами
	if (Array.isArray(arr)) {
		const duplicateElements = arr.filter((elem, index) => arr.indexOf(elem) !== index);
		return duplicateElements;
	} else {
		return "";
	}
}
console.log("Завдання: 16 ==============================");
console.log(findDuplicateElements([1, 2, 3, 4, 2, 5, 6, 3, 5])); // Виведе [2, 3, 5]

// Завдання: 17

/**

Функція capitalizeWords приймає масив рядків і повертає новий масив, де кожне слово має першу літеру у верхньому регістрі.
Використовується метод map(), рядкові методи та логіка для реалізації.
 arr - вхідний масив рядків.
Повертає - capitalizedArray - новий масив, де кожне слово має першу літеру у верхньому регістрі.
*/
function capitalizeWords(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо пустий масив
  // Використовуємо метод map() для перетворення кожного слова в рядку з першою великою літерою
  // Перетворюємо першу літеру слова у верхній регістр да додамо до неї всі символи слова крім першого
  //Повертаємо слово
  // Повертаємо новий масив зі словами, у яких перша літера у верхньому регістрі
	if (Array.isArray(arr)) {
		const capitalizedArray = arr.map((item) => item.at(0).toLocaleUpperCase() + item.slice(1))
		return capitalizedArray;
	} else {
		return "";
	}
}
console.log("Завдання: 17 ==============================");
console.log(capitalizeWords(["apple", "banana", "orange"])); // Виведе ['Apple', 'Banana', 'Orange']

// Завдання: 18

/**
  
  Функція calculateTotalPrice приймає масив об'єктів товарів і повертає загальну ціну всіх товарів.
  Кожен об'єкт товару має властивість price - ціна товару.
  Використовується метод reduce() для реалізації.
   arr - вхідний масив об'єктів товарів.
  Повертає - totalPrice - загальна ціна всіх товарів.
  */
function calculateTotalPrice(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо 0
  // Використовуємо метод reduce() для обчислення загальної ціни
  // Додаємо ціну товару до загальної суми та повертаємо результат
  // Повертаємо загальну ціну всіх товарів
	if (Array.isArray(arr)) {
		const totalPrice = arr.reduce((key, values) => key + values.price, 0);
		return totalPrice;
	} else {
		return 0;
	}
}
console.log("Завдання: 18 ==============================");
console.log(
  calculateTotalPrice([
    { name: "apple", price: 1 },
    { name: "banana", price: 2 },
    { name: "orange", price: 3 },
  ])
); // Виведе 6

// Завдання: 19. ЗВЕРНІТЬ УВАГУ, метод findLastIndex працює на версії ноди вище 18.0.0 якщо ваша версія нижче, завдання можно не виконувати
// щоб перевірити версію ноди виконайте в терміналі команду node -v

/**

Функція findLastNegativeNumberIndex приймає масив чисел і повертає індекс останнього від'ємного числа.
Використовується метод findLastIndex() для реалізації.
 arr - вхідний масив чисел.
Повертає - lastIndex - індекс останнього від'ємного числа.
*/
function findLastNegativeNumberIndex(arr) {
  // Перевіряємо, чи вхідний параметр є масивом, якщо ні, повертаємо -1
  // Використовуємо метод findLastIndex() для знаходження індексу останнього входження від'ємного числа
  // Повертаємо індекс останнього від'ємного числа
	if (Array.isArray(arr)) {
		const lastIndex = arr.findLastIndex((elem) => elem < 0);
		return lastIndex
	} else {
		return -1;
	}
}
console.log("Завдання: 19 ==============================");
console.log(findLastNegativeNumberIndex([1, 2, -3, 4, -5, 6, -7])); // Виведе 6
