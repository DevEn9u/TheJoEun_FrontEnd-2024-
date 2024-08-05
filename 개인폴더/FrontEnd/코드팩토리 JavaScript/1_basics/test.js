// const james = {
//   name: '제임스',
//   age: 23,
// }

// for(let key1 in james) { // object 의 key값이 key1라는 변수에 looping 될때마다 반환됨.
//   console.log(key1);
// }

// const colorListArray = ['red', 'blue', 'black', 'pink'];
// for(let key2 in colorListArray) {
//   console.log(key1); // 0, 1, 2, 3이 출력됨(index 값).
//   console.log(`${key1}: ${colorListArray[key1]}`);
// }

let num = prompt('숫자를 입력하세요')
function calculate(num) {
  console.log((num * 10 / 2 % 3).toString());
}
calculate(num);