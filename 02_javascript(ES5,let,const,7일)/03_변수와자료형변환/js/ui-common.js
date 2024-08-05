/**
 * Data type
 * 1) number
 * 2) string
 * 3) boolean
 * 4) undefined
 * 5) null
 * 6) object
 *
 */

// number
let num1 = 999;
console.log(num1, typeof num1);

// string
let str = "hi";
console.log(str, typeof str); // hi string
let str1 = "999";
console.log(str1, typeof str1); // 999 string

// boolean, true와 false
// 토글 동작시 사용
let toggleGnb = true;
console.log(toggleGnb, typeof toggleGnb); // true boolean

// undefined
let userId; // 변수 선언은 하였으나 값을 할당하지 않음
console.log(userId, typeof userId); // undefined undefined

// null - 나중에 객체타입을 변수에 저장할 때 사용
// undefined와 달리 개발자가 직접적으로 값이 없음을 나타내기 위해 사용
let el = null;
console.log(el, typeof el); // null, object이나, object로 뜨는 것은 개발자들이 인정한 js의 오류이지만 객체값이 없음을 나타내기 위해 null을 지정함

// NaN - 문자와 숫자가 곱해질 수 없어 연산오류
console.log('hi' * 10); //NaN

// 초기화
// 문자형 변수: 빈칸 사용
let msg = '';

// 재할당
let msg1 = 'hi'
msg1 = msg1 + ' james'
console.log(msg1); // hi james : ms1의 data값인 'hi'와 'james'가 합쳐져 msg1에 'hi james'가 재할당됨

/**
 * operator
 * 대입연산자 (할당연산자, assignmnet operator)
 * 산술연산자
 * 복합대입연산자
 * 증감연산자
 */
// '=' 는 변수를 선언하거나 초기화할 때 사용
// msg2 = msg2 + ' james'
let msg2 = 'hello'
msg2 += ' james'
console.log(msg2); // hello james


// quiz 복합대입연산자로 num2에 100을 곱해 console 출력
let num2 = 99
console.log(num2 *= 100);
// 나머지 연산자, 홀수 짝수 판단시 사용
console.log(100 % 2);



// 증감연산자 ++, --
// 전위는 사용금지, 후위만 사용
let cnt = 0;
cnt++; // 1
cnt++; // 2
cnt--; // 1
console.log(cnt); // 1



// 내장함수 사용

/**
 * 입력갑을 받는 prompt 메서드
 * let 변수 = prompt('text', 'defaultText');
 * let name = prompt('이름을 입력하세요', '홍길동');
 * 함수를 호출한 곳으로 함수의 return 값이 들어오며 return 값을 변수에 대입하여 사용.
 * return value는 string type
 */ 

// let name = prompt('이름을 입력하세요.'); 
// alert(`${name} 님 환영합니다.`); 방법1
// alert(name + '님 환영합니다.') 방법2

// let name = prompt('이름을 입력하세요');
// document.write(`<b><big>${name}</big></b>님 환영합니다.`)

// if 조건문
// let isOk = confirm('진행할까요?');

// if (isOk) {
//   console.log('진행하겠습니다.');
// } else {
//   (취소);
// }

/**
 * 자료형 변환
 * 1) Number()
 * 문자형에서 숫자형(실수)으로 변경
 * 2) parseInt()
 * 문자형에서 숫자형(정수)으로 변경
 * 뒤쪽에 문자가 있어도 숫자로 형변환
 * 앞쪽에 문자가 있으면 안됨!
 * 
*/
let num3 = '100';
console.log(num3 + 10, typeof (num3 + 10)); // 10010 string, js 동적특성중 하나인 자동형변환이 작동
console.log(Number(num3) + 10); // 110
let num4 = '100원'
console.log(Number(num4) + 10); // NaN
console.log(parseInt(num4) + 10); // 110

console.log('-----------------');

// quiz. 입력된 구매갯수에 보너스를 더하여 출력
// let bonus = 5;
// let amount = prompt('구매개수를 입력하세요.') // 입력받는 값은 문자열

// console.log('총 구매개수: ', parseInt(amount) + bonus);
// // template literal을 사용하여 문자열 인터폴레이션(${})을 사용하면 문자열 인터폴레이션 내 표현식은 문자열로 강제 변환되니 조심.
// alert(`총 구매개수: ${parseInt(amount) + bonus}`);

// 연산 우선 순위는 () 사용
console.log((100 + 200) * 5);