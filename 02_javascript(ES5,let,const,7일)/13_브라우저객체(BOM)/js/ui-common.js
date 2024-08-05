/**
 * Browser Object Model (BOM)
 * window: 최상위 객체 다른 객체들이 여기에 포함됨
 * document: 문서, DOM 안에도 다른 객체 존재
 * history: 방문 기록
 * location: 위치, href
 * navigator: 브라우저 제조사 정보
 * screen: 사용 잘안함
 *
 */

/**
 * 모바일 브라우저를 판단하는 정규표현식이 있음
 * 자주 사용되는 공통함수는 위에 작성
 * return값은 boollean
 */
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// 위치를 바꿔도 DOMcontentloaded가 먼저 실행됨
// DOM이 로딩되면 callback function 실행
window.addEventListener('DOMContentLoaded', function () {
  // 모바일 브라우저 or pc 브라우저 판단 함수
  if (isMobile()) {
    document.querySelector('.txt').innerHTML = '모바일 브라우저';
  } else {
    document.querySelector('.txt').innerHTML = 'PC 브라우저';
  }

  // 이미지가 로딩된 후 제어해야할 경우 사용
  window.addEventListener('load', function () {
    console.log('resoures such as images, videos completed');
  });
  console.log('DOM load completed');

  // resize 이벤트는 창크기 조절시 발생하여 처음엔 실행되지 않아 함수를 이용하여 처음부터 실행시키도록 함
  function checkWidth() {
    console.log(this.outerWidth);
  }
  checkWidth();
  window.addEventListener('resize', checkWidth);

  // 스크롤 이벤트 정말 많이 사용!
  function checkScroll() {
    console.log(this.scrollY);
  }
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});
