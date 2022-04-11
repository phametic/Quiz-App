import './App.css';
import {useState} from 'react'
import MainScreen from './Components/MainScreen';
import GameScreen from './Components/GameScreen';


function App() {

const [mainScreen, setMainScreen] = useState(false);

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
          <GameScreen />
      }
      
    </div>
  );
}

export default App;
