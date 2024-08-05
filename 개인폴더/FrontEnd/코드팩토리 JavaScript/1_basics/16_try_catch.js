/**
 * try...catch
 * 
 * 1) 발생시킬때 던진다 라고 한다(throw)
 * 2) 명시적으로 인지할 때 잡는다 라고 한다(catch)
 */
runner = () => {

  try { // try 안에 실행할 코드 입력
    console.log('Hello, ');
    
    throw new Error('이름이 입력되지 않았습니다'); // error 발생시킴

    console.log('james'); // eroor 발생함에 따라 실행되지 않음
  } catch(e) { // error가 throw되면 catch문으로 오게 됨.
    console.log('---catch---'); // catch문에 와서 실행됨. error발생 안할 경우catch문은 실행안됨. 
    console.log(e); // error 상세내역, 입력안하면 출력 안됨.
  } finally { // error가 발생하든 안하든 마지막에 실행됨.
    console.log('---finally---');
  }
}
runner();


/** 예시
 
 function 함수이름() {
  try {
    실행할 코드
    throw new Error('에러 내용');
  } catch(e) {
    console.log('에러 발생시 출력할 내용');
  } finally {
    에러가 나든 안나든 마지막에 실행할 코드 작성
  }
}

 * error가 발생 안할 경우 catch문은 실행되지 않음.
 * finally는 에러가 발생하든 안하든 실행됨.
 * finally는 써도 되고 안써도 된다(optional).
 */

