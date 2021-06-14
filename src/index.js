/**
 * const,letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "歳宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// val3 = "constは上書きだめ";

// const val3 = "constを再宣言";

// const val4 = {
//   name: "ジャケぇ",
//   age: 28,
//   address: "hiroshima"
// };

// val4.name = "jak";
// val4.address = "hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ジャケぇ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "ジャケぇ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です 年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name} 年齢は${age}`;
// console.log(message2);

// const myProfile = ["ジャケぇ", 28];

// const message3 = `名前は${myProfile[0]}です　年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `名前は${name} 年齢は${age}`;

// console.log(message4);

/**
 * デフォルト値, 引数など
 */

// const seyHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);

// seyHello();

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];

// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilter
 */
const nameArr = ["tanaka", "yamada", "jake"];

// 従来
// for (let s

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "jake") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
//  */
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値入力";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100超えた" : "許容範囲内";
// };

// console.log(checkSum(50, 40));
