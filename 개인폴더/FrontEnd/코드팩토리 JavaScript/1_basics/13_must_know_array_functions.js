// 정말 중요한, 실무에서 쓰이는 함수
/** 
 * Array Methods(=funcions)
*/

let redVelvetMembers = [
  '웬디',
  '아이린',
  '슬기',
  '조이',
  '예리',
];

console.log(redVelvetMembers);

// push()
// 배열의 맨 끝에 항목을 추가하고 추가한 다음의 길이를 반환값으로 가짐.
redVelvetMembers.push('새멤버');
console.log(redVelvetMembers);
console.log(redVelvetMembers.push()); // 6이 출력, 배열의 item 갯수

// pop()
// 배열의 맨 끝에 있는 항목을 제거하고 삭제한 값을 반환
console.log(redVelvetMembers.pop()); // '새멤버' 반환
console.log(redVelvetMembers);// '새멤버' 제거한 값 반환

console.log('--------');

// shift()
// 배열의 맨 처음에 있는 항목을 제거하고 삭제한 값을 반환
console.log(redVelvetMembers.shift()); // 맨 앞에 있는 '웬디' 반환
console.log(redVelvetMembers); // '웬디'를 제외한 나머지 items 반환

// unshift()
// 배열의 맨 앞에 항목을 추가하고 추가한 다음의 길이를 반환값으로 가짐.
console.log(redVelvetMembers.unshift('웬디')); // 5 반환
console.log(redVelvetMembers); // [ '웬디', '아이린', '슬기', '조이', '예리' ]

console.log('--------');


// splice(x, y): x번째 index부터 y번째 index까지 삭제한 값의 반환
console.log(redVelvetMembers.splice(0, 2)); // 0, 1, 2번째 삭제하는 값 반환
console.log(redVelvetMembers); // 삭제한 후의 배열 반환

// 배열 재선언
redVelvetMembers = [
  '웬디',
  '아이린',
  '슬기',
  '조이',
  '예리',
];
console.log('-------------------');

/**
 * concat(): 기존의 배열에 concat을 사용하면 기존 array 값이 변화하지 않고 새로운 메모리 공간에 저장함.
 * 또는 두 배열을 합칠 수 있음.
 */
console.log(redVelvetMembers.concat('제임스')); // 기존 멤버에 '제임스'를 추가한 배열을 새로 만들어 반환. 다른 메모리 공간에 저장된 값을 반환.
console.log(redVelvetMembers); // 기존 멤버만 반환

let newMember = ['제임스',];
const newRedVelvetMembers = redVelvetMembers.concat(newMember);
console.log(newRedVelvetMembers);

console.log('-------------------');

/**
 * slice(start, end): splice()와 다르게 원래 array 값이 바뀌지 않음.
 * js 설명에 보면'returns a copy of a section of an array' 라고 되어있음.
 * 즉 start부터 end 전까지의 복사본을 새로운 배열 객체로 반환하고 원본 배열을 수정되지 않는다.
 * start: 추출 시작점에 대한 index
 * - start 포함 그 부분부터 추출.
 * - undefined인 경우: index[0]부터 slice
 * - 음수를 지정한 경우: 배열의 끝에서부터의 길이. slice(-2)면 배열의 마지막에서 2개의 요소 추출.
 * - 배열의 길이와 같거나 큰 수의 경우: 빈 배열[] 반환.
 * 
 * end: 추출 종료점에 대한 index
 * - end를 제외, 그 전까지 추출.
 * - undefined인 경우: 배열의 끝까지 slice
 * - 음수를 지정한 경우: 배열의 끝에서부터의 길이. slice(1, -2)면 배열의 두번째부터 끝에서 두번째 전 요소까지 slice.
 * - 배열의 길이와 같거나 큰 수의 경우: 배열 끝까지 추출.
 * 
 * 추출한 값을 반환.
 */

console.log(redVelvetMembers.slice(1, -2)); // 배열에서의 두번째('아이린')부터 끝에서 두번째의 전(조이의 앞:'슬기')를 추출하고 추출값을 반한['아이린', '슬기']
console.log(redVelvetMembers); // 기존 배열 변화 없음.

// spread operator
let redVelvetMembers2 = [
  ...redVelvetMembers,
];
console.log(redVelvetMembers2);

