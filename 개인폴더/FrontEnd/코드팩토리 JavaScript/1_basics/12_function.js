/**
 * function
 */

/**
 * 2 * 10 / 2 % 3 의 값을 string으로 변환해서 반환하고싶다면?
 */
console.log((2 * 10 / 2 % 3).toString());
// 만약 2가 아닌 3에도 하고 싶고 4에도 하고싶다면?
console.log((3 * 10 / 2 % 3).toString());
console.log((4 * 10 / 2 % 3).toString());
// 하지만 이는 반복적임.
/**
 * 개발자가 하지 말아야할 원칙
 * DRY
 * D: Don't
 * R: Repeat
 * Y: Yourself
 */

function calculate() {
  console.log((2 * 10 / 2 % 3).toString());
}
calculate();
 
function calculate(number) {
  console.log((number * 10 / 2 % 3).toString());
}
calculate(4);

/**
 * Parameter: 함수에서 입력받는 값
 * 
 * Argument: 실제 입력값
 */

function multiply(x, y) {
  console.log(x * y); 
}
multiply(2, 4);

function multiply(x, y = 10) { // default parameter: y를 따로 입력하지 않으면 10
  console.log(x * y); 
}

multiply(2, 4); // 8
multiply(2); // 20
console.log('----------');

/**
 * 반환받기 return
 * 값을 함수 내부에서 작업한 값을 함수 외부에서 받을 수 있음.
 */

function multiply1(x, y) {
  return x * y;  
}
const result1 = multiply1(2, 4); // 2 * 4의 결과값을 return하여 result1에 저장.
console.log(result1);

const result2 = multiply1(4, 5);
console.log(result2);

/**
 * Arrow function
 */
const multiply3 = (x, y) => {
  return x * y;
}
console.log(multiply3(3, 4));

const multiply4 = (x, y) => x * y; // multiply3 함수를 작성한 코드와 동일하지만 단순하게 작성 가능.
console.log(multiply4(3, 4));

const multiply5 = x => (x * 2); // parameter가 1개라면 (x)에서 괄호 생략 가능.
console.log(multiply5(2));

// 복잡한 arrow function example
const multiply6 = x => y => z => `x: ${x} y: ${y} z: ${z}`
console.log(multiply6(2)(5)(8));

function multiply7(x) { // multiply6의 일반 함수 version
  return function(y){
    return function(z){
      return `x: ${x} y: ${y} z: ${z}`;
    }
  }
}
console.log(multiply7(2)(5)(8));

const multiplyTwo = function(x, y) { // Arrow function 대신 일반함수 써도 됨.
  return x * y;
}
console.log(multiplyTwo(4, 5));

// arguments keyword
const multiplyThree = function(x, y, z) {
  console.log(arguments); // 함수를 실행할 때 실제 x, y, z에 입력되는 값 반환.
  return x * y * z;
}

console.log(multiplyThree(3, 2, 4));

const multiplyAll = function(...arguments) { // 원하는 만큼 무한대로 parameter 받을 수 있음.
  return Object.values(arguments).reduce((a, b) => a * b, 1)
}
// return Object.values(arguments): arguments 값을 다 반환

console.log(multiplyAll(3, 4, 5, 6));

// immediately invoked function: 즉시 실행 함수
(function(x, y) { // function의 이름 없이 선언 가능
  console.log(x * y); 
})(4, 5)

console.log(typeof multiply); // function
console.log(multiply instanceof Object); // true
// A instanceof B : A(obj)가 B(Class)의 객체인가?
