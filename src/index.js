/**
 * cosnt let　の宣言
 */
var val1 = "var変数";
console.log(val1);

// varは上書き可能
val1 = "上書きされました";
console.log(val1);

// varは再宣言もできる
var val1 = "再宣言されました";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "上書きされました";
console.log(val2);

// letは再宣言できない
// let val2 = '再宣言できません';

const val3 = "const変数";
console.log(val3);

// constは上書きできない
// val3 = 'constを上書き';
// console.log(val3);

// constは再宣言できない
// const val3 = '再宣言';
// console.log(val3);

// constで定義したプロパティは変更が可能
const val4 = {
  name: "jasmine",
  age: 18
};
console.log(val4);

val4.name = "rose";
val4.age = 20;

// constで定義した配列のプロパティの変更も可能
const val5 = ["bird", "cat"];
val5[0] = "dog";
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "ラテちゃん";
const age = 1;

// 古い書き方
const sentence = name + "の年齢は" + age + "歳です";
console.log(sentence);

// テンプレート文字列を使った時の書き方
const sentence2 = `${name}の年齢は${age}歳です`;
console.log(sentence2);

/**
 * アロー関数
 */
const moji = (str) => {
  return str;
};
console.log(moji("uc"));

// 1行の処理の物は1行で処理するものは1行で処理できる
const func1 = (num1, num2) => num1 + num2;

console.log(func1(1, 2));

/**
 * 分割代入
 */
const petDog = {
  name: "メルちゃん",
  age: 13
};

const sentence3 = `${petDog.name}は${age}歳です`;
console.log(sentence3);

const petCat = ["ラテちゃん", 1];
const sentence4 = `${petCat[0]}は${petCat[1]}歳です`;
console.log(sentence4);

const [catname, catage] = petCat;
const sentence5 = `${catname}は${catage}歳です`;
console.log(sentence5);

/**
 * デフォルト値　引数
 */
const hello = (name = "ras") => console.log(`こんにちは${name}さん`);
hello();

// 上記は何も定義しないとundefinedになる

const hello2 = (name) => console.log(`こんにちは${name}さん`);
hello2();

/**
 * スプレッド構文
 */
// 配列の展開
const Arry1 = [1, 2];
const sumfunc = (num1, num2) => console.log(num1 + num2);
sumfunc(Arry1[0], Arry1[1]);
sumfunc(...Arry1);

// まとめる
const Arry2 = [1, 2, 3, 4, 5];
const [num1, num2] = Arry2;
console.log([num1, num2]);

const [num4, num5, ...arry3] = Arry2;
console.log(...arry3);

//配列のコピー結合
const arry4 = [1, 2];
const arry5 = [3, 4];

const arry6 = [...arry4];
console.log(arry6);

/**
 * mapにおける配列の処理
 */
// 従来のやり方
const numArry = [1, 2, 3, 4, 5];
for (var i = 0; i < numArry.length; i++) {
  console.log(i);
}

// mapを使った処理
