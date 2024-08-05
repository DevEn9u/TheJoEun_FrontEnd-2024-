// generic 타입 매개변수 T: 함수의 인자를 유연하게 사용 가능
// export function printArray<T>(arr: T[]): void {
//   for (let item of arr) {
//     console.log(item);
//   }
// }

// 배열요소 tpye을 string, 또는 number로만 가능하도록 만들기
// extends 키워드 사용
export function printArray<T extends string | number>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

// 특정 객체 키만 사용 가능하도록
// 동적인 값에 접근하려면 대괄호[] 사용, computed value, 여기서는 obj[key]
// T는 객체, K는 객체의 key 유형을 가짐
export function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
