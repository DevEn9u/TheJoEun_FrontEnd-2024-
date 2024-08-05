/**
 * let, const
 * block scope이며 선언 전에 사용불가
 * const는 상수이므로 값 재할당 불가
 *  
 */
function fn1() {
  let x;
  
  {
    const x = 'sneaky'
    console.log(x);
  }

  x = 'inner';
  console.log(x);
}
fn1();

// var i는 전역 변수
for(var i = 0 ; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
console.log(i); // 3

// for 블럭에 선언된 let i는 지역 변수, 밖에서 참조 불가
for(let j = 0 ; j < 3; j++) {
  console.log(j); // 0, 1, 2
}
// console.log(j);

// 전역변수 
let greeting = '안녕';

if (true) {
  // if 블럭 안에서 선언했으니 지역변수
  let greeting = '하이';
  console.log(greeting);
}

/**
 * Arrow Function
 * 함수의 인자로 전달되는 콜백함수(익명함수)에 사용
 * eventHandler, 객체 메서드에서 사용하면 this가 가리키는 대상이 달라지기 때문에 사용금지
 * Arrow function의 this는 부모함수의 this와 일치
 * 매개변수가 하나면 () 생략이 가능하고, 실행문이 한줄일 때  {return} 생략 가능
 */

// quiz 2. 
const evens = [2, 4, 6, 8, 10];
const odds = evens.map(v => v + 1);
const nums = evens.map((v, i) => v + i);
console.log(odds); // [3, 5, 7, 9, 11]
console.log(nums); // [2, 5, 8, 11, 14]

// 객체 return시 소괄호()로 묶어줘야 함
const pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(pairs);

// quiz 3. nums배열 요소를 5로 나눈 나머지가 0인 요소만 새로운 배열로 만들기
const fives = nums.filter(v => v % 5 === 0);
console.log(fives);

// Es6 객체 메서드는 원래문법 사용할 것
const bob = {
  name: 'bob',
  // ts에서 유형 선언 안되는 문제 있으니 사용 x
  // printName() {}
  printName: function() {
    // 객체 메서드 안에서 this는 해당 객체
    console.log(this.name);
  },
}
bob.printName(); // bob

/**
 * Template literals
 * backtick(``)으로 표현
 * 문자열 인터폴레이션 ${}으로 감싸서 +연산자 없이 문자열 삽입 가능
 * \n으로 줄바꿈 가능.
 */
let txt = "문자열에 '작은 따옴표' 넣기"
let txt1 = `문자열에 '작은 따옴표' 넣기`
console.log(txt);
console.log(txt1);

let name = 'Tiger';
let age = 13;
console.log('우리 고양이의 이름은 ' + name + '이고 나이는 ' + age +  '세 입니다');
console.log(`우리 고양이의 이름은 ${name}이고 나이는 ${age}세 입니다.`);
// 함수 적용 가능
console.log(`우리 고양이의 이름은 ${name.toUpperCase()}이고 나이는 ${age * 10}세 입니다.`);

// 줄바꿈
let animal = `멍멍이\n사자`
let animal1 = `멍멍이
사자`;
console.log(animal);
console.log(animal1);

console.log('------------------------------');

//  문자열, 배열 추가 메서드
let txt3 = '사과는 맛있어';
let subTxt = '사과';
// includes(): 찾는 문자열이 있을 때 사용, 있으면 true
console.log(txt3.includes(subTxt)); // true

// repeat(): 반복
console.log('best'.repeat(3)); //bestbestbest

// find(): 해당 문자열이 있는 첫번재 요소 return
const pets = ['고양이', '개', '앵무새'];
let searchPet = pets.find((v) => v === '고양이');
console.log(searchPet); // 고양이

// findIndex(): 해당 문자열이 있는 index값 return
let searchIndex = pets.findIndex((v) => v === '고양이');
console.log(searchIndex); //0


/**
 * 구조분해
 * 배열, 객체에서 값을 추출하여 새로운 변수에 할당하여 사용
 * 객체 구조분해시 객체 키를 변수명으로 사용
 */
const arr = [1, 2, 3, 4];
let [a, b, c, d] = arr;
console.log(a, b, c, d); // 1, 2, 3, 4 / 배열을 구조분해하여 각 변수에 할당

// 건너뛸 요소에서 쉼표(,)로 필요한 요소만 할당 가능
const arr2 = [5, 6, 7, 8];
let [e, ,g] = arr2;
console.log(e, g); // 5, 7

// 객체 구조분해
// 객체 구조분해시 객체 키를 변수명으로 사용하나 해당 변수명을 이미 사용중일 경우 다른 이름의 변수에 할당
const luke = {
  job: 'jedi',
  father: 'anakin',
};

// 객체 key를 변수명으로 사용
// let { job, father} = luke;
// console.log(job, father); // jedi anakin

// 변수명이 이미 사용중일 경우 다른 이름 사용 가능
let { job: hobby, father: dad } = luke;
console.log(hobby, dad); // jedi anakin

// 객체 리터털
let fruit = '사과';
let modelNo = 'N1345';

const obj = {
  // 변수명과 값을 속성으로 바로 사용
  fruit, // fruit: '사과'
  // 계산된속성: 변수의 값을 key로 사용하는 경우, 대괄호[] 사용
  [modelNo]: 100, // N1345: 100
};
console.log(obj);
console.log('==================');

/**
 * 기본(default), 나머지(rest) 매개변수, 스프레드 연산자
 * !) default: 매개변수에 인자가 전달되지 않을 경우 기본값 할당
 * 2) rest: ...rest로 작성, 
 */
// 1) default 매개변수
function fn2(x, y = 12) {
  return x + y;
}
console.log(fn2(2)); // 14, 2 + 12 = 14

// 2) ...rest(나머지) 매개변수로 가변인자함수 생성
// 위에 txt 변수를 선언했지만 여기서 txt는 함수 블럭안에 매개변수로 지역변수기 때문에 상관없음
// 배열로 return
// rest는 일반 배열이기 때문에 for..of나 forEach() 사용 가능
function fn3(txt, ...rest) {
  console.log(txt, rest); // 합계 : [ 10, 20, 30 ]
}
console.log(fn3('합계: ', 10, 20, 30));

function fn4(txt, ...rest) {
  let sum = 0;

  rest.forEach(v => (sum += v));
// for of 반복문은 forEach()와 다르게 break와 coninue 사용 가능
  // for (v of rest) {
  //   if (v === 30) break;
  //   sum += v;
  // }

  return sum;
}
console.log(fn4('합계: ', 10, 20, 30, 40));

// 3) 스프레드 연산자
function fn5(x, y, z) {
  return x + y + z;
}
const arr3 = [1, 2, 3];
// 배열요소를 전개(spread)하여 매개변수로 전달
console.log(fn5(...arr3));

// 배열 복사
// 배열 요소를 전개하여 배열 안에 넣음
// 전개해서 새로운 배열에 할당하였기 때문에 서로 다른 배열이 생성
const newArr = [...arr3];
console.log(newArr);

console.log(newArr === arr3); // false

newArr.push(4);
console.log(newArr); // [ 1, 2, 3, 4 ]

/**
 * forEach(): value와 index가 모두 필요한 경우 사용, 배열에서 주로 사용
 * for...in: 객체의 key 또는 value를 확인할 때 사용
 * for...of: break와 continue를 사용해야 할때 사용, index값 못받음
 */

/**
 * Promise 객체
 * data fetch시 성공/실패 여부에 따라 로직을 처리하게 해주는 객체
 * 비동기 로직(데이터 가져오기)이 성공하면 resolve()가 반환되어 .then()이 호출되어 실행되고, 실패하면 reject()가 반환되어 .catch()가 호출되어 실행됨
 * javaScript의 비동기적 방식으로 실행되는 객체
 * pending: 지정한 opertaion을 수행중일 때
 * fulfiled: operation을 성공적으로 마무리했을 때
 * rejected: 파일을 찾을 수 없거나 문제가 있을 때
 * resoleve와 reject는 기본함수이고 Promise의 매개변수로 제공됨
 * 성공하면 resolve, 실패하면 reject 실행
 * doing some heavy work (network, read files): network 관련이나 무거운 작업은 promise를 만들어 비동기적으로 처리하는 것이 좋다.
 * .message 프로퍼티는 message 내용만 볼 수 있음
 */
// function promise(param) {
//   return new Promise((resolve, reject) => {
//     if (param) {
//       resolve('완료');
//     } else {
//       reject(new Error('error!'));
//     }
//   })
// }
// promise(false)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));


/**
 * Promise Chaining
 * Promise.then의 return이 Promise 객체이므로 .then으로 열결하여 순차 실행
 * 데이터를 가져온 후 .then으로 순차적으로 코드를 실행할 수 있음
 */
// 1초 뒤 resolve에 1이 인자로 들어간 함수 실행
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 3000);
// })
//   .then((result) => {
//   alert(result); // 1
//   // result의 return값이 result * 2
//   // then()메서드의 return은 Promise 객체
//   return result * 2;
// })
//   .then((result) => {
//   alert(result); // 2
//   return result * 2;
// })
//   .then((result) => {
//   alert(result); // 4
//   return result * 2;
// });


/**
 * fetch() method & Promise chaining
 * fetch()의 return은 Promise 객체, then(), catch() 메서드 사용가능
*/

// fetch() method로 데이터를 가져와서 화면에 보여주기
// window.addEventListener('DOMContentLoaded', function() {
//   const tit = document.querySelector('.tit');
//   const txt = document.querySelector('.txt');

//   // data를 get방식으로 가져오기
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => 
//     // js 객체로 변환
//     response.json())
//     .then((result) => {
//       tit.innerHTML = result.title;
//       txt.innerHTML = result.body;
//     });
// });


/**
 * async, await 키워드로 비동기 로직을 동기적(순차적으로 실행)
 * async 키워드를 쓰면 비동기 함수가 되고 반드시 Promise를 반환
 */
async function fn6() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('완료'), 1000);
  });
  // await 키워드는 async 함수안에서 사용가능, Promise 완료시까지 기다림
  let result = await promise;
  alert(result);
};
fn6();

// fetch메서드에서 async, await 사용하기
window.addEventListener('DOMContentLoaded', function() {
  const tit = document.querySelector('.tit');
  const txt = document.querySelector('.txt');

  async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    tit.innerHTML = post.title;
    txt.innerHTML = post.body;
  }
  getData();
});
