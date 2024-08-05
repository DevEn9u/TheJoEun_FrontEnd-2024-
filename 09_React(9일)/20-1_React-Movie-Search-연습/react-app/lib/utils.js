// utils.js에 getImageUrl 함수로 분리하기

// named export component function
export function getImageUrl(person, size = 's') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`
}

// 전체페이지를 페이지 리미트 만큼 잘라서 배열로 리턴해주는 함수
export function sliceArrayByLimit(totalPage, limit) {
  const totalPageArray = Array(totalPage)
    .fill()
    .map((_, i) => i);
  return Array(Math.ceil(totalPage / limit))
    .fill()
    .map(() => totalPageArray.splice(0, limit));
}