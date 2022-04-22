import './App.css';
import { useState, useEffect } from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';
import SelectionScreen from './Components/SelectionScreen';


function App() {

const [mainScreen, setMainScreen] = useState(true);
const [categories, setCategories] = useState([]);

useEffect(() => {
  fetchCategories();
  //fetchData(10);
}, []);

console.log(categories[1])

async function fetchCategories() {
  const res = await fetch(`https://opentdb.com/api_category.php`);
  const data = await res.json();
  setCategories(data.trivia_categories)
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
          <SelectionScreen categories={categories}/>
          // <GameScreen triviaData={triviaData} setScreen={setMainScreen} fetchData={fetchData}/>
      }
    </div>
  );
}

export default App;
