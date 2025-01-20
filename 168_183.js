"use strict"  
// глава 168
let arr168_1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr168_1[3][2], arr168_1[1][1], arr168_1[2][0], arr168_1[0][0]);

// глава 168
let arr168_2 = [[1, 2], [3, 4], [5, 6]];
console.log(arr168_2[0][0] + arr168_2[0][1] + arr168_2[1][0] + arr168_2[1][1] + arr168_2[2][0] + arr168_2[2][1]);

// глава 169
let arr169 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
console.log(arr169[0][0][0]+arr169[0][1][0]+arr169[0][0][1]+arr169[0][1][1]+arr169[1][0][0]+arr169[1][0][1]+arr169[1][1][0]+arr169[1][1][1]);

// глава 170
let arr170 = [
    [
        1, 2, 3, [4, 5, [6, 7]]
    ], 
    [
        8, [9, 10]
    ]
];
console.log('55');

// глава 171

let arr171_1 = [[1, 2, 3], [4, 5], [6]];
let sum171_1 = 0;

for (let subArr171_1 of arr171_1) {
  for (let elem of subArr171_1) {
    sum171_1 += elem;
  }
}

console.log("Сумма элементов:", sum171_1);

let arr171_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum171_2 = 0;

for (let subArr1_171_2 of arr171_2) {
  for (let subArr2_171_2 of subArr1_171_2) {
    for (let elem of subArr2_171_2) {
      sum171_2 += elem; 
    }
  }
}
console.log("Сумма элементов:", sum171_2);

// глава 172

let arr172_1 = [[1, 2, 3], [4, 5], [6]];
let sum172_1 = 0;

for (let i = 0; i < arr172_1.length; i++) {
  for (let j = 0; j < arr172_1[i].length; j++) {
    sum172_1 += arr172_1[i][j]; 
  }
}

console.log("Сумма элементов двухмерного массива:", sum172_1);


let arr172_2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum172_2 = 0;
for (let i = 0; i < arr172_2.length; i++) {
  for (let j = 0; j < arr172_2[i].length; j++) {
    for (let k = 0; k < arr172_2[i][j].length; k++) {
      sum172_2 += arr172_2[i][j][k]; 
    }
  }
}

console.log("Сумма элементов трехмерного массива:", sum172_2);

// глава 173
let arr173_1 = [];

for (let i = 0; i < 3; i++) {
  arr173_1[i] = []; 
  
  for (let j = 0; j < 5; j++) {
    arr173_1[i].push(j + 1); 
  }
}

console.log(arr173_1);


let arr173_2 = [];

for (let i = 0; i < 3; i++) {
  arr173_2[i] = [];
  
  for (let j = 0; j < 4; j++) {
    arr173_2[i].push('x'); 
  }
}

console.log(arr173_2);


let arr173_3 = [];

for (let i = 0; i < 3; i++) {
  arr173_3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr173_3[i][j] = []; 
    for (let k = 0; k < 5; k++) {
      arr173_3[i][j].push(k + 1); 
    }
  }
}
console.log(arr173_3);

// глава 174

// №1⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_1 = [];

for (let i = 0; i < 3; i++) {
  arr174_1[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_1[i].push(j);
  }
}

console.log(arr174_1);


// №2⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_2 = [];

for (let i = 0; i < 3; i++) {
  arr174_2[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_2[i].push(j);
  }
}

console.log(arr174_2);

// №3⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_3 = [];

for (let i = 0; i < 3; i++) {
  arr174_3[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_3[i].push(j);
  }
}

console.log(arr174_3);

// №4⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[j] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_4 = [];

for (let i = 0; i < 3; i++) {
  arr174_4[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_4[i].push(j);
  }
}

console.log(arr174_4);

// №5⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_5 = [];

for (let i = 0; i < 3; i++) {
  arr174_5[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr174_5[i].push(j);
  }
}

console.log(arr174_5);

// №6⊗jsPmMuAFP

// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr.push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr174_6 = [];

for (let i = 0; i < 3; i++) {
  arr174_6[i] = []; // Инициализируем подмассив
  for (let j = 1; j <= 5; j++) {
    arr174_6[i].push(j); // Добавляем в подмассив
  }
}

console.log(arr174_6);

// глава 175

// №1⊗jsPmMuAFO

// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr175_1 = [];
for (let i = 0; i < 4; i++) {
  arr175_1[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_1[i][j] = i * 2 + j + 1;
  }
}
console.log(arr175_1);

// №2⊗jsPmMuAFO

// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr175_2 = [];
for (let i = 0; i < 4; i++) {
  arr175_2[i] = [];
  for (let j = 0; j < 3; j++) {
    arr175_2[i][j] = (i * 3 + j + 1) * 2;
  }
}
console.log(arr175_2);

