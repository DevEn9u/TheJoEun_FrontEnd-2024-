import { getImageUrl } from "./utils";

const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink',
  },
};

// 필요에 따라 내보내는 export default component function의 이름과 파일의 이름(여기서는 App.jsx)이 다를 수 있다.
export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}&apos;s Todos</h1>
      <img
        src={getImageUrl(person)}
        alt={person.name}
        className="avatar"
      />
      <ul>
        <li>화상전화 개선</li>
        <li>항공학 강의 준비</li>
        <li>알코올 연료 엔진 작업</li>
      </ul>
    </div>
  );
}
