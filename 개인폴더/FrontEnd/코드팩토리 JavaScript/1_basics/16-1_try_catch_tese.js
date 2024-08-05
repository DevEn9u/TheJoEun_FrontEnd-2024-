/**
 * try...catch
 * 
 * 1) 발생시킬때 던진다 라고 한다(throw)
 * 2) 명시적으로 인지할 때 잡는다 라고 한다(catch)
 */

function test1() {
  try{
  console.log('Good Morning! ');
  
  throw new Error(`It's not morning`);
  console.log('john.');
  } catch(e) {
    console.log('New Error has been detected.');
    console.log(e);
  } finally {
    console.log('Good to see you, though.');
  }
}

function test2() {
  try{
  console.log('Good Afternoon! ');
  
  // throw new Error(`It's not morning`);
  console.log('john.');
  } catch(e) { // error발생 안했기 때문에 catch문은 실행안됨.
    console.log('New Error has been detected.');
    console.log(e);
  } finally {
    console.log('Have a great day!');
  }
}

test1();
console.log('----------------------------');
test2();