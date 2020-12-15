import React from 'react';

const GameOver = ({ againClick, status }) => {
    const handleSubmitClick = () => {
        return againClick();
    }
    return <>
            <h1>{status ? "You Win!!" : "Game Over"}</h1>
            <div>
                <button onClick={() => handleSubmitClick()}>Play Again?</button>
            </div>
           </>;
}

export default GameOver;