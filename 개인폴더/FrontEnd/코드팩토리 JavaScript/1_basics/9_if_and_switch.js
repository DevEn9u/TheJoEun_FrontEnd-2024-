/**
 * If and Switch
 */

let number = 5

if (number % 2 === 0) {
  console.log('number variable is an even number.');
}   else {
  console.log('number variable is an odd number.');  
}

if (number % 2 === 0) {
  console.log('2의 배수입니다.');  
} else if (number % 3 === 0) {
  console.log('3의 배수입니다.');
} else if (number % 4 === 0) {
  console.log('4의 배수입니다.');
} else if (number % 5 === 0) {
  console.log('5의 배수입니다.');
} else {
  console.log('2, 3, 4, 5의 배수가 아닙니다.');
}

const englishDay = 'tuesday';

let koreanDay;

switch(englishDay) {
  case 'monday':
    koreanDay = '월요일';
    break;
  case 'tuesday':
    koreanDay = '화요일'
    break;
  case 'wednesday':
    koreanDay = '수요일'
  case 'thursday':
    koreanDay = '목요일';
    break;
  case 'friday':
    koreanDay = '금요일'
    break;
  default: 
    koreanDay = '주말'
    // if문에서 else처럼 case이외의 나머지 경우를 포함
    // 하지만 여기서는 sunday나 saturday만 가능하게 설정안해놔서 무엇을 입력하든 주말이라고 나오긴 하나 개념성립을 위한 것임을 알아둘 것!
}
console.log(koreanDay);
