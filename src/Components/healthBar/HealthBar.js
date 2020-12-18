import React from 'react';

const HealthBar = ({ health }) => {
    let hearts = []
    for (let i = 0; i < health; i++) {
        hearts.push("❤")
    }
    return <div>Health: {hearts}</div>;
}

export default HealthBar;