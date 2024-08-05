$(function() {
  $('.gnb').on('mouseenter', function() {
    $('#header').addClass('on')
  });
  $('.gnb').on('mouseleave', function() {
    $('#header').removeClass('on')
  });

  // 메인슬라이더
  let mainSlider = new Swiper('.main_slider .swiper', {
    loop: true,
    allowTouchMove: false,
    speed: 500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
   });
   
  //  pagination autoplay button
  $('.main_slider .autoplay_btn').on('click', function() {
    $(this).toggleClass('on');
    
    if ($(this).hasClass('on')) {
      mainSlider.autoplay.stop();
    } else {
      mainSlider.autoplay.start();
    }
  });

  // main_menu li 선택시 active 변경
  $('.main_menu .menu_tab li').on('click', function(e) {
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    
    // li의 index값 변수에 저장
    let idx = $(this).index();
  
    // 클릭시 필터선택자 eq()로 특정번째 요소 선택, menu_slider와 연결
   $('.main_menu .menu_slider')
    .eq(idx).addClass('active')
    .siblings()
    .removeClass('active');
  });


  // main_menu swiper
  let menuSlider = new Swiper('.menu_slider .swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    allowTouchMove: false,
    speed: 200,
    navigation: {
      nextEl: '.menu_slider .swiper-button-next',
      prevEl: '.menu_slider .swiper-button-prev',
    }
   });
});