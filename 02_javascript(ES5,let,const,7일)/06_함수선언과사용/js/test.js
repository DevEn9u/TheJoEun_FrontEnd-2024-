
function first() {
  second();
  console.log('첫번째');
}

function second() {
  third();
  console.log('두번째');
}

function third() {
  console.log('세번째');
}

first();


// 재귀함수: 함수 내부에서 자신을 다시 호출하는 함수
function factorial(num) {
  if (num === 1)
  return 1;

  return num * factorial(num - 1);
}

let result = factorial(5); // 5 * 4 * 3 * 2 * factorial(1) = 120
console.log(result);