// №3⊗jsPmMuAFO

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr175_3 = [];
for (let i = 0; i < 2; i++) {
  arr175_3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr175_3[i][j] = [];
    for (let k = 0; k < 2; k++) {
      arr175_3[i][j][k] = i * 4 + j * 2 + k + 1;
    }
  }
}
console.log(arr175_3);

// №4⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_4 = [];
let k175_4 = 1;

for (let i = 0; i < 3; i++) {
  arr175_4[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_4[i][j] = k175_4;
    k175_4++;
  }
}

console.log(arr175_4);

// №5⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

//  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_5 = [];
let k175_5 = 1;

for (let i = 0; i < 3; i++) {
    arr175_5[i] = [];
    
    for (let j = 0; j < 3; j++) {
        arr175_5[i][j] = k175_5;
        k175_5++; // Увеличиваем k после присвоения значения
    }
}

console.log(arr175_5);



// №6⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k--;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_6 = [];
let k175_6 = 1;

for (let i = 0; i < 3; i++) {
  arr175_6[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_6[i][j] = k175_6;
    k175_6++;
  }
}

console.log(arr175_6);


// №7⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_7 = [];
let k175_7 = 1;

for (let i = 0; i < 3; i++) {
  arr175_7[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_7[i][j] = k175_7;
    k175_7++;
  }
}

console.log(arr175_7);


// №8⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_8 = [];
let k175_8 = 1;

for (let i = 0; i < 3; i++) {
  arr175_8[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_8[i][j] = k175_8;
    k175_8++; 
  }
}

console.log(arr175_8);


// №9⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0, k++; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_9 = [];
let k175_9 = 1;

for (let i = 0; i < 3; i++) {
  arr175_9[i] = [];
  
  for (let j = 0; j < 3; j++) {
    arr175_9[i][j] = k175_9;
    k175_9++; // Убедитесь, что k увеличивается на каждой итерации
  }
}

console.log(arr175_9);


// №10⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++; k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_10 = [];
let k175_10 = 1;

for (let i = 0; i < 3; i++) {
    arr175_10[i] = [];
    
    for (let j = 0; j < 3; j++, k175_10++) { // Убедитесь в правильной инкрементации k
        arr175_10[i][j] = k175_10;
    }
}

console.log(arr175_10);

// №11⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = ++k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_11 = [];
let k175_11 = -1;

for (let i = 0; i < 3; i++) {
    arr175_11[i] = [];
    
    for (let j =0; j <3; j++) {
        arr175_11[i][j] = ++k175_11 +1;
    }
}

console.log(arr175_11);

// №12⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[k] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


let arr175_12 = [];
let k175_12 =1;

for (let i=0;i<3;i++){
    arr175_12[i]=[];
    
    for(let j=0;j<3;j++){
        arr175_12[i][j]=k175_12;
        k175_12++;
    }
}

console.log(arr175_12);


// №13⊗jsPmMuAFO

// Автор следующего кода хотел сделать вот такой массив:

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; k++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr175_13 = [];

for (let i=0,k=1;i<3;i++){
    arr175_13[i]=[];
    
    for(let j=0;j<3;j++,k++){
        arr175_13[i][j]=k;
    }
}

console.log(arr175_13);

// глава 176

let obj176_1 = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
let sum176_1 = 0;

for (let key in obj176_1) {
  for (let innerKey in obj176_1[key]) {
    sum176_1 += obj176_1[key][innerKey];
  }
}

console.log(sum176_1);

let obj176_2 = {
  1: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  2: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  3: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
};

console.log(obj176_2['2']['2']); 
console.log(obj176_2[3][1]);

let obj176_3 = {
  key1: {
    a: 1, 
    b: 2, 
    c: {
      d: 3,
      e: 4,
    }, 
    f: 5,
  },
  key2: {
    g: 6, 
    h: 7,
  },
};

let sum176_3 = obj176_3.key1.a + obj176_3.key1.b + obj176_3.key1.c.d + obj176_3.key1.c.e + obj176_3.key1.f + obj176_3.key2.g + obj176_3.key2.h;

console.log(sum176_3);

// глава 177

let obj177_1 = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

let sum177_1 = 0;
for (let key in obj177_1) {
  let subObj = obj177_1[key];
  
  for (let subKey in subObj) {
    sum177_1 += subObj[subKey];
  }
}

console.log(sum177_1);

