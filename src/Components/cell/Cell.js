import React from 'react';

import Character from '../character/Character';

import Monster from '../monster/Monster';
import Spike from '../spike/Spike';

import Apple from '../fruit/Apple';
import Cherry from '../fruit/Cherry';
import Peach from '../fruit/Peach';
import Pineapple from '../fruit/Pineapple';
import Strawberry from '../fruit/Strawberry';
import Watermelon from '../fruit/Watermelon';
import * as fruit from "../constants/fruits.js";

const Cell = ({ element }) => {
    const elementCheck = () => {
        switch (element) {
            case "Character":
                return <Character />
            case "Monster":
                return <Monster />
            case "Spike":
                return <Spike />
            case fruit.APPLE:
                return <Apple />
            case fruit.CHERRY:
                return <Cherry />
            case fruit.PEACH:
                return <Peach />
            case fruit.PINEAPPLE:
                return <Pineapple />
            case fruit.STRAWBERRY:
                return <Strawberry />
            case fruit.WATERMELON:
                return <Watermelon />
            
            default:
                return <></>
        }
    }
    return elementCheck();
}

export default Cell;
