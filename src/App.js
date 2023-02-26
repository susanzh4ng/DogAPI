import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [dog, setDog] = useState({
    randomImage: "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_9903.jpg"
  })
  const [allDogs, setAllDogs] = useState([])
  useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then(res => res.json())
            .then(data => setAllDogs(data.message))
    }, [])
  function getDog() {
    const rand = Math.floor(Math.random() * allDogs.length);
    console.log(`Rand here is ${rand}`)
    const url = allDogs[rand]
    setDog({randomImage: url});
    console.log(`Dog here is: ` + dog.randomImage);
    console.log(`Dog here is: ` + url);
    console.log(`allDogs.length is: ` + allDogs.length);
  }
  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <h1>⭑☆ Dog API ☆⭑</h1>
      <img src={dog.randomImage} alt="Randomly generated dog" className="dogPic" />
      <button onClick={getDog} className="dogButton">Generate Serotonin</button>
    </div>
  );
}

export default App;
