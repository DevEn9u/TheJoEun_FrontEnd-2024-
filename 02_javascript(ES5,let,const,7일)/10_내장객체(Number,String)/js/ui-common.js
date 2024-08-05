/**
 * 자주 쓰이는 내장 객체
 * 1) Number
 * 2) String
 */
/**
 * 1) Number 객체
 * 생성시 new 키워드를 사용하면 불필요하면 정보가 생성되므로 사용금지
 * let num = new Number(123); // [Number: 123]
 * 
 */
let num = 123.456;
console.log(num.toFixed(2)); // 123.46


/**
 * 2) String 객체
 * charat()
 * concat()
 * indexOf()
 * replace
 */
let str = '안녕하세요';
console.log(str.length);

/**
 * quiz
 * prompt메서드로 비밀번호를 입력받고 8글자미만이면 8글자 이상 입력하라는 alert을 띄우기
 * 8글자 이상이면 비밀번호 길이를 띄워줌
 */

// let pwInput = prompt('비밀번호를 입력하세요(8글자 이상)', '********')

// if(pwInput.length >= 8) {
//   alert(`비밀번호 길이: ${pwInput.length}`);
// } else {
//   alert('8글자 이상 입력하세요');
// }

let str2 = '문자열입니다'
console.log(str2.charAt(0)); // 문
console.log(str2.concat(' 안녕')); // 문자열입니다 안녕
str3 = str2.concat(' 안녕');
str2.replace
// indexOf 사용 예제
if (str3.indexOf('안녕') === -1) {
  console.log('찾는 문자 없음');
} else {
  console.log('문자 있음');
}

// replace(바꿀 문자선택, 바꿀 문자내용)
console.log(str3.replace('문자', '글자')); // 글자열입니다 안녕

// slice(시작index 위치, 범위 )
console.log(str3.slice(0, 2)); // 문자