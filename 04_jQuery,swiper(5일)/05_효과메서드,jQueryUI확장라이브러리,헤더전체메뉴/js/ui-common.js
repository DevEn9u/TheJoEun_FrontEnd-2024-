// DOMContentLoaded는 window, document 어느 쪽에 걸든 사용 가능
// window.addEventListener('DOMContentLoaded', function() {})

/** 
 * Class 관련 메서드
 * addClass()
 * removeClass()
 * toggleClass()
 * hasClass()
 */

// $(document).ready(function() {})의 축약형
$(function () {
  $('#header .btn').on('click', function () {
    $(this).addClass('on');
  });

  // 클릭시마다 텍스트 변경 

  // $(function() {
  //   $('#header .btn').on('click', function() {
  //     $(this).toggleClass('on');

  //     if (toggleTxt) {
  //       $(this).text('버튼 바뀜');
  //       toggleTxt = false;
  //     } else {
  //       $(this).text('버튼');
  //       toggleTxt = true;
  //     }
  //   })
  // })

  // 요소에 클래스가 동적으로 걸리는 경우 hasClass()로 조건 처리 가능
  $($('#header .btn').on('click', function () {
    $(this).toggleClass('on');

    if ($(this).hasClass('on')) {
      $(this).text('버튼 바뀜');

    } else {
      $(this).text('버튼');
    }
  }));

  // $('.gnb>li').on('mouseenter', function () {
  //   // 높이를 늘려줌
  //   $(this).find('.depth2').slideDown();
  // });

  // $('.gnb>li').on('mouseleave', function () {
  //   $(this).find('.depth2').slideUp();
  // });


  /**
   * fadeIn()
   * 스크롤시 top버튼 서서히 보이기
   * scrollTop은 js에서 scrollY
   * 동적인 css변화를 할때 fadeIn(delay ms, function() {
        $(this).css('background', 'red');
      })로 사용가능
   */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 100) {
      $('#footer .top_btn').fadeIn(200, function () {
        $(this).css('background', 'red');
      })
    } else {
      $('#footer .top_btn').fadeOut(200)
    }
  });

  // lang 메뉴 toggle
  $('#header .lang_btn').on('click', function() {
    // $(this).next().show();
    $(this).next().toggle();
  })

  // animation
  $('#header .move_btn').on('click', function() {
    $(this).animate({'margin-left': 100}, 1000, 'easeInOutBounce');
  });
});