// jQuery 이용

/**
 * ready 
 * ready(eventHandler함수)는 'DOMContentLoaded'이벤트
 * 원래는 $(document).ready(function() {})
 * ready는 생략해서 다음과 같이 사용
 */
$(function() {
  // js로 동적으로 css control, 이 때 inline style로 적용됨
  $('#header').css('border', '10px solid red');
  // $()로 요소 선택시 유사배열 형태로 선택됨. .length도 사용 가능
  console.log($('.gnb>li').length);

  $('#header .logo').css('border', '2px solid black');
  $('.gnb>li:nth-child(2)').css('border', '3px solid black');
});