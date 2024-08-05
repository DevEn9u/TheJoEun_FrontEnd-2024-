/**
 * 타입 변환
 * Type Conversion 
 * 
 * 1. 명시적
 * 2. 암묵적
 */

let age = 32;

// 1. 명시적
// number를 string으로 바꾸기
let stringAge = age.toString();
console.log(typeof age);
console.log(typeof stringAge,',', stringAge);

// 2. 암묵적, 이건 좋은 코딩이 아니니 있다는 것만 알고 있으면 됨.
let test = age + ''; // 숫자에 string을 더하면 string type이 됨.
console.log(typeof test);

console.log('98' + 2); // 98이라는 string type에 string type으로 변경된 2가 더해져 982 출력. 
console.log('98' * 2); // string에는 곱하기의 개념이 없어 number로 암묵적으로 취급. 196 출력
console.log('98' - 2); // 빼기도 곱하기와 마찬가지, 96 출력.


/**
 * 명시적 변환 예시
 */
console.log(typeof (99).toString()); // string
console.log(typeof (true).toString()); // string
console.log(typeof (Infinity).toString()); // string

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.34')); // parse는 number type으로 변경, int는 그 중에서도 정수로 변경.
console.log(typeof parseFloat('0.34'), parseFloat('0.34')); // parse는 number type으로 변경, float는 그 중에서도 실수로 변경.
console.log(typeof +'1', +'1');
console.log('-------------');

/**
 * Boolean type으로 변환
 * string 값 안에 값이 들어 있으면 boolean은 true로 판단.
 */
console.log(!'x'); // false 출력
console.log(!!'x'); // true 출력
console.log(!!''); // false 출력
console.log(!!''); // false 출력
console.log(!!0); // false 출력
console.log(!!'0'); // true 출력
console.log(!!'false'); // true 출력, string이기때문.
console.log(!!false); // false 출력
console.log(!!null); // false 출력
console.log(!!undefined); // false 출력

console.log(!!{}); // object는 값이 있든 없든 true

/**
 * 1. 아무 글자도 없는 string
 * 2. 값이 없는 경우
 * 3. 0
 * 
 * 모두 false 반환.
 */





