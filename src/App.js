import './App.css';
import { useState, useEffect } from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';
import SelectionScreen from './Components/SelectionScreen';


function App() {

const [mainScreen, setMainScreen] = useState(true);
const [triviaData, setTriviaData] = useState([]);

useEffect(() => {
  fetchData(10);
}, []);

async function fetchData(numOfQuestions) {
  const res = await fetch(`https://opentdb.com/api.php?amount=${numOfQuestions}&encode=url3986`);
  const data = await res.json();
  setTriviaData(data.results)
}

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
          <SelectionScreen />
          // <GameScreen triviaData={triviaData} setScreen={setMainScreen} fetchData={fetchData}/>
      }
    </div>
  );
}

export default App;
