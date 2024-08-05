import { create } from 'zustand';

const useStore = create((set) => ({
  // 전역상태
  bears: 0,
  // 전역상태 조작 메서드
  // 조작을 하기위해 state를 받아와서 새로운 객체로 변경
  increasePopulation: function () {
    // set함수 안에서 callback funciton 사용하여 이전 state를 받고 새로운 객체로 업데이트
    set((state) => ({ bears: state.bears + 1 }));
  },
  decreasePopulation: function () {
    // set함수 안에서 callback funciton 사용하여 이전 state를 받고 새로운 객체로 업데이트
    set((state) => (
      state.bears !== 0 ? { bears: state.bears - 1 } : { bears: state.bears }
    ));
  },
  removeAllBears: function () {
    // 조작할 필요 없어서 바로 새로운 객체로 생성
    set({ bears: 0 });
  },
}));

// default는 변수 앞에 사용 불가 하니 아래에서 export
export default useStore;
