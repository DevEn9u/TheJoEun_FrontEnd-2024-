
/** ## 디지털시계 조건

1. 현재시간중 초를 화면에 보여주기

2. setInterval로 초정보 계속 갱신

3. 초정보를 로딩시 바로 보여주기(함수)

4. digit함수를 통해 시간이 10미만이면 두자리로 만들기

5. 밀리세컨드 3자리를 두자리로 Math.floor(3자리수/10)

6. 모두 구현후 함수로 스코프 묶어줌
*/

window.addEventListener('DOMContentLoaded', function() {
// Date 객체로 날짜의 인스턴스 생성
// 요소 선택은 매초마다 하는 것이 아니기 떄문에 setInterval(() => {})안에서 작성하지 않고 함수 밖에서 작성
let hourEl = document.querySelector('.section1 .hour');
let minEl = document.querySelector('.section1 .min');
let secEl = document.querySelector('.section1 .sec');
let msecEl = document.querySelector('.section1 .msec');


  function clock() {
    const now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    // millisecond 3자리중 2자리만 사용
    let msec = Math.floor(now.getMilliseconds() / 10);

    // 숫자가 한 자리면 두 자리로 변경해주는 함수
    function digit(num) {
      return num < 10 ? '0' + num : num;
    }
    
    // digig 함수를 호출해서 자리 변경을 하고 텍스트로 넣어줌
    hourEl.textContent = digit(hour);
    minEl.textContent = digit(min);
    secEl.textContent = digit(sec);
    msecEl.textContent = digit(msec);
  }
  
  // 최초 시간을 보여주기 위해 clock 함수를 만들어 선언하는 방식 적용
  clock();

  // 일정시간(1000ms)마다 시간정보 갱신
  setInterval(clock, 10);
});