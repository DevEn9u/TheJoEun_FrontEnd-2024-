// utils.js에 getImageUrl 함수로 분리하기

// named export component function
export function getImageUrl(person) {
  return `https://i.imgur.com/${person.imageId}${person.imageSize}.jpg`
}