// import Profile from './Profile';
import './App.css';

function Card({ children, className = ''}) {
  console.log(className);
  return <div className={`card ${className}`}>{children}</div>;
}

export default function Profile() {
  return (
    <div className="profile">
      <Card>
        <h3>Photo</h3>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card className="card2">
        <h3>About</h3>
        <p>
          Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
          natural treatment to schistosomiasis.
        </p>
      </Card>
    </div>
  );
}

// export default function Gallery() {
//   return (
//     <div className="app">
//       <Profile
//         imageId="szV5sdG"
//         name="Maria Skłodowska-Curie"
//         profession="physicist and chemist"
//         discovery="polonium (chemical element)"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal',
//         ]}
//       />
//       <Profile
//         imageId="YfeOqp2"
//         name="Katsuko Saruhashi"
//         profession="geochemist"
//         discovery="a method for measuring carbon dioxide in seawater"
//         awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
//       />
//     </div>
//   );
// }

