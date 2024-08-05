/**
 * copy by value: 값에 의해 전달.
 * copy by reference: 참조에 의해 전달.
 * 
 * 가장 중요한 rule
 * 1) 기본적으로 모든 primitive값(object를 제외한 모든 data type)은 copy by value
 * 2) 객체는 copy by reference; 
 */

// 1. copy by value
let original = '안녕하세요.';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 웬디입니다.' // clone = clone + '웬디입니다.
console.log(original);
console.log(clone); // clone 에 original의 value를 복사했지만 clone에 값을 추가해도 original의 값이 변하지 않고 clone의 값만 변함.

console.log(original === clone); // false

// 2. copy by reference

let originalObj = {
  name: '웬디',
  group: '레드벨벳',
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '블루벨벳' // 두 객체의 group이 다 변경됨.
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj); // true
console.log('----------');

originalObj1 = {
  name: 'john',
  age: 13,
}

cloneObj1 = {
  name: 'john',
  age: 13,
}
console.log(originalObj1 === cloneObj1); // false. 객체의 항목이 똑같다고 true가 되지는 않음.

/**
 * 메모리에서 일어나는 현상
 * 
 * 1. copy by value
 *    1) original을 선언하면 0x000001(가정)이라는 메모리에 저장되고, clone을 선언하면 0x000003(가정)에 저장된다.
 *    2) clone 변수에만 '안녕하세요' 라는 값을 추가하면 clone이 저장된 메모리에만 추가되고 original이 저장된 메모리에는 변화 없음.
 * 
 * 2.copy by reference
 *    1) 객체 originalObj를 선언하면 객체 안 항목들({name: '웬디', group: '레드벨벳,}) 이 0x000003(가정)이라는 메모리에 할당된다.
 *    2) 단 originalObj라는 변수는 실제 객체가 저장되어진 주소 0x000003을 가리키는 0x000001(가정)에 할당된다.
 *    3) clone)Obj는 0x000003을 가리키는 0x000002에 저장됨.
 *    4) 객체 항목인 group을 '레드벨벳'에서 '블루벨벳'으로 변경하면, originalObj와 cloneObj 둘다 객체가 변경됨. why? 둘다 실제 객체의 주소만 가리키기 때문.
 */
console.log('---------------');


/** quiz
 * 
 */

const irene = {
  name: '아이린',
  group: '레드벨벳',
};

const irene1 = irene;
const irene2 = {
  name: '아이린',
  group: '레드벨벳',
};

console.log(irene === irene1); // reference, true
console.log(irene === irene2); // 객체의 항목이 똑같다고 둘이 동일하지 않음. 각각 가리키는 메모리 주소가 다르기 때문, false
console.log(irene1 === irene2); // false

console.log('---------------');
/** 
 * spread operator 복습
 * spread operator를 사용하면 copy by value가 됨.
 */ 
const irene3 = { // irene3라는 변수를 새로 선언했음
  ...irene2,
}
console.log(irene3);
console.log(irene3 === irene2); // false

const irene4 = {
  year: 2006, // 기존 객체에 없던 새로운 항목 추가 가능.
  ...irene2,
}
console.log(irene4);

const irene5 = {
  name: '아이린 아닙니다', // 새로운 name을 만들어도 아래 ...irene2라는 값을 입력했기 때문에 name이 다시 아이린으로 바뀐다. spread operator는 순서가 중요!
  ...irene2,
}
console.log(irene5);

const irene6 = {
  ...irene2, // 먼저 irene2를 불러오고
  name: '아이린 아닙니다', // name이 바뀌고
  year: 2006, // 새로운 항목을 추가
}
console.log(irene6);
console.log('---------------');

const numbers = [1, 3, 5];
const numbers2 = [
  0,
  ...numbers,
  4,
  7,
]
console.log(numbers2);
console.log(numbers2.sort()); // 숫자를 오름차순으로 정렬