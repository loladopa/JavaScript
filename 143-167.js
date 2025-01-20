"use strict"  

// глава 144
let arr144 = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr144){
    console.log(elem);
}
// глава 145
let obj145 = {x: 1, y: 2, z: 3};
for (let key in obj145) {
	console.log(key); // выведет 'a', 'b', 'c'
}
for (let key in obj145) {
	console.log(obj145[key]); // выведет 1, 2, 3
}
// глава 146
let i_146 = 1;
while(i_146 <= 100){
    console.log(i_146)
    i_146++;
}

let i_146_2 = 11;
while(i_146_2 <= 33){
    console.log(i_146_2);
    i_146_2++;
}

let i_146_3 = 100;
let counter_146 = 0;
while (i_146_3 <= 1000){
    console.log(i_146_3);
    console.log(counter_146);
    i_146_3 = (i_146_3 * 3);
    counter_146++;
}

let num146 = 1; // начальное значение
let iterations146 = 0; // счетчик итераций

while (num146 <= 1000) {
  num146 = num146 * 3;
  iterations146++;
}

console.log('Результат:' + num146);
console.log('Количество итераций:' + iterations146);

// глава 147
for (let i_147_1 = 1; i_147_1 <= 100; i_147_1++ ){
    console.log(i_147_1);
}

for (let i_147_2 = 11; i_147_2 <= 33; i_147_2++){
    console.log(i_147_2);
}

for (let i_147_3 = 0; i_147_3 <= 100; i_147_3 += 2){
    console.log(i_147_3);
}

for (let i_147_4 = 1; i_147_4 <= 99; i_147_4 += 2){
    console.log(i_147_4);
}

for (let i_147_5 = 100; i_147_5 >= 0; i_147_5--){
    console.log(i_147_5);
}
// глава 148
let arr148_1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr148_1.length; i++) {
	console.log(arr148_1[i]);
}

let arr148_2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 1; i < (arr148_2.length - 1); i++) {
	console.log(arr148_2[i]);
}

let arr148_3 = ['a', 'b', 'c', 'd', 'e'];
for (let i = arr148_3.length - 1; i >= 0; i--) {
	console.log(arr148_3[i]);
}

let arr148_4 = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr148_4.length; i++) {
	console.log(arr148_4[i]);
}
// глава 149
let arr149_1 = [2, 5, 9, 15, 1, 4];
for (let elem of arr149_1) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

let obj149_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let elem in obj149_2) {
    if (obj149_2[elem] % 2 !== 0) {
		console.log(obj149_2[elem]);
	}
}
// глава 150
let res150 = 0;

for (let i = 2; i <= 100; i += 2) {
	res150 += i;
}
console.log(res150);

let sumOdd150 = 0;
for (let i = 1; i < 100; i += 2) {
  sumOdd150 += i;
}
console.log(sumOdd150);

let product150 = 1;
for (let i = 1; i <= 20; i++) {
  product150 *= i;
}
console.log(product150);
// глава 151
let arr151_1 = [2, 5, 9, 3, 1, 4];
let res151_1 = 0;
for (let elem of arr151_1) {
	res151_1 += elem;
}
console.log(res151_1); // искомая сумма

let arr151_2 = [2, 5, 9, 3, 1, 4];
let res151_2 = 0;
for (let elem of arr151_2) {
    if (elem % 2 === 0) {
      res151_2 += elem;
    }
  }  
console.log(res151_2);

let arr151_3 = [2, 5, 9, 3, 1, 4];
let res151_3 = 0;
for (let elem of arr151_3) {
    res151_3 += elem * elem; // или Math.pow(elem, 2)
  }  
console.log(res151_3);

let arr151_4 = [2, 5, 9, 3, 1, 4];
let res151_4 = 1;
for (let elem of arr151_4) {
    res151_4 *= elem;
  }
console.log(res151_4); 
// глава 152
let str152_1 = '';
for (let i = 0; i <= 5; i++) {
	str152_1 += '-';
}
console.log(str152_1); 

let str152_2 = '';
for (let i = 1; i <= 9; i++) {
	str152_2 += i;
}
console.log(str152_2); 

let str152_3 = '';
for (let i = 9; i >= 1; i--) {
	str152_3 += i;
}
console.log(str152_3);

let str152_4 = '';
for (let i = 1; i <= 9; i++) {
	str152_4 += '-';
    str152_4 += i;
}
console.log(str152_4);
// глава 153

