import './App.css';
import { people } from './data';
import { getImageUrl } from './utils';

export default function List() {
  const chemists = people.filter((person) => person.profession === '화학자');
  const others = people.filter((person) => person.profession !== '화학자');

  return (
    <section>
      <h2>과학자</h2>
      <h3>화학자</h3>
      <ul className="list">
        {chemists.map((chemist) => (
          <li key={chemist.id}>
            <img
              src={getImageUrl(chemist)}
              alt={chemist.name}
              className="avatar"
            />
            <p>
              <b>{chemist.name}: </b>
              {chemist.profession}
              <b>업적: </b>
              {chemist.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <ul className="list">
        {others.map((person) => (
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
              className="avartar"
            />
            <p>
              <b>{person.name}: </b>
              {person.profession} <b>업적: </b>
              {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
