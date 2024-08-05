/**
 * 탐색메서드
 * js에서는 형제선택자가 없어서 siblings라는 함수를 만들어 사용
 * jQuery에서는 형제선택자 siblings() 메서드가 존재
 * .on: js에서의 .addEventListener
 * $()을 이용하면 js DOM을 jQuery 객체로 변환 가능
 * - $(this): 이벤트 연결 대상
 * 1) $(this).children(): 자식 요소 선택
 * 2) $(this).find('>a'): js에서의 querySelector, 하위요소 선택
 * 3) $(this).prev(): 이전 형제 선택
 * 4) $(this).prevAll(): 이전 형제 모두 선택
 * 5) $(this).next(): 다음 형제 선택
 * 6) $(this).nextAll(): 다음 형제 모두 선택
 * 7) $(this).siblings(): 자신을 제외한 형제 모두 선택
 * 8) $(this).parent(): 부모 선택
 * 9) $(this).closest('#header'): 조상 선택, 조상이 많기 때문에 이름 명시해야함
 * 10) $('gnb>li').filter(':nth-child(1)'): 기존 선택된 요소에서 재선택
 */
$(function() {
  $('.gnb>li').on('click', function() {
    // this는 js DOM이므로 jQuery method 사용 불가, $()를 이용해 jQuery 객체로 변환 가능
    console.log($(this));
    // this.css('border', '1px solid red');
    // $(this).css('border', '1px solid red');
    // 자식요소는 children()
    // $(), children()은 jQuery 객체를 return하므로 메서드 체인 가능
    // $(this).children().css('border', '1px solid red');
    // '>'를 이용해 모든 자식요소가 아닌 하위요소 선택가능
    // $(this).find('>a').css('background', 'gray');
    // prev(): 이전 형제 선택
    // $(this).prev().css('background', 'gray');
    // prevAll(): 모든 이전 형제 선택
    // $(this).prevAll().css('background', 'gray');
    // next(): 다음 형제 선택
    // $(this).nextAll().css('background', 'gray');
    // nextAll(): 모든 다음 형제 선택
    // $(this).nextAll().css('background', 'gray');
    // siblings(): 자신을 제외한 형제요소 선택 
    // $(this).siblings().css('background', 'gray');
    // parent(): 부모 선택
    // $(this).parent().css('background', 'gray');
    // closest('조상명'): 조상 선택
    // $(this).closest('#header .inner').css('background', 'gray');
    // filter(): 기존 선택된 요소에서 재선택
    // $('.gnb>li')
    //   .css('background', 'gray')
    //   .filter(':nth-child(1)')
    //   .css('border', '2px solid red');
    // end(): 메서드체인으로 여러 요소를 연속적으로 선택할 때 선택 후 이전선택된 요소로 돌아감
    // text()는 js에서 textContent와 동일, text 변경
    $(this)
      .css('background', 'gray')
      .find('>a')
      .text('곧 점심이당')
      // end()로 인해 .gnb>li>a에서 .gnb>li로 선택됨
      .end()
      .css('border', '2px solid red');
  });
});