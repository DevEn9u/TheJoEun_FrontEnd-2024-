/**
 * quiz 1
 * prompt함수로 나이를 입력받아 19살이상이면 '성인'를 콘솔로 출력하고
19살미만이면 '미성년자'를 콘솔에 출력하시오(if)
*/

// let age = prompt('나이를 입력하세요.')

// if (age >= 19) {
//   console.log(`${age}세는 성인입니다.`);
//   alert(`${age}세는 성인입니다.`);
// }
// else if (age < 19) {
//   console.log(`${age}세는 미성년자입니다.`);
//   alert(`${age}세는 미성년자입니다.`)
// }
// else {
//   console.log('잘못된 값을 입력하였습니다.');
//   alert('잘못된 값을 입력하였습니다.')
// }

// 비교연산자
console.log(100 > 1); // true
console.log(100 < 1); // false
console.log(100 >= 1); // true
console.log(100 <= 1); // false
console.log(100 == 10 * 10); // true
console.log(10 != 100); // true
console.log('-----------------------');

/**
 * quiz 2
 * 숫자를 prompt로 입력받고 홀수, 짝수를 판단하시오(if)
 */
//  let num = prompt('숫자를 입력하세요.')

//  if (num % 2 == 0) {
//   console.log(`${num}은/는 짝수입니다.`);
//  } else if (num % 2 == 1) {
//   console.log(`${num}은/는 홀수입니다.`);
//  }

 /**
  * quiz 3
  * 나이를 입력받아 10대(10살 미만도 포함), 20대, 30대 이상으로 출력하시오.
  */

 let age = prompt('나이를 입력하세요.')
 if (age >= 30) {
  console.log('30대 이상입니다.');
 } else if (age >= 20 && age < 30) {
  console.log('20대입니다');
 } else {
  console.log('10대입니다.');
 } 

/**
 * 논리연산자
 * 1) &&
 * 2) ||
 */

// 1) and 연산자 &&, 조건이 모두 true이어야만 true 반환
console.log(true && true); // true
console.log(true && false); // false

// 2) or 연산자 ||, 조건 중 하나라도 true이면 true 반환.
console.log(true || true); // true
console.log(true || false); // true

console.log('---------------');

/**
 * false 판정되는 경우
 * 1) false라고 명시했을 떄
 * 2) 0
 * 3)'' , 문자열에 아무런 값도 입력되지 않았을 때
 * 4) undefined
 * 5) null
 * 6) NaN
 */
let test = 'string' * 100;

if (test) {
  console.log('true');
} else {
  console.log('false');
}

/**
 * quiz 4
 * 아이디가 맞으면 패스워드가 맞는지 판단하여 로그인시키기
 * 아이디가 없으면 아이디없음 출력, 패스워드가 틀리면 패스워드 틀림 출력
 * 중첩if문 이용 
 */

let UserId = 'james'
let password = '1234'

if (userId == 'james') {
  console.log('Id를 확인하였습니다.');
  if (password == '1234') {
    console.log('로그인에 성공하였습니다.');
  } else {
    console.log('비밀번호를 확인하세요.');
  }
} else {
  console.log('Id를 확인하세요.');
}

/**
 * 일치연산자
 * ===(값과 자료형이 모두 일치하는지 비교)
 * !==(값과 자료형이 모두 다른지 비교)
 * 조건문에서는 동등연산자 '=='를 쓰지 않고 무조선 일치연산자 사용
 */
if ('' == 0) {
  console.log('참');
} // 참

if ('' === 0) {
  console.log('참');
} // false기 때문에 출력 안됨.

if (11 === '11') {
  console.log('참');
} // false기 때문에 출력 안됨.
if (11 !== '11') {
  console.log('참');
} // 참

/**
 * quiz 5
 * 혈액형을 prompt로 입력받아 사람의 혈액형인지 판단하시오.
 * 혈액형이 A,B,AB,O이면 사람입니다 아니면 동물입니다 출력(논리연산자)
 * 추가조건: 빈칸일경우 혈액형을 대문자로 입력하세요를 alert으로 띄우기
 */
// trim(): 입력된 값의 전후 공백을 제거해줌
// toUppperCase(): 문자열을 대문자로 변경해줌
// 다중의 메서드를 연결지어 호출 가능: Method Chaining
// toLowerCase(): 문자열을 소문자로 변경해줌

// let bloodType = prompt('혈액형을 입력하세요.')
// bloodType = bloodType.trim().toUpperCase(); 

