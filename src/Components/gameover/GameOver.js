import React from 'react';

const GameOver = ({ againClick, health }) => {
    const handleSubmitClick = () => {
        return againClick("start");
    }
    return <>
            <h1>{health ? "You Win!!" : "Game Over"}</h1>
            <div>
                <button onClick={() => handleSubmitClick()}>Play Again?</button>
            </div>
           </>;
}

export default GameOver;
