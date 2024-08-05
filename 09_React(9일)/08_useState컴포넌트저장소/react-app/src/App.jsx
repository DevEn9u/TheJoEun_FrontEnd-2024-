import { useState } from 'react';
import './App.css';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  function handleChangeFirstName() {
    setPerson({
      
    })
  }

  return (
    <>
      <div>
        <label htmlFor="first">First name: </label>
        <input
          type="text"
          value={personalbar.firstName}
          onChange={handleChangeFirstName}
          id="first"
        />
      </div>
      {/* <div>
        <label htmlFor="last">Last name: </label>
        <input
          type="text"
          value={personalbar.lastName}
          onChange={handleChangeLastName}
          id="last"
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          value={personalbar.email}
          onChange={handleChangeEmail}
          id="email"
        />
      </div> */}
    </>
  );
}
