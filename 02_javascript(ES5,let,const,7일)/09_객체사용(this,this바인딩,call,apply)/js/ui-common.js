// object의 method에서 this는 해당 객체를 가리킴
// 일반 함수의 this는 window를 가리킴
/**
 * this binding
 * object의 method의 this를 변수에 대입해 내부함수에서 사용
 * 함수의 this를 다른 객체를 가리키도록 함
 * let _this =- this;
 * 1) call 
 * 2) apply
 * 3) bind
 */

// this binding
const obj = {
  num: 200,
  showNum: function() {
    console.log(this); // obj 반환
    let _this = this; // this binding사용

    function inner() {
      console.log(this); // window 반환
      console.log(_this); // obj, this binding 사용
    }
    inner();
  },
}
obj.showNum();
console.log('--------------------');

const student = {
  studentName: ['홍길동', '김첨지'],
};

// 1) call
function showName(x, y) {
  console.log(this); // student 객체 
  console.log(this.studentName[1]); // 김첨지
  console.log(x + y); // 300
}
showName.call(student, 100, 200);
console.log('===-------------------');

// 2) apply
// 전달할 값이 배열인 경우 사용
function showName2(x, y) {
  console.log(this); // student 객체 
  console.log(this.studentName[1]); // 김첨지
  console.log(x, y); // 100 200
}
showName2.apply(student, [100, 200]);

console.log('============================');

/** 3) bind
 * this가 가리키는 대상은 함수를 호출할 때 동적으로 가리킴
 * bind는 call과 apply와 달리 호출 기능이 없어 ()를 넣어 호출을 해야함
 * call과 apply를 주로 사용하고 bind는 잘 사용 안함
 */
function showName3(x, y) {
  console.log(this); // student 객체 
  console.log(this.studentName[0]); // 홍길동
}
showName3.bind(student)();