// if (bloodType === '') {
//   alert('혈액형을 대문자로 입력하세요.');
// } else {
//   if (bloodType === 'A' || bloodType === 'B' || bloodType === 'AB' || bloodType === 'O') {
//     console.log('사람의 혈액형입니다');
//   } else {
//     console.log('사람의 혈액형이 아닙니다.');
//   }
// }

/** quiz 6
 * prompt로 점수를 입력받고 90이상이면 매우우수, 80이상이면 우수, 70이상이면 보통, 60이상이면 미흡, 60미만이면 매우미흡을 콘솔로 출력하시오.
 */

// let score = prompt('점수를 입력하세요.')

// if (score >= 90) {
//   console.log('매우 우수');
// } else if (score >= 80 && score < 90) {
//   console.log('우수');
// } else if (score >= 70 && score < 80) {
//   console.log('우수');
// } else if (score >= 60 && score < 70) {
//   console.log('미흡');
// } else {
//   console.log('매우 미흡');
// }


/**
 * switch 조건문
 * 비교할 값이 많은 경우, 즉 else if를 많이 사용해야 할 때 사용
 */
// let num = prompt('숫자를 입력하세요.');

// switch(num % 2) {
//   case 0:
//     console.log('짝수입니다.');
//   break;
//   case 1:
//     console.log('홀수입니다.');
//   break;
//   default:
//     alert('올바른 값을 입력하세요.');
// }

/**
 * quiz 7
 * prompt로 숫자를 입력받아 짝홀수를 판단하시오(switch 조건문 이용)
 * 조건1: 공백문자나 빈칸일 경우 실행하지않기(if)
 * 조건2: 일반문자일 경우 숫자를 입력하세요 출력하기(default)
 */
let quizNum = prompt('숫자를 입력하세요.');
/** 
 * quizNum이 빈칸이 아니면 실행
if (quizNum !== '') {
  switch(quizNum % 2) {
    case 0:
      console.log('짝수입니다.');
    break;
    case 1:
      console.log('홀수입니다.');
    break;
    default:
    alert('올바른 값을 입력하세요.')
  }
}
*/

/**
 *  quizNum의 값이 true면 실행
if (quizNum.trim()) {
  switch(quizNum % 2) {
    case 0:
      console.log('짝수입니다.');
    break;
    case 1:
      console.log('홀수입니다.');
    break;
    default:
    alert('올바른 값을 입력하세요.')
  }
}
*/

/** 
 * 날짜 객체 Date()
 * 객체 type은 변경을 하지 않기 때문에 const로 변수 선언
 * new 키워드는 생성자 함수를 호출할 때 인스턴스를 만드는 역할을 함
*/
const now = new Date();
console.log(now.getDate());

/** quiz 7
 * date객체를 이용하여 오늘의 요일을 콘솔에 출력하시오(switch)
 */
const now1 = new Date();

switch (now1.getDate()) {
  case 0:
    console.log('일요일 입니다.');
  break;
  case 1:
    console.log('월요일 입니다.');
  break;
  case 2:
    console.log('화요일 입니다.');
  break;
  case 3:
    console.log('수요일 입니다.');
  break;
  case 4:
    console.log('목요일 입니다.');
  break;
  case 5:
    console.log('금요일 입니다.');
  break;
  case 6:
    console.log('토요일 입니다.');
  break;
  default:
  console.log('시스템 날짜에 오류가 있습니다.');
}


/**
 * 삼항 연산자 (Ternary operator)
 * 조건에 의해 실행될 문장이 2개이면서 return 값이 필요할 때 주로 사용
 * 3개 이상일 경우 else if나 switch 사용
 * 불리언 표현식 ? (true일 때 실행) : (false일 때 실행)
 */ 
let num3 = 100;

// num3 % 2 = 0, false임
(num3 % 2) ? console.log('홀수입니다.') : console.log('짝수입니다.');

// 변수가 한 자리 숫자일 때 '0'을 붙여 두 자리로 만들기
// 삼항 연산은 조건이 true면 왼쪽 문장의 결과가 return됨
let num4 = 9;

let num5 = num4 < 10 ? '0' + num4 : num4;
console.log(num5);

/**
 * quiz 8
 * 오늘의 시간을 이용하여 6시이상 20시 미만이면 '낮입니다', 아니면 '밤입니다'를 출력하시오(삼항연산자)
 */
const now2 = new Date();
// now2.setHours(21);
let hour = now2.getHours();
hour >= 6 && hour < 20 ? console.log('낮입니다.') : console.log('밤입니다.');