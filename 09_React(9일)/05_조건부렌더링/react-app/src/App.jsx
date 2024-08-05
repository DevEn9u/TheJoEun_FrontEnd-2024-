import './App.css';

// 조건 넣기
// isPacke가 true면 장비 이름과 체크 보여주고 아니면 장비 이름만 보여주기
// function Item({ name, isPacked }) {
//   if(isPacked) {
//     return <li className="item">{name} ✔</li>;
//   }
//    return <li className="item">{name}</li>;
// }

// null 사용해서 반환 안하기
// function Item({ name, isPacked }) {
//   if(isPacked) {
//     return null;
//   }
//    return <li className="item">{name}</li>;
// }

// 삼항연산자 사용
// isPacke가 true면 장비 이름과 체크 보여주고 아니면 장비 이름만 보여주기
// isPacked가 true면 .checked class를 추가해서 취소선 보여주기
// function Item({ name, isPacked }) {
//   // 조건부 렌더링
//   return (
//     <li className={`item ${isPacked ? 'checked' : ''}`}>
//       {isPacked ? name + '✔' : name}
//     </li>
//   );
// }

// 단축평가 사용
// function Item({ name, isPacked }) {
//   return (
//     <li className={`item ${isPacked ? 'checked' : ''}`}>
//       {name} {isPacked && '✔'}
//     </li>
//   );
// }

// 챌린지: 완료되지 않은 항목의 아이콘 ❌ 표시하기
function Item({ name, isPacked }) {
  return (
    <li className={`item ${isPacked ? 'checked' : ''}`}>
      {isPacked ? name + '✔' : name + '❌'}
    </li>
  );
}


export default function PackingList() {
  return (
    <section className="packing_list">
      <h1>Sally Ride&apos;s Packing List</h1>
      <ul>
        <Item isPacked={true} name="우주복" />
        <Item isPacked={true} name="황금잎이 달린 헷멧" />
        <Item isPacked={false} name="가족사진" />
      </ul>
    </section>
  );
}
