# display:flex

- 요소의 좌우 배치시 사용

- 반응형에서 처음에 좌우 행구조에서 위아래로 레이아웃 변경될경우 사용

- 요소의 순서변경등 레이아웃의 변화가 많을경우 편함(flex-direction, flex-wrap, order)

- 처음부터 행열 구조(표처럼)일 경우 display:grid 사용

- 수직정렬시 flex사용하면 쉽게 가능(align-items:center)

- align-items 한줄전체 수직정렬

- align-content 여러줄 전체 수직정렬

- align-self 요소 한개만 수직정렬

- flex-grow:0 - 확대여부

- flex-shrink:1 - 축소여부

- flex-basis:auto - 기본크기

- flex item에 z-index 사용 가능.

- inline-element가 flex-item이라면 block으로 변경됨.

# display:flex 이슈

- flex아이템이 한줄(flex-wrap:nowrap)일 경우  좌우 margin 주면 flex아이템은 크기가 자동으로 줄어듬(flex-shrink:1이므로)

- flex아이템이 여러줄(flex-wrap:wrap)일 경우 좌우 margin 주면 크기 안줄어듬(여백만큼 여러줄로 내려가므로)

- flex구조를 두줄로 하여 좌우여백을 줄경우 padding사용하여 크기안으로 포함되게 해야함

- flex아이템의 가로는 width로 잡는것이 좋음

- flex-basis는 사용 지양.

- display:none으로 안보이게 한경우 display:flex로 보여줘야함. display: block이면 flex구조가 사라지기 때문.

- 탭내용이 flex이면서 display: none을 해놨을 경우 제이쿼리 .hide()메서드로 꺼야함
  이유: css display:none사용시 display:block으로 보여지므로

- flex아이템의 margin에 auto적용시 flex부모의 끝까지 자동으로 배치됨

- 부모가 flex이면서 flex아이템일 경우 자식요소 좌우 마진, 패딩 %사용시
  부모가로가 자식요소 가로만큼 자동으로 잡히지않음
  이유: 마진, 패딩 %는 부모의 가로길이 기준이고 flex요소(부모)의 가로는 자식만큼이므로 서로 상충
  해결: 자식의 마진, 패딩은 px사용, 또는 부모에서 flex-wrap:wrap
