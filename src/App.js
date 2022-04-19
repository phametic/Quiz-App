import './App.css';
import { useState, useEffect } from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';


function App() {

const [mainScreen, setMainScreen] = useState(true);
const [triviaData, setTriviaData] = useState([]);

useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://opentdb.com/api.php?amount=10&encode=url3986");
    const data = await res.json();
    setTriviaData(data.results)
  }
  fetchData();
  
}, []);

function handleClick() {
  setMainScreen(prevState => !prevState);
}

  return (
    <div className="font-rubik">
      {
      mainScreen 
        ? 
          <MainScreen clickHandler={handleClick}/> 
        :
          <GameScreen triviaData={triviaData} setScreen={setMainScreen}/>
      }
    </div>
  );
}

export default App;
