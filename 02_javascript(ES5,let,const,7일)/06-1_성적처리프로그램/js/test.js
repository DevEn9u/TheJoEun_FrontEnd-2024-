window.addEventListener('DOMContentLoaded', function() {
  
  function getScore() {
  let kor = parseInt(document.querySelector('.score1').value);
  let eng = parseInt(document.querySelector('.score2').value);
  let math = parseInt(document.querySelector('.score3').value);

  let avg = (kor + eng + math) / 3;
  let pass = avg >= 60 ? '합격' : '불합격'
  
  if (isNan(kor) || isNaN(eng) || isNaN(math)) {
    alert('숫자를 입력하세요.')
    return;
  }

  let msg = '국어점수: ' + kor + '<br>';
  msg += '영어점수: ' + eng + '<br>';
  msg += '수학점수: ' + math + '<br>';
  msg += '평균: ' + avg + '<br>';
  msg += '합격여부: ' + pass + '<br>';

  document.querySelector('.main_score .message').innerHTML = msg
}

this.document.querySelector('.main_score .result_btn').addEventListener('click', getScore)
})