// 라우터 링크 컴포넌트
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
  return (
    <header className="header">
      <ul className="gnb">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/react-query'}>리액트 쿼리</Link>
        </li>
      </ul>
    </header>
  );
}
