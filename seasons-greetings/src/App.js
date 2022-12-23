import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { getJoke } from './lib/api';
import Snowfall from 'react-snowfall'

function App() {
  const [joke, setJoke] = useState(null)

  


  const getNewJoke = async () => {
    try {
      let newJoke = await getJoke()
      setJoke(newJoke)
      console.log(joke)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNewJoke();
  }, [])


  return (
    <div className="App">

    <Snowfall />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>
          MERRY CHRISTMAS!
        </h2>

        <button
          onClick={getNewJoke}
        >
          Tell me a Joke!
        </button>

        <p>
          {joke ? joke.data.setup : 'Loading Joke Setup...'}
        </p>
        <p class='punchline'>
          {joke ? joke.data.delivery : 'Loading Joke Punchline...'}
        </p>
        
      </header>
    </div>
  );
}

export default App;
