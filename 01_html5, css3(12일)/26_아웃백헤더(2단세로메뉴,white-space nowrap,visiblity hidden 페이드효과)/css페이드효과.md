# css 페이드 효과

opacity만 사용시 요소 영역에서 hover가 동작하므로 visibility: hidden으로 마우스이벤트 발생되지않게함

```css
#header .gnb .depth02 {
  visibility: hidden;
  opacity: 0;
  transition:all 0.5s;
}

#header .gnb>li:hover .depth02 {
  visibility: visible;
  opacity: 1;
}
```

- `display:none`, 요소 영역도 사라지며 마우스이벤트 발생안함, `transition` 불가
  `opacity:0`, 요소 영역이 있지만 안보이며 마우스이벤트 발생, `transition`가능
  `visibility: hidden`,  요소 영역이 있지만 안보이며 마우스이벤트 발생안함, `transition`가능

- 결론: 요소를 껏다 켰다할경우 `display:none` -> `display:block`
  요소를 서서히 보여줄경우(fade효과) `opacity:0; visibility:hidden `-> `opacity:1; visibility:visible`
