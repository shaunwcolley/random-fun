import React from 'react';
import Grid from './Components/grid/Grid.js';
import Score from './Components/score/Score.js';
import GameOver from './Components/gameover/GameOver.js';

function App() {
  let [scoreState, setScore] = React.useState(0);
  const againClick = () => {
    return setScore(0);
  }
  return <>
          {scoreState < 1000 ? <Grid setScore={setScore} score={scoreState} x={5} y={5} />: <GameOver againClick={againClick}/>}
          <Score score={scoreState} />
        </>
}

export default App;
