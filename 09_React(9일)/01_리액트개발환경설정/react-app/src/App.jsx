import './App.css';
// 폴더구조가 간단할 때는 이 방법
// import Header from './components/Header';
// 폴더구조가 복잡할 때는 루트경로를 의미하는 '@' 이용
import Header from '@/components/Header';


export default function App() {
  console.log('렌더링됨');
  
  return (
    <div>
      <Header />
      App
    </div>
  );
}
