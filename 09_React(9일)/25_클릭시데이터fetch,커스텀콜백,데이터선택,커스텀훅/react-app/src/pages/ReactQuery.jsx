import { useUserName } from '../hooks/useUserName';

export default function ReactQuery() {
  const { isLoading, isFetching, data, isError, error, refetch } =
    useUserName();

  return (
    <div className="react_query">
      <h2>React Query page</h2>
      <button type="button" onClick={refetch}>
        데이터 가져오기
      </button>
      <ul className="list">
        {data?.map((name) => (
          <li key={name}>이름: {name}</li>
        ))}
      </ul>
    </div>
  );
}