for (let i = 10; i <= 1000; i++) {
  let str153 = String(i); // преобразуем число в строку
  console.log(str153[0]); // выводим первую цифру
}

for (let i = 10; i <= 1000; i++) {
  let str153_2 = String(i); // преобразуем число в строку
  let firstDigit_153 = Number(str153_2[0]); // первая цифра
  let secondDigit_153 = Number(str153_2[1]); // вторая цифра
  console.log(firstDigit_153 + secondDigit_153); // выводим сумму
}

for (let i = 10; i <= 1000; i++) {
  let str153_3 = String(i); // преобразуем число в строку
  if (str153_3[0] === '1') { // проверяем первую цифру
    console.log(i); // выводим число
  }
}

for (let i = 10; i <= 1000; i++) {
  let str153_4 = String(i); // преобразуем число в строку
  let firstDigit_153_4 = Number(str153_4[0]); // первая цифра
  let secondDigit_153_4 = Number(str153_4[1]); // вторая цифра
  if (firstDigit_153_4 + secondDigit_153_4 === 5) { // проверяем сумму
    console.log(i); // выводим число
  }
}
// глава 154

let arr154_1 = [1, 2, 3, 0, 4, 5];

for (let elem154_1 of arr154_1) {
  if (elem154_1 === 0) {
    break; // выйдем из цикла, если нашли 0
  }
  console.log(elem154_1);
}

let arr154_2 = [1, 2, 3, -1, 4, 5];
let sum154_2 = 0;

for (let elem154_2 of arr154_2) {
  if (elem154_2 < 0) {
    break; // выйдем из цикла, если нашли отрицательное число
  }
  sum154_2 += elem154_2;
}
console.log('Сумма:', sum154_2);

let arr154_3 = [1, 2, 3, 4, 5];
let position154_3 = -1;

for (let i = 0; i < arr154_3.length; i++) {
  if (arr154_3[i] === 3) {
    position154_3 = i; // запоминаем индекс
    break; // выйдем из цикла после нахождения
  }
}
console.log('Позиция первого числа 3:', position154_3);

let sum154_4 = 0;
let count154_4 = 0;

for (let i = 1; sum154_4 <= 100; i++) {
  sum154_4 += i;
  count154_4++;
}
console.log('Количество целых чисел:', count154_4);
// глава 156

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
  }
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i.toString() + j.toString() + " ");
  }
}
// глава 159

let arr1_159 = [];
for (let i = 1; i <= 10; i++) {
  arr1_159.push(i);
}
console.log(arr1_159);

let arr2_159 = [];
for (let i = 0; i < 10; i++) {
  arr2_159.push('x');
}
console.log(arr2_159);

let originalArray = [-3, 5, -1, 0, 7, -8, 2];
let positiveArray = [];
for (let i = 0; i < originalArray.length; i++) {
  if (originalArray[i] > 0) {
    positiveArray.push(originalArray[i]);
  }
}
console.log(positiveArray);

// глава 160
let arr160_1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr160_1.length; i++) {
    arr160_1[i] = arr160_1[i] ** 2;
}
console.log(arr160_1);

let arr160_2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr160_2.length; i++) {
    arr160_2[i] -= 1;
}
console.log(arr160_2);

let arr160_3 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr160_3.length; i++) {
    arr160_3[i] += 10;
}
console.log(arr160_3);

// глава 161

let arr1_161_1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2_161_1 = [1, 2, 3, 4, 5, 6, 7];

let obj_161_1 = {};
for (let i = 0; i <= 7; i++)
{
  let keys = arr1_161_1[i];
  let values = arr2_161_1[i];

  obj_161_1[keys] = values;
}
console.log(obj_161_1);

let obj_161_2 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let evenNumbers161_2 = {};

for (let key in obj_161_2) {
  if (obj_161_2[key] % 2 === 0) {
    evenNumbers161_2[key] = obj_161_2[key];
  }
}
console.log(evenNumbers161_2);

let obj_161_3 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let invertedObj161_3 = {};

for (let key in obj_161_3) {
  invertedObj161_3[obj_161_3[key]] = key;
}

console.log(invertedObj161_3);

// глава 162

let obj162_1 = {x: 1, y: 2, z: 3};
for (let key in obj162_1) {
	obj162_1[key] = obj162_1[key] ** 2;
}
console.log(obj162_1);

let obj162_2 = {x: 1, y: 2, z: 3};
for (let key in obj162_2) {
	obj162_2[key] = obj162_2[key] + 1;
}
console.log(obj162_2);

