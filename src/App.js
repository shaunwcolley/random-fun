import React from 'react';
import Grid from './Components/grid/Grid.js';
import Score from './Components/score/Score.js';
import GameOver from './Components/gameover/GameOver.js';

function App() {
  let [scoreState, setScore] = React.useState(0);
  let [status, setStatus] = React.useState(true);
  const againClick = () => {
    setStatus(true);
    return setScore(0);
  }
  return <>
          {scoreState < 1000 && status ? <Grid setScore={setScore} score={scoreState} x={10} y={10} setStatus={setStatus} />: <GameOver againClick={againClick} status={status} />}
          <Score score={scoreState} />
        </>
}

export default App;
