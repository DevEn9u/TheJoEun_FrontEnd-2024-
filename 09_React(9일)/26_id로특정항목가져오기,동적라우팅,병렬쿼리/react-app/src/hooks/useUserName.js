import { useQuery } from '@tanstack/react-query';

export function useUserName() {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: () => fetch('/people').then((res) => res.json()),
    // 들어온 데이터 중 원하는 값만 filter해서 새로운 배열로 받아 return
    // data는 객체의 모든 data 있고, userName은 이름만 담긴 배열
    // select: (data) => {
    //   const userName = data?.map((user) => user.name);
    //   return userName;
    // },
    // enabled: false,
  });
}
