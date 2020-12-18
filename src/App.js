import React from 'react';
import Grid from './Components/grid/Grid.js';
import Score from './Components/score/Score.js';
import GameOver from './Components/gameover/GameOver.js';
import HealthBar from './Components/healthBar/HealthBar.js';

function App() {
  let [scoreState, setScore] = React.useState(0);
  let [status, setStatus] = React.useState(true);
  let [health, setHealth] = React.useState(3);
  const againClick = () => {
    setStatus(true);
    return setScore(0);
  }
  return <>
          {scoreState < 1000 && status ? <Grid setScore={setScore} score={scoreState} x={10} y={10} setStatus={setStatus} />: <GameOver againClick={againClick} status={status} />}
          <HealthBar health={health}/>
          <Score score={scoreState} />
        </>
}

export default App;