// глава 163
let arr163_1 = ['a', 'b', 'c', 'd', 'e'];
let flag163_1 = false; 

for (let elem of arr163_1) {
  if (elem === 'c') {
    flag163_1 = true;
    break; 
  }
}
if (flag163_1) {
  console.log('+++');
} else {
  console.log('---'); 
}

let number163_2 = 7;
let flag163_2 = true; 

if (number163_2 <= 1) {
  flag163_2 = false; 
} else {
  for (let i = 2; i <= Math.sqrt(number163_2); i++) { 
    if (number163_2 % i === 0) 
    {
      flag163_2 = false; 
      break; 
    }
  }
}
if (flag163_2) {
  console.log(number163_2 +'- простое число');
} else {
  console.log(number163_2 +'- не простое число');
}
// глава 164

let arr164 = [10, 20, 30, 40, 21, 32, 51];
let sum164 = 0;

for (let elem of arr164) {
  if (String(elem)[0] === '1' || String(elem)[0] === '2') {
    sum164 += elem; 
  }
}

console.log(sum164);

// глава 165
let obj165 = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum165 = 0;

for (let elem in obj165) {
  if (obj165[elem] === 10 || obj165[elem] === 20) {
    sum165 += obj165[elem]; 
  }
}

console.log(sum165);

// глава 166

// №1⊗jsPmLpMst

// Код должен вывести числа от 0 до 10:

// for (let i = 0; i > 10; i++) {
// 	console.log(i);
// }

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// №2⊗jsPmLpMst

// Код должен вывести числа от 10 до 0:

// for (let i = 10; i > 0; i++) {
// 	console.log(i);
// }

for (let i = 10; i >= 0; i--) {
  	console.log(i);
}

// №3⊗jsPmLpMst

// Код должен вывести числа от 10 до 0:

// for (let i = 10; i == 0; i--) {
// 	console.log(i);
// }

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// №4⊗jsPmLpMst

// Код должен вывести числа от 0 до 10:

// let i = 0;

// while (i >= 10) {
// 	console.log(i);
// 	i++;
// }

let i166_4 = 0;

while (i166_4 <= 10) {
  console.log(i166_4);
  i166_4++;
}

// №5⊗jsPmLpMst

// Код должен найти сумму целых чисел от 1 до 10:

// let res;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);

let res166_5 = 0; // Инициализируем переменную

for (let i = 1; i <= 10; i++) {
  res166_5 += i;
}

console.log(res166_5);

// №6⊗jsPmLpMst

// Код должен найти произведение целых чисел от 1 до 10:

// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }

// console.log(res);

let res166_6 = 1; 

for (let i = 1; i <= 10; i++) {
  res166_6 *= i;
}

console.log(res166_6);

// №7⊗jsPmLpMst

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }

// console.log(sum); // должно вывести 15

let arr166_7 = ['1', '2', '3', '4', '5'];
let sum166_7 = 0;

for (let elem of arr166_7) {
  sum166_7 += +elem; 
}

console.log(sum166_7);

// №8⊗jsPmLpMst

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = '';

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

let arr166_8 = ['1', '2', '3', '4', '5'];
let sum166_8 = 0;

for (let elem of arr166_8) {
  sum166_8 += +elem; 
}

console.log(sum166_8);

// №9⊗jsPmLpMst

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum = +elem;
// }

// console.log(sum); // должно вывести 15

let arr166_9 = ['1', '2', '3', '4', '5'];
let sum166_9 = 0;

for (let elem of arr166_9) {
  sum166_9 += +elem; 
}

console.log(sum166_9);

// №10⊗jsPmLpMst

// Код должен найти сумму элементов массива, однако, всегда выводит NaN:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN

let arr166_10 = ['1', '2', '3', '4', '5'];
let sum166_10 = 0;

for (let i = 0; i < arr166_10.length; i++) { 
  sum166_10 += +arr166_10[i]; 
}

console.log(sum166_10);

// №11⊗jsPmLpMst

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length - 1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит не 15

let arr166_11 = ['1', '2', '3', '4', '5'];
let sum166_11 = 0;

for (let i = 0; i < arr166_11.length; i++) { 
  sum166_11 += +arr166_11[i]; 
}

console.log(sum166_11);

// №12⊗jsPmLpMst

// Код должен найти сумму элементов массива:

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
// 	sum += +i;
// }

// console.log(sum); // почему-то выводит не 15

let arr166_12 = ['1', '2', '3', '4', '5'];
let sum166_12 = 0;

