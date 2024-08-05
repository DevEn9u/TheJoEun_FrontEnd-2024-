/**
 * window.addEventListener('DOMContentLoaded', function() {});
 * window객체를 통해 이벤트 연결, DOM(html)이 로딩되면 eventHandler 함수가 실행됨
 * eventHandler 함수는 arrow function 대신 anonymous function 사용
 * arrow function 사용시 this가 가리키는 대상이 달라짐
 */
// getscore() 함수는 addEventListener의 function 안에서 실행한 지역변수
window.addEventListener('DOMContentLoaded', function () {
  // 함수이므로 다른 버튼 클릭시 실행 가능, 다른 파일에서 호출하는 함수가 아니므로 내부함수로 구현
  function getScore() {
    // score1의 value가 변수 kor에 저장됨
    let kor = parseInt(document.getElementById('score1').value);
    let eng = parseInt(document.getElementById('score2').value);
    let math = parseInt(document.getElementById('score3').value);
    
    //입력값이 빈칸이거나 문자인 경우 return으로 함수 실행 종료
    if (isNaN(kor) || isNaN(eng) || isNaN(math)) {
      alert('점수를 입력하세요')
      return;
    }

    // if (!isNaN(kor) && !isNaN(eng) && !isNaN(math)) {
      let avg = (kor + eng + math) / 3;
      let pass = avg >= 60 ? '합격' : '불합격';

      let msg = '국어점수: ' + kor + '<br>';
      msg += '영어점수: ' + eng + '<br>';
      msg += '수학점수: ' + math + '<br>';
      msg += '평균: ' + avg.toFixed(2) + '<br>';
      msg += '합격여부: ' + pass;

      document.querySelector('.main_score .message').innerHTML = msg
    // } else {
    //   alert('점수를 입력하세요.');
    }
  

  // 함수명을 eventHandler로 전달하여 콜백함수 실행
  document.querySelector('.main_score .result_btn').addEventListener('click', getScore)
});
