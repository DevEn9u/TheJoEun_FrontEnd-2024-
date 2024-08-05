import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function ReactQuery() {
  // main.jsx에서 생성한 queryClient 컨택스트 가져오기 -> useMutation 안에서 사용하기 위해서
  const queryClient = useQueryClient();
  // 코드 힌트에 option이라고 나오면 객체라고 생각
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => fetch('/people').then((res) => res.json()),
  });

  const { mutate } = useMutation({
    mutationFn: (user) =>
      fetch('/people', {
        // user data를 보냄
        method: 'POST',
        body: JSON.stringify(user),
      }),
    onSuccess: () => {
      // userInfo키의 데이터 초기화후 서버의 데이터 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['userInfo'] });
    },
  });

  function handleCreateUser() {
    const user = {
      id: Date.now(),
      name: 'son',
      country: 'asia',
      lang: 'php',
    };
    mutate(user);
  }

  console.log(isLoading);

  if (isLoading) return <>Loading...</>;

  if (isError) return <>{error.message}</>;

  return (
    <div className="react_query">
      <h2>React Query page</h2>
      <ul className="list">
        {data?.map((person) => (
          <li key={person.id}>
            이름: {person.name} / 국가: {person.country} / 개발언어:{' '}
            {person.lang}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleCreateUser}>
        user 추가
      </button>
    </div>
  );
}
