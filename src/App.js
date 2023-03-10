import './App.css';
import React, {useState, useEffect} from 'react';
import Link from './Link';


function App() {
  const [dog, setDog] = useState({
    randomImage: "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_9903.jpg"
  })
  const [allDogs, setAllDogs] = useState("");
  const [count, setCount] = useState(0);
  const [pop, setPop] = useState(false);

  useEffect(() => {
    const fetchDog = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random")
      result.json().then(json => {
        console.log(json);
        setAllDogs(json.message)
      })
    }
    fetchDog();
  }, [count])

  function getDog() {
    setCount(prevCount => prevCount+1)
    const url = allDogs
    setDog({randomImage: url});
    console.log(`Dog here is: ` + dog.randomImage);
  }


  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <h1>⭑☆ Dog API ☆⭑</h1>
      <img src={dog.randomImage} alt="Randomly generated dog" className="dogPic" />
      <button onClick={getDog} className="dogButton">Generate Serotonin</button>
      <button className="sourceButton" onClick={() => setPop(true)}>Get Source!</button>
      <Link trigger={pop} setTrigger={setPop}/>
    </div>
  );
}

export default App;
