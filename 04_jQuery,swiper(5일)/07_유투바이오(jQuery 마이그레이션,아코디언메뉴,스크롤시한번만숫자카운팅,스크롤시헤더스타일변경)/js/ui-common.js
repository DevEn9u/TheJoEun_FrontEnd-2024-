$(function () {
  // header fixed
  const header = $("#header");

  $(window).on("scroll", function () {
    let st = $(window).scrollTop();

    if (st > 0) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // language menu
  $("#header .lang_btn").on("click", function () {
    $("#header .lang_wrap").toggleClass("on");
  });

  // 모바일에서 open_btn
  $("#header .open_btn").on("click", function () {
      // body의 scroll 바를 안보이게 하려고함, ios는 적용 안됨
      $('body').toggleClass("on");
      header.toggleClass("on");
      // 처음 대상과 동일해서 this로 사용 가능
      $(this).toggleClass("on");
      $("#header .m_gnb_wrap").toggleClass("on");
    });


  // 모바일 사이드 메뉴(아코디언 메뉴 형식)
  $('.m_gnb>li>a').on('click', function() {
    $(this).parent().toggleClass('on');
    $(this).parent().siblings().removeClass('on');
  });

  // main_slider scroll down
  // 클릭시 요소의 문서에서의 위치만큼 스크롤 해야함
  $(".main_slider .scroll_down").on("click", function (e) {
      e.preventDefault();
      // jquery에서 offset().top
      let posY = $(".main_business").offset().top;
      // jQuery 스크롤 애니메이션
      $('html, body').animate({ scrollTop: posY });
    });

  // AOS 초기화
  AOS.init({
    duration: 1000,
    // 한번만 실행
    // once: true,
  });

  // 주식 정보 숫자 카운팅
  function countNum(cnt, final, amount) {
    let isScroll = false;

    $(window).on("scroll", function() {
      // 요소가 페이지 상단까지 스크롤
      // let posY = $('.main_info .info_left').offset().top;

      // 요소가 창 아래에서 위로 스크롤
      // offsetTop은 문서의 위치값 구하는 프로퍼티, .main_business의 위치값을 받아 변수 posY에 할당
      let posY = $('.main_info .info_left').offset().top -
      $(this).outerHeight();

      if ($(this).scrollTop() >= posY && isScroll === false) {
        const numEl = $(".main_info .num strong");

        const interval = setInterval(() => {
          cnt += amount;
          numEl.text(cnt);

          if (cnt >= final - amount) {
            numEl.text(final);
            clearInterval(interval);
          }
        }, 10);

        // isScroll을 true로 변경하여 다음 스크롤에 실행되지 않도록 함
        isScroll = true;
      }
      // jQuery에서는 trigger로 이벤트 강제 실행
    })
    .trigger('scroll');
  }
  countNum(0, 4185, 17);

  // footer에서 family_btn 클릭시 toggle 적용
  $("#footer .family_btn").on("click", function () {
    $(this).parent().toggleClass('on');
  });

  // top_btn
  $("#footer .top_btn").on("click", function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 });
  });
});

/** header fixed에서
 * 키워드를 변수명으로 하고 싶을 때 _ 붙이기
 * scrollY는 세로 스크롤바의 위치값
 *  document.querySelector('#header').classList.add('fixed');를 여러번 써야해서 변수에 담음: const header = document.querySelector('#header')
 * 
 * open_btn에서
 * document.querySelector('#header .open_btn').addEventListener('click', function() {document.querySelector('#header .open_btn')classList.toggle('on');
  });
}) 인데, 동일하기 때문에 this로 작성 가능한 것임
*/
/**
 * eventHandler에서 arrow function을 사용하게 되면 
 * this는 함수생성시점에서 바깥 부모함수의 this와 일치하게 된다.
 * open_btn의 코드에서   .addEventListener('click', function() {
    this.classList.toggle('on');
  }); 를 arrow function 사용하면 바깥쪽 eventhandler가 부모함수이므로 this가 window가 된다.
* 그러니 사용 x
*/
