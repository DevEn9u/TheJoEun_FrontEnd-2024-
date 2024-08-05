/**
 * default export를 중괄호{} 없이 먼저 받고 named export는 객체 구조분해 형태로 받아 {} 안에 key(함수명, 변수명)작성
 * 현재폴더기준을 나타내는 './'를 생략할 수 없음
 * default export(기본내보내기)는 이름 변경 가능함. math.js에서 Header로 작성한 함수를 navVar로 변경해도 그대로 실행됨
 * named export는 '기존명 as 바꿀이름'으로 이름을 붙이면 사용 가능하다
 */ 
import navVar, { sum as sum2, pi } from "./utils/math.js";

navVar();
console.log(`2파이 = ${sum2(pi, pi)}`);