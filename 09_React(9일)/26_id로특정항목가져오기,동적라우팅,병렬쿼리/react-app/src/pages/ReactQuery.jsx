import { useUserName } from '../hooks/useUserName';
import { Link } from 'react-router-dom';

export default function ReactQuery() {
  const { isLoading, isFetching, data, isError, error, refetch } =
    useUserName();
    console.log(data);
    

  return (
    <div className="react_query">
      <h2>React Query page</h2>
      <ul className="list">
        {data?.map((user) => (
          <li key={user.id}>
            <Link to={`/react-query/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
