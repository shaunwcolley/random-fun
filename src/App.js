import React, { useEffect } from 'react';
import Grid from './Components/grid/Grid.js';
import Score from './Components/score/Score.js';

function App() {
  let [scoreState, setScore] = React.useState(0);

  return <>
          {scoreState < 1000 ? <Grid setScore={setScore} score={scoreState} x={5} y={5} />: <h1>You Win!</h1>}
          <Score score={scoreState} />
        </>
}

export default App;
