console.log(mainNum, _this, $el); 
// undefined undefined undefined 
// 오류는 없지만 변수 값이 설정이 안된 상태

var mainNum = 100; 
var _this = this;
// $는 jQuery 객체를 명시할 때 사용한다
var $el = '문자열';
console.log('-------------');

// hoisting

console.log(mainNum2); // undefined
var mainNum2 = 100;
console.log(mainNum2);

/** 컴퓨터의 이해 방식
 * var mainNum2;
 * console.log(mainNum2);
 * mainNum2 = 100;
 * console.log(mainNum2);
*/

// let, const는  hoisting은 되지만 변수 initialization(초기화) 이전에 access 할 수 없기 때문에 hositing 고려를 하지 않아도 된다는 장점이 있다. 
console.log(num5);
let num5 = 10;