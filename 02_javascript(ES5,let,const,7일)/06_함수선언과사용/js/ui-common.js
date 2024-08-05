// 선언 전 호출 가능, 호이스팅됨
fn1();
// 함수표현식은 호이스팅 안됨
// fn2();

// 함수선언
// 함수 선언식은 호이스팅(선언부 코드가 먼저 읽힘)이 되므로 선언 위치에 관계 없이 호출이 가능함
// 모든 함수에는 return undefined; 가 생략되어 있음
function fn1() {
  console.log('함수선언문');
  // return undefined;
}
// 함수를 호출하여 실행
fn1()


/**
 * 매개변수(parameter)와 return값
 * 매개변수: 전달된 인자를 받아주는 지역변수,
 * return 값: 함수내부의 결과를 밖으로 내보냄, 함수 실행을 종료할 때도 사용.
 */
function sum(x, y) {
  return x + y;
}
// 함수실행시 전달되는 값을 인자(수학에서는 인수, arguments)라고 함
let result = sum(10, 20);
console.log(result);

// 가변인자함수: arguments 유사배열에 인자가 모두 들어있음
function calc() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
calc(5, 20, 30, 100); //[Arguments] { '0': 5, '1': 20, '2': 30, '3': 100 }
console.log('--------------------');

// quiz 1. arguments의 값을 다 더한 값을 return하여 console 출력하시오.
function calc2() {
  // arguments의 값을 저장해줄 변수 필요
  let num3 = 0;
  for (let i = 0; i < arguments.length; i++) {
    // num3에 arguments의 값을 더해서 저장
    num3 += arguments[i];
  }
  return num3;
}
let result2 = calc2(5, 20, 30, 100);
console.log('합계: ' + result2);

// 함수 스코프: 함수의 포함관계
// 스코프 외부에서 내부로는 접근이 불가하고 내부에서 외부로만 접근 가능
function outerFn() {
  fn1(); // 위에서 실행한 fn1()함수는 outerFn() 밖에 있기 때문에 호출 가능
  console.log('외부 함수 호출');
  // 함수 내부에서만 사용하는 함수는 내부 함수로 선언
  function innerFn() {
    console.log('내부 함수 호출');
  }
  innerFn(); // 실행됨
}
outerFn();
// innerFn(); 실행되지 않음

// callback function: 함수실행시 인자로 전달되는 함수
function fn3(callback) {
  console.log('fn3 함수 실행');
  callback(); // callback()을 위로 올리면 먼저 실행, 즉 함수 순서 통제 가능
}

// 이름을 만들어도 되지만 아래 arrow function을 쓴 것을 보면 더 간단하게 작성 가능
// function callbackFn() {
//   console.log('콜백 함수 실행');
// }

fn3(() => console.log('콜백 함수 실행'));

// 재귀함수: 함수 내부에서 자신을 다시 호출하는 함수
function factorial(num) {
  if(num === 1){
    return 1;
  }

  return num * factorial(num - 1);
}

let facResult = factorial(5); // 5 * 4 * 3 * 2 * factorial(1) = 120
console.log(facResult);

/** 
 * 즉시 실행 함수 (IIFE, Immediately Invoked Function Expression)
 * 익명함수(anonymous function)를 감아서 실행하는 형태
 */
// 함수에서 ()는 실행하라는 의미
(function () {
  console.log('즉시 실행 함수');
})();