for (let i = 0; i < arr166_12.length; i++) {
  sum166_12 += +arr166_12[i]; 
}

console.log(sum166_12);

// №13⊗jsPmLpMst

// Код должен возвести в квадрат каждый элемент массива:

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	elem = elem ** 2;
// }

// console.log(arr);

let arr166_13 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr166_13.length; i++) {
  arr166_13[i] = arr166_13[i] ** 2; 
}

console.log(arr166_13);

// №14⊗jsPmLpMst

// Код должен заполнить массив числами от 1 до 5:

// let arr;

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);

let arr166_14 = [];

for (let i = 1; i <= 5; i++) {
  arr166_14.push(i);
}

console.log(arr166_14);

// №15⊗jsPmLpMst

// Код должен найти сумму элементов объекта:

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let elem in obj) {
// 	sum += elem;
// }

// console.log(sum);

let obj166_15 = {a: 1, b: 2, c: 3};
let sum166_15 = 0;

for (let key in obj166_15) {
  sum166_15 += obj166_15[key]; 
}

console.log(sum166_15);

// №16⊗jsPmLpMst

// Код должен найти сумму элементов объекта:

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let key in obj) {
// 	sum = +obj.key;
// }

// console.log(sum);

let obj166_16 = {a: 1, b: 2, c: 3};
let sum166_16 = 0;

for (let key in obj166_16) {
   sum166_16 += obj166_16[key]; // Используем ключ для доступа к значению
}

console.log(sum166_16);

// №17⊗jsPmLpMst

// Код должен проверить, есть ли в массиве число 3 или нет:

// let arr = [1, 2, 3, 4, 5];
// let res = '';

// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++';
// 	} else {
// 		res = '---';
// 	}
// }

// console.log(res);

let arr166_17 = [1, 2, 3, 4, 5];
let res166_17 = false;

for (let elem of arr166_17) {
    if (elem === 3) {
        res166_17 = true;
        break;
    }
}

console.log(res166_17);

// №18⊗jsPmLpMst

// Код должен заполнить массив числами от 1 до 5:

// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);

let arr166_18 = []; // Инициализируем массив

for (let i = 1; i <= 5; i++) {
    arr166_18.push(i);
}

console.log(arr166_18);

// №19⊗jsPmLpMst

// Код должен проверить, есть ли в массиве число 3 или нет:

// let arr = [1, 2, 3, 4, 5];
// let res = false;

// for (let elem of arr) {
// 	if (elem === 3) {
// 		let res = true;
// 		break;
// 	}
// }

// console.log(res);

let arr166_19 = [1, 2, 3, 4, 5];
let res166_19 = false;

for (let elem of arr166_19) {
    if (elem === 3) {
        res166_19 = true;
        break;
    }
}

console.log(res166_19);

// №20⊗jsPmLpMst

// Код должен вывести только четные элементы из массива:

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 = 0) {
// 		console.log(elem);
// 	}
// }

let arr166_20 = [1, 2, 3, 4, 5];

for (let elem of arr166_20) {
    if (elem % 2 === 0) { // Исправлено: использовано === вместо =
        console.log(elem);
    }
}

// №21⊗jsPmLpMst

// Код должен записать в новый массив только нечетные элементы старого массива:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		res.push(elem);
// 	}
// }

// console.log(res);

let arr166_21 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res166_21 = []; // Инициализируем новый массив

for (let elem of arr166_21) {
    if (elem % 2 !== 0) { // Исправлено: использовано !== вместо !=
        res166_21.push(elem);
    }
}

console.log(res166_21);

// глава 167

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

let arr167_4 = [];
for (let i = 0; i < 10; i++) {
    arr167_4.push('x');
}
console.log(arr167_4);

let arr167_5 = [];
for (let i = 1; i <= 10; i++) {
    arr167_5.push(i);
}
console.log(arr167_5);

let arr167_6 = [5, -3, 7, 12, -1, 0, 9];
for (let elem of arr167_6) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}

let arr167_7 = [1, 2, 3, 4, 5];
let found167_7 = false;
for (let elem of arr167_7) {
    if (elem === 5) {
        found167_7 = true;
        break;
    }
}
console.log(found167_7 ? "Элемент со значением 5 найден." : "Элемент со значением 5 не найден.");

let arr167_8 = [1, 2, 3, 4, 5];
let sum167_8 = 0;
for (let elem of arr167_8) {
    sum167_8 += elem;
}
console.log(sum167_8);

