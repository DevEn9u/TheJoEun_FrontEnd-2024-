/**
 * 복합(참조) 자료형: 함수, 싱글턴객체, 배열, 정규표현식, 생성자함수, 내장객체
 * object 
 */
const numArr = [
  [1, 2, 3, 4, 5], 
  [10, 20, 30 , 40, 50]
];

// quiz 1. numArr의 요소 중 50에 접근
console.log(numArr[1].indexOf(50)); // 4
// 배열 2개 중 2번째 배열을 선택하기 위해 1, 그다음 배열 안에서 50의 위치 4 
console.log(numArr[1][4]); // 50
// 순서가 변경돼도 찾으려면 변수에 할당
let idx = numArr[1].indexOf(50);
console.log(numArr[1][idx]); // 50

console.log('=================================');



const fruits = ['사과', '배', '딸기'];
console.log(typeof fruits); // object
console.log(fruits.length); // 3
console.log(fruits[2]); // 딸기
console.log(fruits.indexOf('사과')); // 0

// quiz 2. 배열요소 '딸기'앞에 바나나를 추가하시오(딸기요소의 위치는 모름)
console.log(fruits.indexOf('딸기')); // 2
fruits.splice(2, 0, '바나나'); 
console.log(fruits); // splice()의 반환값은 삭제한 값이기 때문에 fruits를 출력해야함


// quiz 3. 과일배열에 '는 맛있어'를 모두 추가하시오. (forEach)
fruits.forEach((v, i) => fruits[i] += '는 맛있어');
console.log(fruits);



const numArr2 = [100, 200, 300];
// quiz 4. numArr에 *5를 하여 새로운 배열로 만들기(map)
const newArr2 = numArr2.map((v, i) => {
  return v * 5
});
console.log(newArr2); // [500, 1000, 1500]

// quiz 5. 원본배열중 200이상인 요소로 이루어진 새로운 배열을 만드시오.(filter)
const newArr3 = numArr2.filter((v) => {
  return v >= 200;
});
console.log(newArr3); // [200, 300]

// quiz 6. 모든 배열요소가 특정조건을 만족하는지 확인 (every)
// true / false 가 return됨
const result = numArr2.every((v) => {
  return v >= 200;
})
console.log(result); // false

// quiz 7. 원본배열의 왼쪽요소부터 오른쪽으로 연산해줌(누산)(reduce)
let sum = numArr2.reduce((prev, current) => {
  return prev + current;
})
console.log(sum); // 600
console.log('=====================JSON====================');

/**
 * JSON (JavaScript Object Notation)
 * Frontend와 Backend의 객체 표기법이 달라 data를 주고받을 때 사용
 * 
 */
const car = {
  name: 'car1',
  model: 400,
  color: 'black',
}
console.log(car);

// JSON 문자열로 변경 JSON.stringigy()
const carJSON = JSON.stringify(car);
console.log(carJSON);

// ''를 사용할 때 문자열은 줄바꿈이 되지 않아 backtick(``)사용
const studentJSON = `{
  "grade":90,
  "studentName":"james",
  "pass":true
}`;
// JSON을 js 객체로 변경
const student = JSON.parse(studentJSON);
console.log(student.grade);


// 문자열 앞뒤 공백제거 trim(), 문자 사이 공백은 의도적으로 넣은거라 제거 안함
let str = '   h   i    ';
console.log(str);


str = str.trim();
console.log(str); // h    i