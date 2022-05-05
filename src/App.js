import './App.css';
import { useState, useEffect } from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';
import SelectionScreen from './Components/SelectionScreen';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';

function App() {

const [mainScreen, setMainScreen] = useState(true);
const [selectScreen, setSelectScreen] = useState(false)
const [gameScreen, setGameScreen] = useState(false)

const [categoriesData, setCategoriesData] = useState([]);
const [triviaData, setTriviaData] = useState([]);
const [counter, setCounter] = useState(20);

useEffect(() => {
  fetchCategories();
  //fetchData(10);
}, []);

async function fetchCategories() {
    const res = await fetch(`https://opentdb.com/api_category.php`);
    if(res.status !== 200) {
      throw new Error("Cannot fetch data.")
    }
    console.log(res)
    const data = await res.json();
    setCategoriesData(data.trivia_categories)
    console.log(data)
}

function handleClick() {
  setMainScreen(prevState => !prevState);
  setSelectScreen(prevState => !prevState)
}

  return (
    <div className="font-rubik">
          {mainScreen && 
          <Fade>
            <MainScreen clickHandler={handleClick}/>
          </Fade>
          }
          {selectScreen && 
          <Fade>
            <SelectionScreen setMainScreen={setMainScreen} categoriesData={categoriesData} setTriviaData={setTriviaData} triviaData={triviaData} setGameScreen={setGameScreen} setSelectScreen={setSelectScreen} setCounter={setCounter}/>
          </Fade>
          }
          {gameScreen && 
          <Fade>
            <GameScreen triviaData={triviaData} setScreen={setMainScreen} setGameScreen={setGameScreen} counter={counter} setCounter={setCounter}/>
          </Fade>
          }
    </div>
  );
}

export default App;