let arr167_9 = [1, 2, 3];
let sumOfSquares167_9 = 0;
for (let elem of arr167_9) {
    sumOfSquares167_9 += elem * elem;
}
console.log(sumOfSquares167_9);

let arr167_10 = [1, 2, 3, 4, 5];
let sum167_10 = 0;
for (let elem of arr167_10) {
    sum167_10 += elem;
}
let average167_10 = sum167_10 / arr167_10.length;
console.log(average167_10);

function factorial(n) {
  let result167_11 = 1;
  for (let i = 2; i <= n; i++) {
      result167_11 *= i;
  }
  return result167_11;
}
console.log(factorial(10));

let arr167_12 = [];
for (let i = 10; i >= 1; i--) {
    arr167_12.push(i);
}
console.log(arr167_12);

let arr167_13 = [-1, -2, 3, -4, 5];
let positiveSum167_13 = 0;
for (let elem of arr167_13) {
    if (elem > 0) {
        positiveSum167_13 += elem;
    }
}
console.log(positiveSum167_13);

let arr167_14 = [10, 20, 30, 50, 235, 3000];
for (let elem of arr167_14) {
    if (String(elem)[0] === '1' || String(elem)[0] === '2' || String(elem)[0] === '5') {
        console.log(elem);
    }
}

let arr167_15 = [1, 2, 3, 4];
for (let i = arr167_15.length - 1; i >= 0; i--) {
    console.log(arr167_15[i]);
}

let arr167_16 = [0, 1, 2, 3, 4];
for (let i = 0; i < arr167_16.length; i++) {
    if (arr167_16[i] === i) {
        console.log(arr167_16[i]);
    }
}

let arr167_17 = [1, 2, 3];
for (let elem of arr167_17) {
    document.write(elem + '<br>');
}

let arr167_18 = [1, 2, 3];
for (let elem of arr167_18) {
    document.write('<p>' + elem + '</p>');
}

let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let day of daysOfWeek) {
  if (day === 'Суббота' || day === 'Воскресенье') {
    document.write('<b>' + day + '</b><br>');
} else {
    document.write(day + '<br>');
}
}

let daysOfWeek_20 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDayIndex_20 = new Date().getDay();   
for (let i = 0; i < daysOfWeek_20.length; i++) {
    if (i === currentDayIndex_20) {
        document.write('<i>' + daysOfWeek_20[i] + '</i><br>');
    } else {
        document.write(daysOfWeek_20[i] + '<br>');
    }
}

let obj_emp167 = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
for (let key in obj_emp167) {
  obj_emp167[key] *= 1.1;
}
console.log(obj_emp167);
// 22
for (let key in obj_emp167) {
  if (obj_emp167[key] <= 400) {
      obj_emp167[key] *= 1.1;
  }
}
console.log(obj_emp167);

let arr1_167_23 = [1, 2, 3, 4, 5];
let arr2_167_23 = [6, 7, 8, 9, 10];
let newObj_167_23 = {};
for (let i = 0; i < arr1_167_23.length; i++) {
    newObj_167_23[arr1_167_23[i]] = arr2_167_23[i];
}
console.log(newObj_167_23);

let obj167_24 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = Object.keys(obj167_24).reduce((sum167_24, key167_24) => sum167_24 + Number(key167_24), 0);
let sumValues = Object.values(obj167_24).reduce((sum167_24, value167_24) => sum167_24 + value167_24, 0);
console.log(sumKeys / sumValues);



let obj167_25 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let keysArray167_25 = Object.keys(obj167_25);
let valuesArray167_25 = Object.values(obj167_25);

console.log(keysArray167_25);  
console.log(valuesArray167_25);


let obj167_26 = {
  1: 125,
  2: 225,
  3: 128,
  4: 356,
  5: 145,
  6: 281,
  7: 452,
};
let newArr167_26 = Object.values(obj167_26).filter(value167_26 => String(value167_26).startsWith('1') || String(value167_26).startsWith('2'));
console.log(newArr167_26);


let arr167_27 = ['a', 'b', 'c', 'd', 'e'];

let newObj167_27 = {};
arr167_27.forEach((value167_27, index167_27) => {
    newObj167_27[index167_27 + 1] = value167_27;
});

console.log(newObj167_27);


let arr167_28 = ['a', 'b', 'c', 'd', 'e'];
let newObj167_28 = {};
arr167_28.forEach((value167_28, index167_28) => {
    newObj167_28[value167_28] = index167_28 + 1;
});

console.log(newObj167_28);