import React from 'react';
import Character from '../character/Character';
import Strawberry from '../fruit/Strawberry';
import Watermelon from '../fruit/Watermelon';

const Cell = ({ element }) => {
    const elementCheck = () => {
        switch (element) {
            case "Character":
                return <Character />
            case "Watermelon":
                return <Watermelon />
            case "Strawberry":
                return <Strawberry />
            default:
                return <></>
        }
    }
    return elementCheck();
}

export default Cell;