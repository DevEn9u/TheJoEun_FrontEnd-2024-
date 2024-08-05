/**
 * Array (배열)
 * 복합자료형: 배열, 싱글턴객체, 함수, 생성자함수, 정규표현식객체, 내장형객체
 * 배열은 변화를 주면 안되기 때문에 const 변수로 선언
 * 배열은 자료구조중 큐구조(기차 느낌)를 가짐
 */

const fruits = ['사과', '배', '딸기',];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits.length);
console.log(fruits[1]);

/**
 * 배열의 method
 * 1) push(): 배열의 맨 끝에 항목을 추가하고, 추가한 배열의 길이를 반환값으로 가짐
 * 2) pop(): 배열의 맨 끝에 있는 항목을 제거하고 삭제한 값을 반환

 */
// 1) push(): 배열의 맨 끝에 항목을 추가하고, 추가한 배열의 길이를 반환값으로 가짐
fruits.push('포도');
console.log(fruits.push('포도')); // 5
console.log(fruits); // ['사과', '배', '딸기', 포도];

// 2) pop(): 배열의 맨 끝에 있는 항목을 제거하고 삭제한 값을 반환
fruits.pop();
console.log(fruits.pop()); // 포도
console.log(fruits); // ['사과', '배', '딸기'];

console.log('-------------------------------');
/**
 * loop (반복문)
 */

// quiz 1. while 반복문으로 과일배열요소를 출력하시오(조건중심).
// 반복문은 잘못작성시 무한루프 발생
// i++등 식을 작성하여 제한을 둬야함
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

/** 
 * for 반복문(횟수 중심)
 * for(초기식; 조건식; 종결식) {실행할 코드} 
 * i는 index, 지역변수임
 */

fruits.push('바나나');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// quiz 2. for문으로 i를 10부터 1까지 출력하기
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// quiz 3. for문으로 i를 20부터 30까지 출력하기
for (let i = 20; i < 31; i++) {
  console.log(i);
}

// quiz 4. for문으로 i를 5, 10, 15, 20 출력하기
for (let i = 1; i < 5; i++) {
  console.log(i * 5);
}
// 복합대입연산자 +=를 활용한 방법
for (let i = 5; i < 21; i += 5) {
  console.log(i);
}

/** 
 * break와 continue
 * 1) break
 * if (i == 2) {break;} 이면 i가 2가되면 종료하라는 의미
 * 2) continue
 * if (i == 2) {continuw;} 이면 i가 2가되면 해당 차례를 건너뛰어서 진행하라는 의미
 */
// quiz 5. i증가하며 6번 반복하다가 i가 2면 반복문 빠져나오기(break)
// i번째 출력을 문자로 보여주기
let str = '';
for (let i = 0; i < 6; i++) {
  if (i == 2) {
    break;
  }
  str += i + ' 번째 \'출력\n';
}
console.log(str);

// i가 2일때 건너뛰기
for (let i = 0; i < 3; i++) {
  if (i == 2) {
    continue;
  }
  str += i + ' 번째 \'출력\n';
}
console.log(str);
console.log('-------------------------------------');

/**
 * forEach(): 배열 전용 반복문
 * callback function을 인자로 전달
 * 이름이 없는 함수: anonymous function
 * v = value, i = index
 */
// numArr.forEach(function(v, i) {
//   console.log(v, i);
// })

// 배열요소에 5를 곱하여 배열요소 변경
const numArr = [10, 20, 30];

// numArr.forEach(function(v, i) {
//   numArr[i] *= 5;
// });
// console.log(numArr);

/** 
 * Arrow function이용
 * {}와 return 생략 가능
 * anonymous function에서 사용
 */
numArr.forEach((v, i) => numArr[i] *= 5);
console.log(numArr);

// quiz 6. 강의실번호 배열요소에 '호'를 연결하여 배열요소를 변경하시오(forEach)
// 처음배열: classNumber = ['701', '702', '703'];
// 결과 : classNumber = ['701호','702호','703호']
const classNumber = ['701', '702', '703'];

// 함수 선언시 매개변수(지역변수)는 이름변경 가능하며 약자로 표현함
classNumber.forEach((v, i) => classNumber[i] += '호');
console.log(classNumber);


const movieArr = ['타짜', '아저씨', '어벤져스'];
// splice(start, deleteCount, 추가항목);
// pracice 특정 인덱스부터 배열 요소 추가
movieArr.splice(1, 0, '슈퍼맨');
console.log(movieArr); // 타짜, 슈퍼맨, 아저씨, 어벤져스
// 특정 인덱스부터 배열 요소 제거
movieArr.splice(0, 1);
console.log(movieArr); // 슈퍼맨, 아저씨, 어벤져스
// 특정 인덱스 요소 변경
movieArr.splice(1, 1, '할머니');
console.log(movieArr); // 슈퍼맨, 할머니, 어벤져스

console.log('---------------');


/** 
 * quiz 7. 배열요소가 '아저씨'일 경우 할머니로 바꾸기
 * 배열요소의 길이와 위치는 바뀔수있음
 */
const movieArr1 = ['타짜','어벤져스', '아저씨'];
movieArr1.forEach((v, i) => {
  if (v == '아저씨') {
    movieArr1.splice(i, 1, '할머니')
  }
})
console.log(movieArr1);

// quiz 8. 배열요소의 값이 포도일 경우를 제외하고 '는 맛있어' 문자열 연결하기(for문, continue)
// for문은 continue와 break가능, forEach는 continue와 break불가
const fruit2 = ['사과', '딸기', '포도', '키위'];

for (i = 0; i < fruit2.length; i++) {
  if (fruit2[i] == '포도') continue;
  fruit2[i] += '는 맛있어';
}
console.log(fruit2);