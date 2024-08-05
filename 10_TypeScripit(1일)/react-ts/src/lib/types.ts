export type Todo = {
  id: number;
  text: string;
  done: boolean;
}[];
// Todo type은 배열인데 객체가 들어가는 배열

export type NumType = number[];
// TestType은 배열인데 안에 배열이고 안에 number type이 있다. 뒤에서부터 읽으면 됨
// ex) [[1, 2], []]
export type TestType = number[][]