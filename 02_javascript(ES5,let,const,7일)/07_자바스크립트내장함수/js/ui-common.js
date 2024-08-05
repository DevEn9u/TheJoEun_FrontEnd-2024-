// 타이머함수
// 연습문제: 콘솔에 1초마다 10까지 출력하시오(setInterval, clearInterval)

// handler란 handler function을 의미
// let cnt = 0;

// const intervalId = setInterval(function() {
//   cnt++
//   console.log(cnt);
  
//   if (cnt === 10) {
//     clearInterval(intervalId);
//   }
// }, 100)


/**
 * quiz 1. 화면에 5부터 0까지 카운트 보여주고 네이버로 이동하기
 * 이동하려면 location 객체 이용
 * location.href = "도메인"
 */
/**
 * 내가 작성한 코드
 * 문제점: 5부터 출력이 안되고 4부터 출력됨
let cnt = 5;
const naver = setInterval(function() {
  cnt--;
  document.querySelector('.count').innerHTML = cnt;
    if (cnt === 0) {
      clearInterval(naver);
      location.href = "https://www.naver.com";
    };
}, 200)
 */

// window.addEventListener('DOMContentLoaded', function() {
//   let cnt = 5;
//   const countEl = document.querySelector('.count');
//   countEl.innerHTML = cnt;

//   const intervalId = setInterval(() => {
//     cnt--;
//     countEl.innerHTML = cnt;

//     if (cnt === 0) {
//       clearInterval(intervalId);
//       location.href = "https://www.naver.com";
//     };
//   }, 1000)
// })

/** quiz 1-1. quiz 1의 코드를 리팩토링 하기
 * 1. 바뀔 수 있는 값
 *  1) cnt 초기값
 *  2) cnt를 보여줄 요소의 class명
 *  3) 이동할 url
 * 2. 함수로 호출시 인자로 위의 값을 전달하여 실행하도록 개선
 */

window.addEventListener('DOMContentLoaded', function () {
  function showCount(cnt, el, url) {
    const countEl = document.querySelector(el);
    countEl.innerHTML = cnt;

    const intervalId = setInterval(() => {
      cnt--;
      countEl.innerHTML = cnt;

      if (cnt === 0) {
        clearInterval(intervalId);
        location.href = url;
        // 새창으로 여는 방법
        // let open = window.open(url);
        // open.location.href = url;
      };
    }, 100)
  }
  showCount(10, '.count',"https://www.naver.com" );
})