/**
 * Naming Conventions
 * 
 * 1. 일반적으로 영어(라틴 문자)를 사용하여 문자와 숫자를 모두 사용할 수 있다.
 * 2. 특수기호는 언더스코어('_')와 달러('$')를 사용할 수 있다.
 * 3. 숫자로 이름을 시작할 수 없다.
 *   ex) 1Name, 2Age 등 사용 불가.
 * 4. 키워드는 변수명으로 사용 불가.
 *   ex) var let = 'var';
 */

let james = 'James';
var $james = '제임스';
const _james = '쩨임스';
console.log(james);
console.log($james);
console.log(_james);

// let 1Name = '안돼';

/**
 * Naming Conventions 2
 * 
 * 1. camelCase → 대부분 언어에서 사용하는 흔한 형태
 * 2. snake_case → 띄어쓰기를 언더스코어로 표현하고 소문자만 사용(파이썬)
 * 3. PascalCase → C#, MS계열 언어에서 사용
 */

const ingooJamseKang = '강인구';
console.log(ingooJamseKang);
