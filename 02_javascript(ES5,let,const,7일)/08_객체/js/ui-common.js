/**
 * Object: data를 속성명을 붙여 구조화
 * {key: value}의 구조
 */ 


const car = {
  name: 'sonata',
  modelNo: '400',
  color: 'black',
  'navi model': '아이나비',
  company: {
    year: '2000',
    manufacturer: 'hyundai',
  },
  // method 생성
  moveCar: function() {
    // object method에서 this는 method가 선언된 object(여기서는 car)를 가리킴
    console.log(`${this.name}가 움직입니다.`);
  },
}
console.log(typeof car, car, car.modelNo, car['name'], car.color);
// 속성값을 띄어쓰기 하라면 문자열로 작성하고 대괄호 표기법으로 접근
console.log(car['navi model']);
// 객체 안 객체의 속성 호출 하려면 .을 연결하면 됨
console.log(car.company.year);
// console.log(window.location.href);

car.moveCar()

console.log('------------------------------------');
/**
 * 객체 전용 반복문
 * for..in
 * for (key in object) {}
 */
for (const key in car) {
  // 객체의 key(속성명) 출력
  // console.log(key, '===');
  // 객체의 value 출력
  // console.log(car[key]);
}

/**
 * in 키워드
 * 'key' in object
 * 객체의 속성 존재 여부 확인
 * 존재하면 true, 존재하지 않으면 false 반환
 */
console.log('color' in car);

/**
 * 객체 속성 변경
 * 1) 속성 추가
 * 2) value 변경
 * 3) 속성 제거
 */
//  1) 객체의 속성을 동적으로 추가
car.speed = '300km'
console.log(car.speed);

// 2) 객체의 value 변경
car.changeColor = function () {
  this.color = 'red'
}
car.changeColor();
console.log(car.color); // red

// 3) 객체 속성 제거
delete car.color;
console.log(car.color); // undefined

/** ES6 객체 메서드 표기법
 * typeScript에서 type선언을 해야하는데 이 방식은 불가하기 때문에 사용하지 말자
 * object method 선언시 arrow function의 this는 해당 객체가 아니므로 사용금지
*/
const user = {
  userId: 'devEn',
  /**
   * ES6 표기법
  checkId() {
    console.log(this.userId); // undefined
  }
   */
  /**
   * 화살표함수
  checkId: () => {
    console.log(this.userId); // undefined
  }
   */
  checkId: function() {
    console.log(this.userId); // devEn
  }
}
user.checkId();