/**
 * Hoisting
 */
console.log('Hello'); // 무조건 첫 번째 먼저 실행되고 두 번째가 실행됨.
console.log('World');

/**
 * console.log(name); 변수 선언 전 출력시 undefined 출력됨.
 * var name = 'james';
 * console.log(name);
 * 컴퓨터는 이것을 아래 코드처럼 이해함.
*/
// var name;
// console.log(name);
// name = 'james';
// consoel.log(name);

/** 
 * Hoisting이란?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상.
 * 실제로 이동하는 것은 아님.
 * 
 * let과 const도 hoisting이 된다!(인터뷰에서 많이 나오니 잘 알아둘 것)
 */
console.log(wendy); // let과 const는 값을 initialization(초기화)하기 전에 access 할 수 없다. 
let wendy = '웬디';
// 즉 let과 const가 호이스팅이 안되는 것이 아니라, 호이스팅은 되지만 초기화 전 접근할 수 없다는 특성을 가지고 있다.
// 이 때문에 값의 초기화 전 값을 갖고와버리는 오류를 범하는 var를 쓰지 않고 let을 사용하는 것이다.
