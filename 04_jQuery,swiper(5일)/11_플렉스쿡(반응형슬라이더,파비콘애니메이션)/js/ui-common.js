$(function() {
  // attr(value, 텍스트): attributeName을 string으로 적으면 접근 가능, 파라미터를 1개만 쓰면 값만 가져옴(get)

  // let faviconFolder = '/images/favicon/'
  // let faviconNames = [
  //   'favicon_logo_01.ico',
  //   'favicon_logo_02.ico',
  //   'favicon_logo_03.ico',
  //   'favicon_logo_04.ico',
  //   'favicon_logo_05.ico',
  //   'favicon_logo_06.ico',
  //   'favicon_logo_07.ico',
  // ];
  // let idx = 0;
  // const faviFun = function() {
  //   $('#favicon').attr('href', faviconFolder + faviconNames[idx++]);
  //   idx %= faviconNames.length;
  // };
  //   setInterval(faviFun, 150);

  let faviconIdx = 1;
  // 한번만 선택후 사용, 타이머함수에서 선택하면 매시간 요소를 탐색하기 때문
  const faviconEl = $('#favicon');

  setInterval(() => {
    // faviconIdx++;

    // if (faviconIdx === 8) {
    //   faviconIdx = 1;
    // }; 
    faviconIdx = faviconIdx === 7 ? 1 : faviconIdx + 1;
    faviconEl.attr('href', `images/favicon/favicon_logo_0${faviconIdx}.ico`)
  });
    
    // live 슬라이더
  const mainLive = new Swiper('.main_live .swiper', {
    // 모바일 기본 세팅
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      // 태블릿 
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // 데스크탑
      1201: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
})