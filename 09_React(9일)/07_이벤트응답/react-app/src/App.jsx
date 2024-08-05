import './App.css';

export default function App() {
  function handleChangeBg() {
    const bodyStyle = document.body.style;
    
    if (bodyStyle.backgroundColor === '') {
      bodyStyle.backgroundColor = 'black';
    } else {
      bodyStyle.backgroundColor = ''; 
    }
  }
  
  return <button type="button" onClick={handleChangeBg}>body color 변경 버튼</button>
}
