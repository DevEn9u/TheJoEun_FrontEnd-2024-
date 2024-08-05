// 컴포넌트 생성
// 컴포넌트함수: jsx를 return하는 함수이며 앞글자를 대문자(pascal 표기법)로 표기

import Profile from "./Profile";


// 컴포넌트 사용
// 함수는 반복 실행 가능하다!
// App.jsx에서 Gallery로 내보내지지만, default export는 이름이 바뀔 수 있기 때문에 main.jsx에서 import 할 때 App으로 불러올 수 있다.
export default function Gallery() {
  return (
    <section>
      <h2>놀라운 과학자들</h2>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}