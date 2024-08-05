/**
 * Variable declaration
 * camel case 사용
 * 변수 선언시 대입 연산자(할당연산자라고도 부름) ('=')를 사용하여 값을 넣어준다.
 * 선언 순간 특정한 메모리 공간을 확보하고 변수가 메모리 공간의 주소(reference)를 가리킨다 
 */
var mainNum = 100; 
console.log(mainNum);

/**
 * Naming converntion (변수 이름 규칙)
 * 1. 일반적으로 영어 알파벳과 숫자를 모두 사용할 수 있다. 단 숫자가 맨 앞에 올수 없다.
 * 2.키워드를 변수명으로 활용할 경우 '_'와 '$'를 사용할 수 있다.
 * 3. 키워드(function, let, var 등)는 변수명으로 사용할 수 없다.
 */

var _this = this;
// $는 jQuery 객체를 명시할 때 사용한다
var $el = '문자열';
console.log(mainNum, _this, $el);

// var 변수는 함수스코프(범위)를 가짐
// 전역변수를 만들면 다른 개발자의 변수와 겹칠 수 있으니 생성하면 안됨
function fn() {
  var local ='지역변수';

  if (true) {
    var local = '지역변수3'
  }
  console.log(local, '-==-');
}
fn();


function fn2() {
  let local ='지역변수2';
  console.log(local);
}
fn2();

/**
 * var 키워드의 문제점
 * 1) hoisting 문제 발생
 * 변수를 선언하지 않았는데도 선언한 것처럼 작동하여 오류가 생김
 * 2) 함수스코프(범위)를 가짐
 * var는 for문을 사용하게 되면 전역변수처럼 작동함
 * 즉 함수가 아닌 경우 모두 전역변수가 되는 문제가 있음
 * 3) 같은 이름의 변수명을 선언해도 error가 발생하지 않음
 * */
for(var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

var test = 500;
var test = 600;
console.log(test);

console.log('----------------');
/**
 * let, const의 사용
 * var이 여러가지 문제점을 가지고 있기 때문에 사용
 * let과 const는 지역변수이고 { } 안에 선언하면 block scope를 가짐
 * 단 let과 const라는 keyword를 생략하면 전역변수가 되기 때문에 반드시 keyword도 작성
 */

{
  let num = 10000;
  console.log(num);
  num = 20000;
  console.log(num);

  // const는 상수형 변수이기에 값 재할당 불가
  const userID = 'james';
  // userID = 'Mike'
  // console.log(userID, '---'); error 발생
}
for (let j = 0; j < 10; j++) {
  console.log(j);
}
// console.log(j);
// var의 경우 출력이 되었지만 let의 경우는 출력이 안됨. 즉 var는 전역변수이고 let은 지역변수이기 때문에 let을 사용해야함