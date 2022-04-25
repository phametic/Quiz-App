import './App.css';
import { useState, useEffect } from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';
import SelectionScreen from './Components/SelectionScreen';


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
  const data = await res.json();
  setCategoriesData(data.trivia_categories)
}

function handleClick() {
  setMainScreen(prevState => !prevState);
  setSelectScreen(prevState => !prevState)
}

  return (
    <div className="font-rubik">
      {mainScreen && <MainScreen clickHandler={handleClick}/>}
      {selectScreen && <SelectionScreen categoriesData={categoriesData} setTriviaData={setTriviaData} triviaData={triviaData} setGameScreen={setGameScreen} setSelectScreen={setSelectScreen} setCounter={setCounter}/>}
      {gameScreen && <GameScreen triviaData={triviaData} setScreen={setMainScreen} setGameScreen={setGameScreen} counter={counter} setCounter={setCounter}/>}
    </div>
  );
}

export default App;
