import React from 'react';
import Grid from './Components/grid/Grid.js';
import Score from './Components/score/Score.js';
import GameOver from './Components/gameover/GameOver.js';
import HealthBar from './Components/healthBar/HealthBar.js';
import HomeScreen from './Components/homeScreen/HomeScreen.js';

function App() {
  let [scoreState, setScore] = React.useState(0);
  let [gameStatus, setgameStatus] = React.useState("start");
  let [health, setHealth] = React.useState(3);
  const againClick = (status) => {
    setgameStatus(status)
    setHealth(3);
    return setScore(0);
  }

  const elementCheck = (gameStatus, health) => {
    if(health) {
      switch (gameStatus) {
          case "start":
            return <HomeScreen againClick={againClick}/>
          case "play":
            return <Grid 
              setScore={setScore} 
              score={scoreState} 
              x={10} y={10} 
              health={health} 
              setHealth={setHealth} 
            />
          default:
              return <GameOver againClick={againClick} health={health}  />
      }
    } else {
      return <GameOver againClick={againClick} health={health}  />
    }
  }

  return <>
          {elementCheck(gameStatus,health)}
          <HealthBar health={health}/>
          <Score score={scoreState} />
        </>
}

export default App;
