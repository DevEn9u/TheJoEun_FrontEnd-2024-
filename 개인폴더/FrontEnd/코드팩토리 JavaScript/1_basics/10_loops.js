/** 
 * Loops
 * 
 * 1. for loop
 * 2. while loop
 */
for(let i = 0; i < 10; i++) { // i는 index 약자| 기준;조건;취할행동
  console.log(i);
}

for(let i = 10; i > 0; i--) {
  console.log(i);
}

for(let i = 0; i < 3; i++) {
  for(let j = 3; j > 0; j--){
    console.log(i, j);
  }
}
console.log('--------');


// *을 이용해 6x6의 정사각형을 출력하시오.
let square = '';
let side = 6;

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < side; j++){
    square += '*';
  }
  square += '\n';
}
console.log(square);

/** 
 * for...in loop
 */
const james = {
  name: '제임스',
  age: 23,
}

for(let key1 in james) { // object 의 key값이 key1라는 변수에 looping 될때마다 반환됨.
  console.log(key1);
}

const colorListArray = ['red', 'blue', 'black', 'pink'];
for(let key2 in colorListArray) {
  console.log(key2); // 0, 1, 2, 3이 출력됨(index 값).
  console.log(`${key2}: ${colorListArray[key2]}`);
}

/**
 * for...of loop
 * looping을 할 수 있는 값들에만 사용 가능
 * array같은 애들
 */
for(let key3 of colorListArray) { // for..of loop는 값을 가져옴.
  console.log(key3);
}

/** 
 * while... loop
 */
let number = 0;
while(number < 10) { // ()안 조건이 충족될때까지 실행
  number++;
}
console.log(number); // 10 출력

/** 
 * do...while
 * 알고만 있고 사용하지는 말자.
 */
number = 0;

do {
  number++;
} while(number < 10);
console.log(number); // 10 출력.
console.log('---------');

// while loop은 조건을 먼저 판단한고 조건이 true이면 코드블럭을 실행하지만 do while loop은 코드 블럭을 먼저 실행하고 조건에 해당하는지를 판단. 순서가 반대임.

/**
 * break
 */
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // i가 5가 됐을 때 loop를 깨트림(break)
  }
  console.log(i); // 0, 1, 2, 3, 4 출력
}
console.log('----------');

// while loop에서의 break
number = 0;

while (number < 10) {
  if (number === 5) {
    break;
  }
  number ++;
  console.log(number); // 1, 2, 3, 4, 5 출력. number = 0에서 number++부터 실행하였기 때문에 0이 아닌 1부터 출력이 되는 것이고, number가 5가 되었을 때 값이 6이 되므로 break됨.
}
console.log('----------');

/**
 * continue
 */
for(let i = 0; i < 10; i++) {
  if(i === 5) { // 5가 되었을 때 skip해라.
    continue;
  }
  console.log(i); // 0 1 2 3 4 6 7 8 9 출력됨.  
}
console.log('----------');

// while loop에서의 continue
number = 0;

while(number < 10) {
  number++;

  if(number === 4) {
    continue;
  }

  console.log(number); // 1 2 3 5 6 7 8 9 10 출력됨.  
}