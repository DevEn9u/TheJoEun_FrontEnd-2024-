import './App.css';
import { useState, useRef, useEffect } from 'react';
import MyInput from './components/MyInput';

export default function App() {
  const [isShow, setIsShow] = useState(true);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div className="app">
      <button type="button" onClick={() => setIsShow(!isShow)} className='btn'>
        {isShow ? 'form 숨기기' : 'form 보이기'}
      </button>
      {isShow && (
        <div className="input_area">
          <div>
            <label>First Name: </label>
            <MyInput
              shouldFocus={true}
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label>Last Name: </label>
            <MyInput value={lastName} onChange={handleLastNameChange} />
          </div>
          <p>
            안녕하세요. <b>{firstName}</b> <b>{lastName}</b>
          </p>
        </div>
      )}
    </div>
  );
}
