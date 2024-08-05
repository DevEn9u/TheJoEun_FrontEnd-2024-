/**
 * Operators = 연산자
 */

/** 산술연산자
 * 
 * 1. 덧셈
 * 2. 뺄셈
 * 3. 곱셈
 * 4. 나눗셈
 * 5. 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log('------------');

console.log(10 * (10 + 10));

/**
 * 증감연산자
 */
let number = 1

number ++; // 1을 더한 값을 저장.
console.log(number);

number --; // 현재 number는 2, 여기서 1을 뺀 값을 저장.
console.log(number);
console.log('------------');

/**
 * 증감연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number); // 1, 2: result값을 먼저 저장, 이후 number에 1을 더한 값을 저장.

result = ++number; // 현재 number는 2
console.log(result, number); // 3, 3: number에 1을 더한값을 저장, 이후 result에 저장.
// 그러나, --나 ++를 앞에다가 절대 두지 말 것!!!!!!

/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample); // string을 number로 바꾸어버림.

sample = '안녕';
console.log(+sample); // NaN 출력됨.

sample = true;
console.log(+sample); // 1 출력, true는 1이기 때문. false는 0.
console.log(typeof +sample); // boolean을 number로 바꾸어버림.
console.log('------------');

sample = '99'
console.log(-sample); // -99
console.log(typeof +sample); // number

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10; // x += y 는 x = x + y. 여기서는 number = number + 10. 즉 110
console.log(number);

number -= 10;
console.log(number); // 110 - 10 = 100

number *= 10;
console.log(number); // 100 * 10 = 1000

number /= 10;
console.log(number); // 1000 / 10 = 100

number %= 10;
console.log(number); // 100 % 10 = 0

/**
 * 비교 연산자
 * 
 * 1. 값의 비교('=='): 있긴 하지만 사실상 쓰지 않음. 실무에서 사용 안함
 * 2. 값과 type의('===') 비교: 중요! 실무에서 사용!
 * 
 * 같지 않다라고 할 때는 '!=', '!==' 사용.
 */
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(true == 1); // true
console.log(false == 0); // true

console.log(5 === 5)  // true, ===는 값과 type까지 비교.
console.log(5 === '5'); // false, 숫자 5와 string 5는 타입이 다름.
console.log(0 === ''); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log('------------');

console.log(5 !== 5)  // false, 5개의 코드 예시는 !==이기 때문에 위와 다름!
console.log(5 !== '5'); // true
console.log(0 !== ''); // true
console.log(true !== 1); // true
console.log(false !== 0); // true

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);


/**
 * 삼항 조건 연산자 (ternary operator)
 * a > b ? 'true일때 실행' : 'false일 때 실행'
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다'); // 10 > 0이 true이기에 '10이 0보다 크다'가 출력됨.
console.log(10 < 0 ? '10이 0보다 크다': '10이 0보다 작다'); // 10 > 0이 false이기에 '10이 0보다 작다'가 출력됨.

/**
 * 논리 연산자
 * 
 * 1. &&
 * 2. ||
 */

// 1. &&, and를 의미하는데 조건이 모두 true여야 true를 반환한다.
console.log(true && true); // true
console.log(true && false); // false
console.log('--------------');

// 2. ||, or를 의미하는데 조건중에 하나라도 true면 true를 반환한다.
console.log(true || true); // true 반환
console.log(true || false); // true 반환
console.log(false || false); // false 반환
console.log('--------------');

console.log(10 > 1 && 20 > 2); // true
console.log(10 < 1 && 20 > 2); // false

console.log(10 > 1 || 20 > 2); // true
console.log(10 < 1 || 20 > 2); // true
console.log(10 < 1 || 20 < 2); // false

console.log('--------------');

/** 단축평가(short circuit evaluation)
 * 이건 무조건 외우기!! 실무에서 많이 사용함.
 * 숫자를 이용한 논리 연산자는 true, false를 나타내는 것에 중점, 숫자와 string이 쓰이는 단축평가는 조건처럼 사용가능할 듯!
 * 
 * a && b : a가 true면 b 반환, a가 false면 a 반환
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * 
 * a || b : a가 true면 a 반환, a가 false면 b 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true && 'hello'); // hello 반환
console.log(false && 'hello'); // false 반환

console.log(true || 'hello'); // true 반환
console.log(false || 'hello'); // hello 반환

console.log(1 > 0 || 'hello'); // true 반환
console.log(10 < 0 || 'Error: answer is wrong!'); // 'Error: answer is wrong!' 반환
console.log('--------------');

console.log(true && 'hello' && true); // true 반환, 순서대로 계산하면 됨.
console.log(true && true && 'hello'); // hello 반환
console.log(true && false && 'hello'); // false 반환

console.log('--------------');

/**
 * 지수 연산자
 */
console.log(2 ** 2); // 2의 2제곱
console.log(2 ** 10); // 2의 10제곱
console.log('--------------');


/**
 * null 연산자
 * a ?? b : a가 null이거나 undefined일 때 b를 반환.
 */
let name; 
console.log(name); // undefined

name = name ?? 'james';
console.log(name); // james

name = name ?? 'daniel';
console.log(name); // james 반환, name이 null이나 undefined가 아닌상태.

let name2; // 한 번에 작성하고 싶을때 이렇게 사용
name2 ??= 'james'; // name2 ?? james를 실행하고 반환된 james를 name2에 반환.
console.log(name2); // james 출력
