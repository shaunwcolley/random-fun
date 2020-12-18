import React from 'react';
import Grid from './Components/grid/Grid.js';
import Score from './Components/score/Score.js';
import GameOver from './Components/gameover/GameOver.js';
import HealthBar from './Components/healthBar/HealthBar.js';

function App() {
  let [scoreState, setScore] = React.useState(0);
  // let [status, setStatus] = React.useState(true);
  let [health, setHealth] = React.useState(3);
  const againClick = () => {
    setHealth(3);
    return setScore(0);
  }
  return <>
          {
            scoreState < 1000 && health ? 
              <Grid 
                setScore={setScore} 
                score={scoreState} 
                x={10} y={10} 
                health={health} 
                setHealth={setHealth} 
              /> : 
              <GameOver againClick={againClick} health={health} />
          }
          <HealthBar health={health}/>
          <Score score={scoreState} />
        </>
}

export default App;
