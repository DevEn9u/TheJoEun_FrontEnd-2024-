window.addEventListener('DOMContentLoaded', function() {
  // createElement(): 요소생성
  const tit = document.createElement('h1');
  // textContent(): 내용생성
  tit.textContent = '문서 객체를 동적으로 생성';
  // attribute는 속성, html에서 사용, property는 js에서 사용하는 용어
  // setAttribute('추가할 것', '추가할 내용')
  tit.setAttribute('class', 'tit');
  // appendChild(): 맨 뒤에 node 추가, prepend(): node를 맨 앞에 추가
  document.querySelector('#wrap').prepend(tit);
  console.log(tit);
})



// let tit = document.createElement('h1');
// tit.textContent = '문서 객체 동적으로 생성하기'
// tit.setAttribute('class', 'tit');
// document.body.appendChild(tit);