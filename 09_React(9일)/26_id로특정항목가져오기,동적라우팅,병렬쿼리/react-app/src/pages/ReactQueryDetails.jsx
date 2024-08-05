import { useParams } from 'react-router-dom';
import { useUserId } from '../hooks/useUserId';

export default function ReactQueryDetails() {
  // url(useUserId)에서 변수(parameter) 가져오기
  const { userId } = useParams();

  // userId로 데이터 요청
  const { isLoading, isError, error, data } = useUserId(userId);

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{error.message}</>;
  console.log(data,'===');

  return (
    <>
      {data && (
        <div>
          {/* data배열 첫번째 요소의 객체사용 */}
          <p>ID : {data[0].id}</p>
          <p>NAME : {data[0].name}</p>
          <p>COTUNTRY : {data[0].country}</p>
        </div>
      )}
    </>
  );
}