let obj177_2 = {
  1: {
    1: {
      1: 111,
      2: 112,
      3: 113,
    },
    2: {
      1: 121,
      2: 122,
      3: 123,
    },
  },
  2: {
    1: {
      1: 211,
      2: 212,
      3: 213,
    },
    2: {
      1: 221,
      2: 222,
      3: 223,
    },
  },
  3: {
    1: {
      1: 311,
      2: 312,
      3: 313,
    },
    2: {
      1: 321,
      2: 322,
      3: 323,
    },
  },
};

let sum177_2 = 0;

for (let key in obj177_2) {
  let subObj = obj177_2[key];
  
  for (let subKey in subObj) {
    let innerObj = subObj[subKey];
    
    for (let innerKey in innerObj) {
      sum177_2 += innerObj[innerKey];
    }
  }
}

console.log(sum177_2);

// глава 178

let students178_1 = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};
console.log(students178_1['group3'][0]);

// глава 179

let data179_1 = {
  1: [
    'data11',
    'data12',
    'data13',
  ],
  2: [
    'data21',
    'data22',
    'data23',
  ],
  3: [
    'data31',
    'data32',
    'data33',
  ],
  4: [
    'data41',
    'data42',
    'data43',
  ],
};

for (let key in data179_1) {
  for (let item of data179_1[key]) {
    console.log(item);
  }
}

let data179_2 = [
  {
    1: 'data11',
    2: 'data12',
    3: 'data13',
  },
  {
    1: 'data21',
    2: 'data22',
    3: 'data33',
  },
  {
    1: 'data31',
    2: 'data32',
    3: 'data33',
  },
];

for (let obj of data179_2) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}

let data179_3 = [
  {
    1: [
      'data111',
      'data112',
      'data113',
    ],
    2: [
      'data121',
      'data122',
      'data123',
    ],
  },
  {
    1: [
      'data211',
      'data212',
      'data213',
    ],
    2: [
      'data221',
      'data222',
      'data223',
    ],
  },
  {
    1: [
      'data411',
      'data412',
      'data413',
    ],
    2: [
      'data421',
      'data422',
      'data423',
    ],
  },
];

for (let obj of data179_3) {
  for (let key in obj) {
    for (let item of obj[key]) {
      console.log(item);
    }
  }
}

// глава 180

let employees180_1 = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];

for (let employee of employees180_1) {
  console.log(employee.name + ' - ' + employee.salary);
}

let employees180_2 = [
  {
    name: 'name1',
    salary: 300,
  },
  {
    name: 'name2',
    salary: 400,
  },
  {
    name: 'name3',
    salary: 500,
  },
];

let totalSalary180_2 = 0;

for (let employee of employees180_2) {
  totalSalary180_2 += employee.salary;
}

console.log('Сумма зарплат всех работников: ' + totalSalary180_2);

let employees180_3 = [
  {
    name: 'name1',
    salary: 300,
    age: 28,
  },
  {
    name: 'name2',
    salary: 400,
    age: 29,
  },
  {
    name: 'name3',
    salary: 500,
    age: 30,
  },
  {
    name: 'name4',
    salary: 600,
    age: 31,
  },
  {
    name: 'name5',
    salary: 700,
    age: 32,
  },
];

let totalSalaryAbove30_1803 = 0;

for (let employee of employees180_3) {
  if (employee.age >= 30) {
    totalSalaryAbove30_1803 += employee.salary;
  }
}

console.log('Сумма зарплат работников старше или равных 30 лет: ' + totalSalaryAbove30_1803);

// глава 181

let months181_1 = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
};

let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5;   // число от 0 до 11

console.log(months181_1[lang][month]);

let affairs181_2 = {
	'2018': {
		11: {
			29: ['дело111', 'дело112', 'дело113'],
			30: ['дело121', 'дело122', 'дело123'],
		},
		12: {
			30: ['дело211', 'дело212', 'дело213'],
			31: ['дело221', 'дело222', 'дело223'],
		},
	},
	'2019': {
		12: {
			29: ['дело311', 'дело312', 'дело313'],
			30: ['дело321', 'дело322', 'дело323'],
			31: ['дело331', 'дело332', 'дело333'],
		}
	},
}

let year = '2018';
let months181_2 = 11;
let day = 30;
console.log(affairs181_2[year][months181_2][day]);

let obj181_3 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj181_3[key1][key2]);

let obj181_4 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1_4 = 'key2';
let key2_4 = 'key4';
console.log(obj181_4.key1['key2']);

let obj181_5 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1_5 = 'key2';
let key2_5 = 'key4';
console.log(obj181_5[key1_5][key2_5]);

let obj181_6 = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1_6 = 'key2';
console.log(obj181_6[key1_6]['key4']);

// глава 182

let employees182 = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
];

employees182.push({
name: 'name4',
salary: '600',
age: '40'
});

console.log(employees182);