// utils.js에 getImageUrl 함수로 분리하기

// named export component function
export function getImageUrl(imageId, size = 's') {
  return `https://i.imgur.com/${imageId}${size}.jpg`
}