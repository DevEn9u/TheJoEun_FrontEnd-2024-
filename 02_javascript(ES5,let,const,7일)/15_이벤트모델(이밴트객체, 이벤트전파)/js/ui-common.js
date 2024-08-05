window.addEventListener('DOMContentLoaded', function() {
  /**
   * 고전이벤트: 이벤트 삭제, 추가 기능이 없으니 사용금지(onclick)
  document.querySelector('.test_btn').onclick = function() {
    console.log('안녕');
    alert('안녕');
  }
  */
  /**
   * 마우스 이벤트
   * mouseenter
   * mouseleave
   */ 
  document.
  querySelector('.test_btn').
  addEventListener('mouseenter', function() {
    this.innerHTML = '마우스 올라감';
  });

  document.
  querySelector('.test_btn').
  addEventListener('mouseleave', function() {
    this.innerHTML = '클릭이벤트 테스트';
  });


  // 이벤트전파: 하위요소에서 이벤트가 발생하면 바깥쪽 요소로 이벤트가 전파되는 현상 = Bubbling
  document.querySelector('.box_wrap').addEventListener('click', function(e) {
    // alert('바깥쪽 요소 클릭');
  });

  document.querySelector('.box_wrap .box').addEventListener('click', function(e) {
    alert('안쪽 요소 클릭');
    // stopPropagation(): 상위요소로 이벤트 전파를 막는 메서드
    // e.stopPropagation();
  });

  document.querySelector('.box a').addEventListener('click', function(e) {
    alert('a영역 클릭');
    e.preventDefault();
    // stopPropagation(): 상위요소로 이벤트 전파를 막는 메서드
    e.stopPropagation();
    // stopImmediatePropagation(): 같은 DOM에 걸린 다른 event에 전파를 막는 메서드
    e.stopImmediatePropagation();
  });

  document.querySelector('.box a').addEventListener('click', function(e) {
    alert('a영역 클릭 2');
  });


  // quiz 1. 5번클릭후 이벤트 삭제하기
  let cnt = 0;
  const removeBtn = document.querySelector('.remove_btn');

  // event 삭제시 함수명이 필요하므로 eventHandler를 기명함수로 생성 후 사용
  function handleClicker() {
    cnt++;
    this.innerHTML = cnt;

    if(cnt === 5) {
      // eventHandler에서 this는 event, 여기서는 .remove_btn
      this.removeEventListener('click', handleClicker);
    }
  };

  removeBtn.addEventListener('click', handleClicker);
});
