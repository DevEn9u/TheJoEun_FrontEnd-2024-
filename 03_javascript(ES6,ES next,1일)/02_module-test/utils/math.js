/**
 * named export
 * 원래의 함수명, 변수명으로 export 됨
 */ 
export function sum(x, y) {
  return x + y;
}

export const pi = 3.1415;

/**
 * default export
 * 기본함수를 내보냄
 * React에서 사용하게 될 것 
 */
export default function Header() {
  console.log('기본 함수 내보내기');
}