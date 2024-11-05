let arr = ['1', '2', '3'];

arr[0] += '3';
arr[1] += '3';
arr[2] += '3';

console.log(arr); // выведет ['a!', 'b!', 'c!']

let arr1 = [1, 2, 3];

arr1[0]++;
++arr1[1];
arr1[2]++;

console.log(arr1); 


let arr2 = [];

arr2[0] = 'a';
arr2[1] = 'b';
arr2[2] = 'c';

console.log(arr2); // выведет ['a', 'b', 'c']

let arr3 = [1, 2, 3];

arr3[3]= 4;
arr3[4]= 5;

console.log(arr3);


let arr4 = [];

arr4[3] = 'a';
arr4[8] = 'b';

console.log(arr4.length);

let arr5 = []

arr5.push(1);
arr5.push(2);
arr5.push(3);

console.log(arr5);

let arr6 = [1, 2, 3];

arr6.push(4);
arr6.push(5);

console.log(arr6);


let arr7 = ['a', 'b', 'c'];

let key = 2;
console.log(arr7[key]);

let arr8 = [1, 2, 3, 4, 5];

let key1 = 1;
let key2 = 2;

let a = (arr8[key1])+(arr8[key2]);

console.log(a);


let arr9 = ['a', 'b', 'c', 'd', 'e'];

delete arr9[1];
delete arr9[2];
console.log(arr9);

let arr10 = [1, 2, 3, 4, 5];
console.log(arr10[4]);


let arr11 = [1, 2, 3, 4, 5];
console.log(arr11[0] + arr11[1] + arr11[2] + arr11[3] + arr11[4]);


let arr12 = [1, 2, 3, 4, 5];
console.log(arr12.length);

let arr13 = [1, 2, 3, 4, 5];
console.log(arr13.length);

let obj = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресенье'};
console.log(obj);


let obj1 = {1: 'январь', 2: 'февраль', 3: 'март', 4: 'апрель', 5: 'май', 6: 'июнь', 7: 'июль', 8: 'август', 9: 'сентябрь', 10: 'октябрь', 11: 'ноябрь', 12: 'декабрь'};
console.log(obj1);

let user = { 'name': 'Иванов',  'surname': 'Петров',  'patronymic': 'Олегович' };

console.log(user.name, user.patronymic, user.surname);

let today = new Date(); 

let date = {
  year: today.getFullYear(),
  month: today.getMonth() + 1, // Месяцы нумеруются с 0, поэтому добавляем 1
  day: today.getDate()
};

console.log(`${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`);


let obj2 = {
	'1a': 1,
	b2: 2,
	'с-с': 3,
	'd 4': 4,
	e5: 5
};
console.log(obj2);


let obj3 = {
    '1a': 1,
    'b2': 2,
    'c-c': 3,
    'd 4': 4,
    'e5': 5
  };
  
  console.log(obj3['1a']);
  console.log(obj3['b2']); 
  console.log(obj3['c-c']); 
  console.log(obj3['d 4']); 
  console.log(obj3['e5']); 

  let obj4 = {x: 1, y: 2, z: 3};

  obj4.x *= obj4.x;
  obj4.y *= obj4.y;
  obj4.z *= obj4.z;

console.log(obj4);


let obj5 = {};

obj5.a = 'sad';
obj5.b = 'dasd2';
obj5.c = 'sadad3';

console.log(obj5);


let obj6 = { x: 1, y: 2, z: 3 };
let obj7 = { z: 3, x: 1, y: 2 };

console.log(obj1 === obj2);


let obj9 = {x: 1, y: 2, z: 3};

let keys = Object.keys(obj9);
console.log(keys);

console.log(Object.keys(obj9).length);


let obj10 = {x: 1, y: 2, z: 3};
let key10 = 'y';
console.log(obj10[key10]);


let obj11 = {x: 1, y: 2, z: 3};
console.log(obj11['x']);


let obj12 = {x: 1, y: 2, z: 3};
let key11 = 'x';
console.log(obj12[key11]);


let obj13 = {x: 1, y: 2, z: 3};

let prop = 'x';
console.log(obj13[prop]);

let obj14 = {x: 1, y: 2, z: 3};

let prop1 = 'x';
console.log(obj14[prop1]);




let obj15 = {
	key21: 1,
	y: 2,
	z: 3
};
let key21 = 'x';
console.log(obj15);


let obj16 = {
    x: 1,
    y: 2,
    z: 3
  };
  
  let key12 = 'x';
  let key22 = 'y';
  let key32 = 'z';
  
  console.log(obj16[key12]); 
  console.log(obj16[key22]); 
  console.log(obj16[key32]);


  let obj17 = {x: 1, y: 2, z: 3};

console.log('x' in obj17);
console.log('w' in obj17);


let obj18 = {x: 1, y: 2, z: 3};
delete obj18.x;

console.log('x' in obj18);