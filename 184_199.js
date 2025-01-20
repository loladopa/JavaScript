"use strict"
// глава 184

console.log(Math.pow(2, 10));

console.log(Math.sqrt(245));

let arr184 = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;

for (let i = 0; i < arr184.length; i++) {
    sumOfCubes += Math.pow(arr184[i], 3);
}

let result184 = Math.sqrt(sumOfCubes);
console.log(result184);
// глава 185

let num1_185 = 379;
let sqrt1_185 = Math.sqrt(num1_185);

let rounded1 = Math.round(sqrt1_185);
let roundedToTenths1 = sqrt1_185.toFixed(1);
let roundedToHundredths1 = sqrt1_185.toFixed(2);

console.log(rounded1); // Округлено до целых
console.log(roundedToTenths1); // Округлено до десятых
console.log(roundedToHundredths1); // Округлено до сотых

let num2_185 = 587;
let sqrt2_185 = Math.sqrt(num2_185);

let roundedFloor2 = Math.floor(sqrt2_185);
let roundedCeil2 = Math.ceil(sqrt2_185);

let result2 = {
    floor: roundedFloor2,
    ceil: roundedCeil2
};

console.log(result2);

// глава 186

let obj186 = [4, -2, 5, 19, -130, 0, 10];
console.log(Math.max(...obj186));
console.log(Math.min(...obj186));

// глава 187

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomArray);

// глава 188

let a = -4, b = -65;
console.log(Math.abs(b-a));

// глава 189
let str189_1 = 'js';
console.log(str189_1.toUpperCase());

let str189_2 = 'JS';
console.log(str189_2.toLowerCase());

// глава 190

let str190_1 = 'я учу javascript!';
let word1_1 = str190_1.substr(2, 3); 
let word2_1 = str190_1.substr(6, 10);
console.log(word1_1); 
console.log(word2_1); 

let str190_2 = 'я учу javascript!';
let word1_2 = str190_2.substring(2, 5); 
let word2_2 = str190_2.substring(6, 16); 
console.log(word1_2); 
console.log(word2_2);  

let str190_3 = 'я учу javascript!';
let word1_3 = str190_3.slice(2, 5); 
let word2_3 = str190_3.slice(6, 16); 
console.log(word1_3); 
console.log(word2_3);

// глава 191

const url = "http://example.com";
if (url.startsWith("http://")) {
    console.log("Строка начинается с 'http://'");
} else {
    console.log("Строка не начинается с 'http://'");
}

const fileName = "index.html";
if (fileName.endsWith(".html")) {
    console.log("Строка заканчивается на '.html'");
} else {
    console.log("Строка не заканчивается на '.html'");
}
// глава 192

let str192 = '1-2-3-4-5';
let res192 = str192.replace('-', '.');

console.log(res192);

// глава 193

let str193_1 = '1-2-3-4-5';
let arr193_1 = str193_1.split('-');
console.log(arr193_1);

let str193_2 = '12345';
let arr193_2 = str193_2.split('');
console.log(arr193_2);

let arr193_3 = [1, 2, 3, 4, 5];
let str193_3 = arr193_3.join('-');
console.log(str193_3);

// глава 194

let arr194_1 = [1, 2, 3];
console.log(arr194_1[0]);

let arr194_2 = [1, 2, 3];
console.log(arr194_2[arr194_2.length - 1]);

let arr194_3 = [1, 2, 3];
arr194_3.push(4, 5, 6);
console.log(arr194_3);

let arr194_4 = [1, 2, 3];
arr194_4.unshift(4, 5, 6);
console.log(arr194_4);

// глава 195

let arr195_1 = [1, 2, 3, 4, 5];
let newArr = arr195_1.slice(0, 3);
console.log(newArr);

let arr195_2 = [1, 2, 3, 4, 5];
let newArr195_2 = arr195_2.slice(3);
console.log(newArr195_2);

// глава 196

let arr196_1 = [1, 2, 3, 4, 5];
arr196_1.splice(1, 2); 
console.log(arr196_1);

let arr196_2 = [1, 2, 3, 4, 5];
arr196_2.splice(3, 0, 'a', 'b', 'c'); // Вставляем элементы 'a', 'b', 'c' начиная с индекса 3
console.log(arr196_2);

let arr196_3 = [1, 2, 3, 4, 5];
arr196_3.splice(1, 0, 'a', 'b'); 
arr196_3.splice(6, 0, 'c'); 
arr196_3.splice(8, 0, 'e'); 
console.log(arr196_3); 

// глава 197

let arr197 = [1, 2, 3, 4, 5];
let res197 = arr197.includes(3);
console.log(res197);

// глава 198

let obj198 = {'a': 1, 'b': 2, 'c': 3};
console.log(Object.keys(obj198));

// глава 199
let num199_1 = 12345;
let arr199_1 = String(num199_1).split('');

let sum199_1 = 0;
for (let digit of arr199_1) {
  sum199_1 += Number(digit); 
}
console.log(sum199_1); 


let num199_2 = 12345;
let arr199_2 = String(num199_2).split('');

let sum199_2 = 0;
for (let digit of arr199_2) {
  sum199_2 += Number(digit); 
}
console.log(sum199_2); 


let num199_3 = 12345;
let arr199_3 = String(num199_3).split('');

let sum199_3 = 0;
for (let digit of arr199_3) {
  sum199_3 += Number(digit); 
}
console.log(sum199_3);


let num199_4 = 12345;
let arr199_4 = String(num199_4).split('');

let sum199_4 = 0;
for (let digit of arr199_4) {
  sum199_4 += Number(digit); 
}
console.log(sum199_4); 


let num199_5 = 12345;
let arr199_5 = String(num199_5).split('');

let prod199_5 = 1;
for (let digit of arr199_5) {
  prod199_5 *= Number(digit); 
}
console.log(prod199_5);