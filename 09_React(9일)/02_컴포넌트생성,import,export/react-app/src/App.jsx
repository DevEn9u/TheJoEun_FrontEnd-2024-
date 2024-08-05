// default export는 이름을 바꿀 수 있고 중괄호 없이 불러올 수 있는데, named export는 여러개일 수 있기 때문에 { }안에 객체(객체 구조 분해 문법)로 불러온다.

import Gallery from './Gallery';
import Profile from './Profile';

export default function App() {
  return (
    <>
      <Gallery />
      <Profile />
    </>
  );
}
