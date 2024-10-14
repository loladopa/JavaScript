const PI = 3.14;
alert(3*PI);

let a = Number('10'); // в переменную запишется число 2
let b = Number('20'); // в переменную запишется число 3
alert(a + b);

let d = Number('2'); // в переменную запишется число 2
let c = Number('3'); // в переменную запишется число 3
alert(d + c);

alert(+'2s'); // выведет NaN


let num = parseFloat('5px');
let num1= parseFloat('6px');
alert(num+num1); 

let num2 = parseFloat('5.5px');
let num3= parseFloat('6.25px');
alert(num2+num3); 

let num4 = parseFloat('5.5px');
let num5= parseFloat('6.25px');
alert(num4+num5+'px'); 


let numa = 111;
let numb = 222;

alert(String(numa) + String(numb));

let numv = 1232132145;
alert(String(numv).length);

let numf = 12345;
let namr = 123;
alert((String(numf).length)+(String(namr).length));

let str = 'abcde';

alert(str[0]); 
alert(str[2]);
alert(str[4]);

alert(str[4]+str[3]+str[2]+str[1]+str[0]);

let numq = 3; // номер символа в переменной
alert(str[numq]); // выведет 'd'

let last = str.length - 1; // номер последнего символа
alert(str[last]); // выведет 'e'


let strq = 'abcde';
let last1 = strq.length - 1; // номер последнего символа
alert(strq[last1]); // выведет 'e'
alert(strq[str.length - 2]); // выведет 'e'
alert(strq[str.length - 3]); // выведет 'e'

let test = '12345'; // строка
alert(Number(test[0]) +  Number(test[1])+ Number(test[2]) + Number(test[3]) + Number(test[4])); 

let testx = String(12345)
alert((testx[0]) +  (testx[1])+ (testx[2]) + (testx[3]) + (testx[4])); 
alert((testx[0]) *  (testx[1])* (testx[2]) * (testx[3]) * (testx[4])); 
alert((testx[4]) +  (testx[3])+ (testx[2]) + (testx[1]) + (testx[0]));


let numrr = 47;
numrr += 7;
numrr -= 18;
numrr *= 10;
numrr /= 15;
alert(numrr);

let numaa = 10;
numaa++;
numaa++;
numaa--;
alert(numaa);


alert(0.1 * 0.2);

alert(0.3 - 0.1);

let namber = prompt('Ваш возраст?');
alert('Ваш возраст: ' + namber);


let num11 = prompt('Введите первое число');
let num22 = prompt('Введите второе число');

alert(Number(num11) + Number(num22)); // сложит числа как строки

let num111 = prompt('введите сторону квадрата');
alert(Number(num111) * Number(4));


let nud = prompt('введите первую сторону прямоугольника');
let nud1 = prompt('введите второю сторону прямоугольника');
alert(Number(2)*(Number(nud)+Number(nud1)));


document.write('подписывайтесь на канал, ставте лайки и колокольчики.');

document.write(`<em>все очень легко</em>`);

let str1 = 'text';
document.write('<em>'+ str1 +'</em>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');


let num1c = 1;
let num2c = 2;
console.log('сумма: ' + (num1c + num2c));  // Исправлено: добавлены скобки для правильного сложения



let ac = 1;
let bc = 2;
let cc = 3;  // Переменная c должна быть определена
console.log(ac + bc + cc);



let numc = '123';
let sumc = Number(numc[0]) + Number(numc[1]) + Number(numc[2]);  // Преобразование символов в числа
console.log(sumc);  // Вывод: 6



let numz = 123;
let strz = String(numz);  // Преобразование числа в строку
console.log(strz[0]);  // Вывод: '1'



let aqq = 0;
console.log(++aqq);  // Использование префиксного инкремента



let numh = 123;
let strh = String(numh);  // Преобразование числа в строку
console.log(strh.length);  // Вывод: 3


let ag = 24 * 60 * 60;  // Исправлено: умножение вместо деления
console.log(ag);  // Вывод: 86400


let numg = 123;
let strg = String(numg);  // Преобразование числа в строку
console.log(strg.length);  // Вывод: 3


let nume = 123;
let stre = String(nume);  // Преобразование числа в строку
console.log(stre[stre.length - 1]);  // Вывод: '3'



let numw = 123;
let strw = String(numw);  // Преобразование числа в строку
console.log(strw.length);  // Исправлено: правильное написание length



let numqq = 123;
let strqq = String(numqq);  // Преобразование числа в строку
console.log(strqq[strqq.length - 1]);  // Вывод: '3'



let aq = '123';
let bq = '456';
let sq = Number(aq) + Number(bq);  // Преобразование обеих строк в числа
console.log(sq);  // Вывод: 579



let aaa = 1;
let bbb = 2;
let ccc = 3;
console.log(aaa + bbb + ccc);  // Исправлено: правильное написание переменной ccc


alert(24 * 60 * 60);  

alert(30 * 24 * 60 * 60);  

alert(365 * 24 * 60 * 60);  

alert(24 * 60);  

alert(365 * 24 * 60);  

alert(1024 * 1024);  

alert(1024 * 1024 * 1024);  

alert(10 * 1024 * 1024 * 1024);  

alert(1024 * 1024 * 1024 * 1024);  

alert(1024 * 1024 * 1024);  





let r0 = 5;  
let PI0 = 3.14;
let s0 = PI0 * r0 * r0;
alert(s);  

let a0 = 4;  
let s0q = a0 * a0;
alert(s0q);  

let a00 = 5; 
let b00 = 3; 
let s00 = a00 * b00;
alert(s00); 

let aw = 5;  
let bw = 3;  
let pw = 2 * (aw + bw);
alert(pw); 

let tct = 25;  
let tft = (tct * 9/5) + 32;
alert(tft); 

let tf = 77;  
let tc = (tf - 32) * 5/9;
alert(tc);  