let redVelvetMembers3 = [ // ...을 넣지 않으면 [[]] 형태가 됨.
  redVelvetMembers,
];
console.log(redVelvetMembers3);

let redVelvetMembers4 = redVelvetMembers;// redVelvetMembers2 처럼 값이 나옴.
console.log(redVelvetMembers4);
console.log(redVelvetMembers2 === redVelvetMembers4); // false

// join()
console.log(redVelvetMembers.join()); // [] 없이 string으로 반환
console.log(typeof redVelvetMembers.join()); //string
console.log(redVelvetMembers.join('/')); // , 대신 '/'로 item 구분
console.log(redVelvetMembers.join(', '));

// sort(): 오름차순으로 정렬하는 메소드
console.log(redVelvetMembers.sort()); // 가나다 순으로 정렬됨.
console.log(redVelvetMembers.reverse()); // 가나다 역순으로 정렬됨.

let numbers = [
  1,
  7,
  3,
  6,
  5,
];
console.log(numbers);

/**
 * a, b를 비교했을때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저에 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
 * 3) 원래 정의된 대로 그대로 두려면 0을 반환
 * */
// 삼항 조건 연산자 (ternary operator)
// a > b ? 'true일때 실행' : 'false일 때 실행'
console.log(numbers.sort((a, b) => {
  return a > b ? 1 : -1; // a < b ? 1 : -1; 로 하면 내림차순
})
)
console.log(numbers); // a, b에 numbers의 값들이 들어가 서로 비교하여 순서 정해짐.

console.log('-------========--');

// 배열 재선언
redVelvetMembers = [
  '웬디',
  '아이린',
  '슬기',
  '조이',
  '예리',
];

// map()
// 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출(callback function)한 결과를 모아 새로운 배열을 반환.
// 다음 예시에서 x는 parameter이기에 (x)로 표현.
console.log(redVelvetMembers.map((x) => x));
console.log(redVelvetMembers.map((x) => `RedVelvet: ${x}`)); // (x)는 배열의 각각의 항목이고 이 항목들이 `RedVelvet: ${x}`을 계속 거쳐가 'RedVelvet: 각요소' 라는 배열 항목이 생김.
console.log(redVelvetMembers.map((x) => {
  if (x === '아이린'){
    return `RedVelvet: ${x}`;
  } else {
    return x;
  }
}));
console.log(redVelvetMembers); // map()메서드도 기존의 배열에 변화 주지 않음.

// filter()
// element를 찾는 기능
numbers = [1, 5, 6, 4, 2, 3];
console.log(numbers.filter((x) => true)); // 모든 요소가 반환값에 저장됨.
console.log(numbers.filter((x) => false)); // 모든 요소가 반환값에 저장 안됨.


console.log(numbers.filter((x => { // 짝수만 출력하기
  if (x % 2 === 0) {
    return `${x}`;
  } else {
    return;
  }
})));
console.log(numbers.filter((x) => x % 2 === 0)); // 더 간단한게 짝수 출력

// find()
console.log(numbers.find((x) => x % 2 === 0)); // 매개변수의 함수에서 true인 값중 가장 첫 번째 값만 반환. 위 numbers 배열에서 6만 반환.

// findIndex()
// find와 동일하나 index를 반환.
console.log(numbers.findIndex((x) => x % 2 === 0)); // index[6] = 2라서 2 반환.

/** reduce()
 * Array<number>.reduce(callbackfn: (previousValue, nextValue) => number, initialValue: number)
 * initialValue를 지정하면 첫 looping에서 해당 값이 accumulation 됨.
 */
console.log(numbers.reduce((p, n) => p + n , 0));
/**
 * 1. (초기값0 + 1 = 1이 반환)
 * 2. 1이 p에 입력
 * 3. array의 두번째 값인 5가 n에 입력, 1 + 5 = 6이 반환
 * 4. 6이 p에 입력, 세번째 값인 6이 n에 입력, 6 + 6 = 12반환
 * 5. 12가 p에 입력, 네번째 값인 4가 n에 입력, 12 + 4 = 16 반환
 * 나머지 2와 3도 동일하게 진행되어 결국 모든 값이 더해진 21이 반환.
 */

