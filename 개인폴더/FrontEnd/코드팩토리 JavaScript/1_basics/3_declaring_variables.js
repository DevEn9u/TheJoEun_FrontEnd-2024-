/** variables
 * 1. var - 더 이상 사용 안함
 * 2. let
 * 3. const - 변하지 않는, 한 번 선언하면 값을 바꿀 수 없는 변수.
 */

var name = 'james';
console.log(name);

var age = 25;
console.log(age);

let mainCharater = 'Pooh'
console.log(mainCharater);

// let과 var로 선언하면 값을 추후에 변경 가능.
mainCharater = 'Tiger'
console.log(mainCharater);

// const로 선언하면 후에 변경 불가능.
const bottle = '병';
console.log(bottle);
// bottle = '유리';
// console.log(bottle);

/** 
 * 선언과 할당
 * 
 * 1. 선언: 변수를 선언하는 것
 * var name;
 * 2. 할당: 선언한 변수에 값을 넣어주는 것
 * var name = 'james';
 */
let tape;
console.log(tape); // undefiend, 변수를 선언하고 할당을 안해주었기 때문.

const tape2; // const declaration must be initialized
