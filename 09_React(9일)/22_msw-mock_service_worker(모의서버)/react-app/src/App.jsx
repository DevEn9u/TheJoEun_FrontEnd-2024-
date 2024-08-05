import { useEffect, useState, useRef } from 'react';

export default function App() {
  const [peopleData, setPeopleData] = useState([]);
  const idRef = useRef(3);

  // 현재 더미데이터로 id가 3개가 있기 때문에 그 다음 들어오는 data를 4로 만들기 위해 useRef(3) 하고 ++해줌
  idRef.current++;

  let ignore = false;

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     // fetch()는 Promise를 return하는 함수에만 사용 가능
    //     const response = await fetch('/people');
    //     const data = await response.json();
    //     setPeopleData(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchData();

    // 데이터 추가하기
    async function createData() {
      try {
        if (!ignore) {
          // POST 방식은 data를 추가로 만들 때 사용, fetch함수에 추가로 배열 작성
          const response = await fetch('/people', {
            method: 'POST',
            // stringify(): 데이터 전송시 js형태를 json형태로 변경
            body: JSON.stringify({
              id: idRef.current,
              name: 'son',
              country: 'asia',
              lang: 'php',
            }),
          });
          const data = await response.json();
          setPeopleData(data);
        }
      } catch (err) {
        console.error(err);
      }
    }
    createData();

    // 클린업함수(클로저) return. 클린업함수는 App 컴포넌트가 언마운트(화면에서 사라질 때)될 때, 즉 두 번 실행되기 전에 호출됨
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <div>
      {/* 최초 로딩시 배열데이터가 없으므로 배열요소가 있을때 화면에 렌더링 */}
      {peopleData?.length > 0 ? (
        peopleData.map((item) => (
          <div key={item.id}>
            <p>이름 : {item.name}</p>
            <p>나라 : {item.country}</p>
            <p>언어 : {item.lang}</p>
          </div>
        ))
      ) : (
        <p>...로딩중</p>
      )}
    </div>
  );
}
