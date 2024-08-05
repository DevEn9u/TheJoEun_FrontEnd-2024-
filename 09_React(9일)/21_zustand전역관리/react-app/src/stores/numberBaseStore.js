import { create } from 'zustand';

// 숫자형태의 전역 상태 2개 추가 후 1씩 증가, 3씩 증가하는 전역스토어
const useNumberBaseStore = create((set) => ({
  // 전역 상태
  numberA: 0,
  numberB: 0,

  increaseNumberA: function () {
    set((state) => ({ numberA: state.numberA + 1 }));
  },
  increaseNumberB: function (num) {
    set((state) => ({ numberB: state.numberB + num }));
  },
}));

export default useNumberBaseStore;
