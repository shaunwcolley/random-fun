import React from 'react';

const HomeScreen = ({ againClick }) => {
    const handleSubmitClick = () => {
        return againClick("play");
    }
    return <>
            <div>
                <h1>Welcome!</h1>
                <p>Dodge the Spikes!</p>
                <p>Avoid the Monster!</p>
                <p>Collect Fruit!</p>
                <p>Win!</p>
            </div>
            <div>
                <button onClick={() => handleSubmitClick()}>Play Game?</button>
            </div>
           </>;
}

export default HomeScreen;
