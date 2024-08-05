$(function() {
  $('.gnb').on('mouseenter', function() {
    $('#header').addClass('on')
  });
  $('.gnb').on('mouseleave', function() {
    $('#header').removeClass('on')
  });

  // 메인슬라이더
  // 기존 공식 변수는 const지만 바꿔야하는 경우도 있어 let
  let mainSlider = new Swiper('.main_slider .swiper', {
    loop: true,
    // slide 이동 속도
    speed: 500,
    // 마우스 드래그(모바일에서의 swipe 동작) 끄기
    allowTouchMove: false,
    autoplay: {
      delay: 1000,
      // user interaction(swipes)이 일어나면 기본값 true여서 autoplay가 멈추지만 false로 설정해 pagination이나 swipe로 이동을 해도 autoplay됨
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // pagination autoplay button
  // swiper 10버젼에서는 변수.autoplay.stop() / 11버젼에서는 변수.stop()
  $('.main_slider .autoplay_btn').on('click', function() {
    $(this).toggleClass('on');
    if ($(this).hasClass('on')) {
      mainSlider.autoplay.stop();
    } else {
      mainSlider.autoplay.start();
    };
  });

  // .main_menu .menu_tab li 클릭시 active 변경
  $('.main_menu .menu_tab li').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
  
    // 그룹 요소중 클릭한 요소의 index값
    let idx = $(this).index();
  
    // 클릭시 필터선택자 eQ()로 특정 번째 요소 선택하여 .menu_slider와 연결
    $('.main_menu .menu_slider')
      .eq(idx).addClass('active')
      .siblings()
      .removeClass('active');
  });

  // 메인 슬라이더 swiper
  // 좌우 화살표를 .swiper 밖으로 뺄 경우 부모이름을 적어야함
  let menuSldier = new Swiper('.menu_slider .swiper', {
    slidesPerView: 4,
    // slide item의 좌우 간격 조절
    spaceBetween: 30,
    speed: 200,
    navigation: {
      nextEl: '.menu_slider .swiper-button-next',
      prevEl: '.menu_slider .swiper-button-prev',
    },
  });
});