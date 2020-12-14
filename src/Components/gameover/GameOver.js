import React from 'react';

const GameOver = ({ againClick }) => {
    const handleSubmitClick = () => {
        return againClick();
    }
    return <>
            <h1>You Win!!</h1>
            <div>
                <button onClick={() => handleSubmitClick()}>Play Again?</button>
            </div>
           </>;
}

export default GameOver;