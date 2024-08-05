import { useEffect, useState } from 'react';
import './App.css';
import MovieSearch from './MovieSearch';
import MovieTab from './MovieTab';
import MovieList from './MovieList';
import Pagination from './components/Pagination';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=88b29b49';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  // 외부 시스템(여기선 API)과 동기화이므로 useEffect
  useEffect(() => {
    // 비동기 함수 async function 선언
    async function searchMovies() {
      //  await 키워드로 Promise 객체 리턴시까지 기다림
      // 서버에 요청한 응답 데이터
      const response = await fetch(
        `${API_URL}&s=${title}&type=${type}&page=${page}`
      );
      // 넘어온 Json 파일을 JS 객체로 변환하는 것을 await으로 기다림
      const data = await response.json();
      // 년도 기준 내림차순 정렬, Search는 API로 가져온 배열 객체, 간혹 읽지 못하는 경우가 있어 ES6 문법인 Optional이라고 불리는 ?를 붙임. 앞에 요소가 없을때(undefined, null)일때 error 발생 안함
      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));
      setMovies(sortData);
      setTotalPage(Math.ceil(data.totalResults / 10));
    }
    searchMovies();
  }, [title, type, page]);
  console.log(movies);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieTab type={type} setType={setType} />
      <MovieList movies={movies} />
      {/* 영화데이터 없을 때 pagination 안보이게하기 */}
      {movies && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={totalPage}
          limit={5}
        />
      )}
    </div>
  );
}
