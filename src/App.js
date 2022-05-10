import './App.css';
import { useState, useEffect } from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';
import SelectionScreen from './Components/SelectionScreen';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';
import clickSfx from './Assets/Sounds/click_sfx.mp3';

function App() {

const [mainScreen, setMainScreen] = useState(true);
const [selectScreen, setSelectScreen] = useState(false)
const [gameScreen, setGameScreen] = useState(false)

const [categoriesData, setCategoriesData] = useState([]);
const [triviaData, setTriviaData] = useState([]);
const [counter, setCounter] = useState(20);

const [playSfx, setPlaySfx] = useState(true)
const [play] = useSound(clickSfx,
  { volume: 0.4 }
  );



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
  play();
  setMainScreen(prevState => !prevState);
  setSelectScreen(prevState => !prevState);
}

function handleMuteButton() {
  if(!playSfx)
    play();
  setPlaySfx(prev => !prev)
}

  return (
    <div className="font-rubik">
          {mainScreen && 
          <Fade>
            <MainScreen clickHandler={handleClick} playSfx={playSfx}/>
          </Fade>
          }
          {selectScreen && 
          <Fade>
            <SelectionScreen setMainScreen={setMainScreen} categoriesData={categoriesData} setTriviaData={setTriviaData} triviaData={triviaData} setGameScreen={setGameScreen} setSelectScreen={setSelectScreen} setCounter={setCounter} playSfx={playSfx} handleMuteButton={handleMuteButton}/>
          </Fade>
          }
          {gameScreen && 
          <Fade>
            <GameScreen triviaData={triviaData} setScreen={setMainScreen} setGameScreen={setGameScreen} counter={counter} setCounter={setCounter} playSfx={playSfx} handleMuteButton={handleMuteButton}/>
          </Fade>
          }
    </div>
  );
}

export default App;
