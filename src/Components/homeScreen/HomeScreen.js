import React from 'react';

const HomeScreen = ({ againClick, setLevelTotal }) => {
    const handleSubmitClick = () => {
        return againClick("play");
    }

    const handleInputChange = (event) => {
        if(event) {
            console.log(event.target.value);
            setLevelTotal(event.target.value)
        }
    }

    const options = () => {
        let array = [];
        for(let i = 1; i < 11; i++) {
            array.push(<option key={i} value={i}>{i}</option>)
        }
        return array;
    }

    return <>
            <div>
                <h1>Welcome!</h1>
                <p>Dodge the Spikes!</p>
                <p>Avoid the Monster!</p>
                <p>Collect Fruit!</p>
                <p>Win!</p>
            </div>
                <p>How many levels do you want to play?</p>
                <select onChange={handleInputChange}>{options()}</select>
            <div>
                <button onClick={() => handleSubmitClick()}>Play Game?</button>
            </div>
           </>;
}

export default HomeScreen;
