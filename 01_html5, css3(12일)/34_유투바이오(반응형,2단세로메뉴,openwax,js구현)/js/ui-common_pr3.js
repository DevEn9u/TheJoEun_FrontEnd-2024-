window.addEventListener('DOMContentLoaded', function() {
  // header fixed
  const header = document.querySelector('#header')

  window.addEventListener('scroll', function() {
    let _scrollY = window.scrollY;

    if(_scrollY > 0) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });

  // language menu
  document.
  querySelector('#header .lang_btn')
  .addEventListener('click', function() {
    document.querySelector('#header .lang_wrap').classList.toggle('on');
  });

  // open_btn
  document.
  querySelector('#header .open_btn')
  .addEventListener('click', function() {
    // body의 scroll 바를 안보이게 하려고함, ios는 적용 안됨
    document.body.classList.toggle('on');
    header.classList.toggle('on');
    // 처음 대상과 동일해서 this로 사용 가능
    this.classList.toggle('on');
    document.querySelector('#header .m_gnb_wrap').classList.toggle('on');
  });

  // 모바일 사이드 메뉴(아코디언 메뉴 형식)
  const mGnb = document.querySelectorAll('#header .m_gnb>li>a');
  // js에서 형제 요소를 선택하는 키워드가 없어서 함수를 만들어서 해결
  function siblings(t) {
    // 모든 타겟 요소(t)의 부모 요소(parentElement property의 모든 자식요소 선택(children property) return을 유사배열로 함
    const children = t.parentElement.children;
    const tempArr = [];
   
    // children은 htmlCollection 유사배열이므로 forEach()는 사용 불가하고 for문 사용해야함 => 유사배열을 tempArr로 배열로 만드려고 함
    for (let i = 0; i < children.length; i++) {
      tempArr.push(children[i]);
    }
    // filter()는 주어진 함수를 만족하는 모든 요소를 모아 새배열로 반환, 여기서는 유사배열을 모아 배열로 만든 tempArr에 들어온 filter를 적용, 임시배열 안의 형제 요소중 타겟요소와 같지 않은 요소들을 retrun받아 새로운 배열을 return
    return tempArr.filter(v => {
      return v !== t;
    });
  }
  
  // a들을 배열로 만들어 반복문으로 연결, v = a
  mGnb.forEach((v) => {
    v.addEventListener('click', function(e) {
      // event 객체의 기본값을 제한, a 태그의 href="#"는 위로 위동이 기본 이벤트
      e.preventDefault();
      // a의 부모인 li의 class toggle
      this.parentElement.classList.toggle('on');
      // siblings(this.parentElement).classList.remove('on')은 적용이 안됨, 배열이기 때문에! / a의 부모인 li의 형제 li의 class on 제거
      siblings(this.parentElement).forEach(v =>{
        v.classList.remove('on');
      })
    });
  });

})


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