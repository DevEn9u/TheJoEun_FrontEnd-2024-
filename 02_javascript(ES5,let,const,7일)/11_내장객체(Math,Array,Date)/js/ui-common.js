/**
 * 1) Math
 * 2) Array
 * 3) Date
 */

/** Array
 * concat(): 배열합침, 원본 배열 변화 없음
 * join(): 배열을 문자로 변경, 구분자로 빈칸 사용시 문자열 연결됨
 * shift(): 배열의 시작에 요소 제거
 * unshift(): 배열의 시작에 요소 추가
 * reverse(): 배열의 순서롤 반대로 만듬
 * slice(): 원본 배열 변화 없음, splice는 변화 있음
 * 
 */
const fruit = ['사과','배', '딸기'];
const fruit2 = ['바나나', '포도'];

// concat()
const fruit3 = fruit.concat(fruit2);
console.log(fruit3);

// join()
console.log(fruit.join()); // 사과,배,딸기
console.log(fruit.join('')); // 사과배딸기

// shift(), unshift(): 배열에 변화 있음
console.log(fruit.shift()); // 사과(삭제된 값이 return)
console.log(fruit); // 배, 딸기

console.log(fruit.unshift('사과')); // 3: 배열의 item 수
console.log(fruit); // 사과, 배, 딸기

// reverse()
console.log(fruit.reverse()); // 딸기, 배, 사과

/**
 * slice(): 배열 변화 없음, splice는 변화 있음
 * slice(시작점, 범위선택), 음수 사용 가능
 */ 
const numArr = [10, 20, 30, 40];
console.log(numArr.slice(0, 2)); // 10, 20
console.log(numArr); // 10, 20, 30, 40

console.log(numArr.splice(0, 2)); // 10, 20
console.log(numArr); // 30, 40

// sort(): 배열 내 item을 오름차순으로 정렬, 원본 배열 변화
// 원래 string에 적용하는 것이라 숫자는 return값 정해줘야함
// return a - b: 오름차순
// return b - a :내림차순

// 문자열 오름차순
const korArr = ['가', '나', '차', '다', '마'] 
console.log(korArr.sort());

// 숫자열 오름차순
const numArr2 = [100, 25, 10, 40];
numArr2.sort((a, b) => {
  return a - b;
})
console.log(numArr2);

// 문자 내림차순 정렬
//  sort() 메서드의 return이 배열이므로 reverse 이용
console.log(korArr.sort().reverse()); // 차, 마, 다 ,나, 가

console.log('---------------------------');

// Date객체
const now = new Date();
console.log(now.toLocaleString()); // YYYY. MM. DD. 오전/오후 HH:MM:SS 
console.log(now.toLocaleTimeString()); // 오전/오후 HH:MM:SS



/** Math
 * floor(): 소수점 버리고 정수 변환
 * 
 */
let num = 10.49;
// floor(): 소수점 버리고 정수 변환
console.log(Math.floor(num)); // 10
// round(): 소수점 첫째자리에서 반올림
console.log(Math.round(num)); // 10
// ceil(): 소수점 첫째자리에서 올림
console.log(Math.ceil(num)); // 11

// random():랜덤수 만들기(0 - 1미만의 랜덤한 소수)
console.log(Math.random);

console.log('===================');
// quiz 1. 0 - 9까지의 랜덤수 만들기
for (let i = 0; i < 10; i++) {
  console.log(Math.floor(Math.random() * 10));
}
console.log('===================');

// quiz 2. 0 - 10까지의 랜덤수 만들기(11개 숫자)
for (let i = 0; i < 11; i++) {
  console.log(Math.floor(Math.random() * 11 ));
}
console.log('===================');

// quiz 3. 11 - 50까지 랜덤수 만들기(40개의 수)
for (let i = 0; i < 40; i++) {
  console.log(Math.floor(Math.random() * 40 + 11));
}
console.log('======================');
/**
 * random 정수 공식
 * Math.floor(Math.random() * 만들 정수 개수 + 초기값)
 */
// quiz 4. 100 - 110까지 랜덤수 11개 만들기
for (let i = 0; i < 11; i++) {
  console.log(Math.floor(Math.random() * 11 + 100));
}