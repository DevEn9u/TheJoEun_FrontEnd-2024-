// 값을 적용할 속성이 2개 이상일 때 객체 형태로 지정{}
/**
 * filter 선택자
 * 1) eq()
 * 2) even, odd
 * 3) gt()
 * 4) lt()
 */
$(function() {
  // eq()
  // $('.gnb>li:eq(0)').css({
  //   'border': '2px solid red',
  //   'font-size': '30px',
  // });
  
  // even은 홀수번째 선택, 첫 요소가 0부터 시작이기 때문
  // $('.gnb>li:even').css({
  //   'border': '2px solid red',
  //   'font-size': '30px',
  // });

  // gt(0): greater than, 첫번째 요소 제외한 나머지 요소 선택
  // $('.gnb>li:gt(0)').css({
  //   'border': '2px solid red',
  //   'font-size': '30px',
  // });

  // lt(마지막 요소): less than
  // $('.gnb>li:lt(3)').css('border', '2px solid red');

  // eq 메서드 사용
  let idx = 2;
  // $('.gnb>li:eq(' + idx + ')').css('border', '2px solid red');
  $('.gnb>li').eq(idx).css('border', '2px solid red');
})