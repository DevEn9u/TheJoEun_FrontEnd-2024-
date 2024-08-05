/**
 * Data Types
 * 
 * 여섯개의 primitive type과
 * 한개의 object type이 있다.
 * 
 * 1. Number
 * 2. String
 * 3. Boolean
 * 4. Undefined
 * 5. null
 * 6. Symbol
 * 
 * 7. Object
 *    Function
 *    Array
 *    Object
 */

// 1. number type
const age = 28;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log('-------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log('-------------');

// 2. string type
const 코드잇 = 'codeit';

const red = "'빨강'색"; // ''를 string으로 넣고 싶으면 "" 안에 넣어줌. 반대도 가능.
console.log(red);

/**
 * Template Literal
 * Escaping Character
 * 1. newline → \n
 * 2. tab → \t
 * 3. 백슬래시('\')를 string으로 표현하고 싶다면 두 번 입력
 */
const redVelvetWendy = '레드벨벳\n웬디';
console.log(redVelvetWendy);
const redVelvetIrene = '레드벨벳\t아이린';
console.log(redVelvetIrene);
const backSlash = '레드벨벳\\조이';
console.log(backSlash);
const smallQuotation = '레드벨벳\'아이스크림'; // baskslash를 넣으면 가운데 따옴표를 string으로 입력 가능하면서, 문자열종료의 역할을 하지 않게 만듬.
console.log(smallQuotation);
const upperStrophe = 'Ingoo\'s diary'
console.log(upperStrophe);

// Template Literal
const redVelvetWendy2 = `레드벨벳 , . / %
웬디`
console.log(redVelvetWendy2); // 그대로 출력됨

const groupName = 'Red Velvet';
console.log(groupName + ' Wendy');
console.log(`${groupName} Wendy`);  // ES6에 쓰이는 방식, ${}은 문자열로 강제 변환

// 3. Boolean Type
const isTrue = true;
const isFalse = false;
console.log(isTrue === isFalse); // false
/**
 * 4. Undefined Type
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값.
 */
let noValue; // 변수를 선언했지만 값을 할당하지 않음
console.log(noValue); // 값이 undefined
console.log(typeof noValue); // type이 undefined

/**
 * 5. null type
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 값이 없다는 것을 표현할 때 사용.
 */
let yesValue = null;
console.log(yesValue); // 값이 null
console.log(typeof yesValue); // type이 object로 출력되는데 이건 버그이고, 개발자들도 인정한 부분. 수정하지 않는 이유는 이로 만들어진 레거시코드가 많기 때문.
console.log('-------------');

/**
 * 6. Symbol Type
 * 
 * 유일무이한 값을 생성할 때 사용.
 * 다른 primitive type과 다르게 symbol function을 호출해 사용.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 ===  symbol2); // false. 값은 같으나 유일무이한 존재 2개의 비교이기 때문.


/**
 * Object
 * 
 * Map과 비슷
 * key: value 형태로 이루어짐.
 * 
 */
const colorDeclaration ={
  red: '빨간색',
  blue: '파란색',
  black: '검정색',
};
console.log(colorDeclaration);
console.log(colorDeclaration['blue']);
console.log(typeof colorDeclaration);

/**
 * Array Type
 * 
 * 값을 리스트로 나열 할 수 있는 type
 */
const colorListArray = [
  '빨강',
  '파랑',
  '노랑',
  '검정',
];
console.log(colorListArray);

/**
 * index
 * 
 * 0부터 시작해서 1씩 올라감.
 * 배열의 위치를 의미(0번째 ~ n번째)
 */
console.log(colorListArray[1]);

colorListArray[2] = '보라'; // index 변경, '노랑' 자리에 '보라' 추가, '노랑' 삭제
console.log(colorListArray);

/**
 * static typing → 변서를 선언할 때 어떤 타입의 변수를 선언할지 명시.
 *                 C에서 사용.
 * 
 * dynamic typing → 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입 추론.
 * JS → dynamic typing
 */