// import { useState } from 'react';
import { useImmer } from 'use-immer';
import './App.css';

export default function Form() {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  function handleChangeName(e) {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleChangeTitle(e) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleChangeCity(e) {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleChangeImage(e) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <div>
        <label htmlFor="input1">Name: </label>
        <input
          type="text"
          id="input1"
          value={person.name}
          onChange={handleChangeName}
        />
      </div>
      <div>
        <label htmlFor="input2">Title: </label>
        <input
          type="text"
          id="input2"
          value={person.artwork.title}
          onChange={handleChangeTitle}
        />
      </div>
      <div>
        <label htmlFor="input3">City: </label>
        <input
          type="text"
          id="input3"
          value={person.artwork.city}
          onChange={handleChangeCity}
        />
      </div>
      <div>
        <label htmlFor="input4">Image: </label>
        <input
          type="text"
          id="input4"
          value={person.artwork.image}
          onChange={handleChangeImage}
        />
      </div>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
