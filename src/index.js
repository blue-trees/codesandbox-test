// const name = "きよ";
// const age = 29;

// const message1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message1);

// /**
//  * アロー関数
//  */

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }

// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile = {
//   name : "kiyo",
//   age : 29,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["kiyo", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前${name}年齢${age}`;
// console.log(message4);

/**
 * デフォルト値、引数
 */

// const sayHello = (name = "kiyo") => {
//   console.log(`こんにちは${name}さん`);
// }

// sayHello("kiyoyoyo");

/**
 * スプレッド構文...
 */
// //配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4,...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

/**
 * mapやfilter
 */
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name + "さん";
// })
// console.log(nameArr2)

// nameArr.map((name) => console.log(name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=> {
//   if(name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を設定しろ";
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? "100を超えてる" : "許容範囲";
// }

// console.log(checkSum(50,40));

// const fee = null;
// const fii = null;
// const result = fee || fii;
// console.log(result);
