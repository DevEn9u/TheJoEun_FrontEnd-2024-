/**
 * Object: 객체
 * JavaScript에서 가장 중요한 개념
 * key: value 가 한 쌍인 구조.
 */

let wendy = {
  name: '웬디',
  group: '레드벨벳',
  dance: function() { // dance라는 함수 선언 가능.
    return `${this.name}가 춤을 춥니다.`;
  } 
};

console.log(wendy);
console.log(wendy.name);
console.log(wendy['name']);

const key = 'name'; // key라는 변수에 name을 할당.
console.log(wendy[key]);
console.log(wendy.dance());

/**
 * 변수를 이용해 객체 만들기
 */
const nameKey = 'name';
const nameValue = '웬디'

const groupKey = 'group';
const groupValue = '레드벨벳'

const wendy2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function() {
    return `${this.name}가 춤을 춥니다.`
  }
}

console.log(wendy2);
console.log(wendy2.dance());

wendy2['group'] = '블루벨벳' // wendy2의 group의 value 변경
console.log(wendy2.group);

wendy2['englishName'] = 'Wendy'; // 없는 key값 추가 가능.
console.log(wendy2);

delete wendy2.englishName; // 삭제하는 법, delete wendy2['englishName']도 가능.
console.log(wendy2);

/**
 *  const로 선언한 객체의 특징
 * 
 * 1) 객체 자체는 변경 불가
 * 2) 객체 안의 프로퍼티나 메서드는 변경 가능
 */
const irene = {
  name: '아이린',
  group: '레드벨벳'
}
// irene = {}     const로 선언한 irene을 빈 객체로 선언 자체가 불가.

irene['group'] = '블루벨벳' // 객체 안의 프로퍼티 변경 가능.
console.log(irene);

/**
 * 모든 key값 다 가져오기
 */
console.log(Object.keys(irene));

/**
 * 모든 value값 다 가져오기
 */
console.log(Object.values(irene));

/**
 * 새로운 기능
 */
const name = '웬디';
const wendy3 = { 
  name, // name의 key값과 변수의 이름이 동일한 경우(name: name,) name,으로만 작성 가능.
}
console.log(wendy3);