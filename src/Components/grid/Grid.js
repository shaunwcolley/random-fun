import React, { useState, useEffect, useRef } from 'react';
import Cell from '../cell/Cell.js'
import './Grid.css';
import useKeyPress from "../../Hooks/useKeyPress";
import * as fruits from "../constants/fruits.js";

const pickRandomFruit = (fruits) => {
    let arrayOfFruits = Object.values(fruits);
    const fruitIndex = Math.floor(Math.random() * arrayOfFruits.length)
    return arrayOfFruits[fruitIndex];
}

const pickRandomCell = (x,y) => {
    return Math.floor(Math.random() * (x*y)) + 1;
}

const pickSpikeCell = (x,y,spikeCount) => {
    let spikeCells = {}
    for(let i = 0; i < spikeCount; i++) {
        let cell = pickRandomCell(x,y);
        while (cell === spikeCells[cell]) {
            cell = pickRandomCell(x,y)
        }
        spikeCells[cell] = cell;
    }
    return spikeCells;
}

const Grid = ({ x, y, score, setScore, health, setHealth}) => {
    
    // let [count, setCount] = useState(0);

    const [cell, setCell] = useState(pickRandomCell(x,y));
    const [monsterCell, setMonsterCell] = useState(pickRandomCell(x,y));
    const [fruitCell, setFruitCell] = useState(pickRandomCell(x,y));
    const [fruit, setFruit] = useState(pickRandomFruit(fruits));
    const [spikeCount] = useState(3);
    const [spikeCell] = useState(pickSpikeCell(x,y,spikeCount))

    const justMoved = useRef(false);

    const move = (newCell) => {
        if ((newCell > 0) && (newCell < (x * y) + 1)) {
            justMoved.current = true;
            if (monsterCell !== newCell) {
                monsterMove();
            }
            setCell(newCell);
        }
    };

    const monsterMove = () => {
        const directionChoice = Math.floor(Math.random() *2);
        if (cell < monsterCell && cell < (monsterCell - 10)) {
            if (directionChoice === 0) {
                setMonsterCell(monsterCell-1)
            } else {
                setMonsterCell(monsterCell-10)
            }
        } else if (cell > monsterCell && cell > (monsterCell +10)){
            if (directionChoice === 0) {
                setMonsterCell(monsterCell-1)
            } else {
                setMonsterCell(monsterCell+10)
            }
        } else if (cell > monsterCell){
            if (directionChoice === 0) {
                setMonsterCell(monsterCell+1)
            } else {
                setMonsterCell(monsterCell+10)
            }
         } else {
            if (directionChoice === 0) {
                setMonsterCell(monsterCell+1)
            } else {
                setMonsterCell(monsterCell-10)
            }
            
        }
    }

    const moveUp =  useKeyPress("ArrowUp")
    const moveDown = useKeyPress("ArrowDown")
    const moveRight = useKeyPress("ArrowRight")
    const moveLeft = useKeyPress("ArrowLeft")

    useEffect(() => {

        

        if(fruitCell === cell) {
            setFruitCell(pickRandomCell(x,y));
        }

        if(monsterCell === cell) {
            setMonsterCell(pickRandomCell(x,y));
        }

        if(spikeCell[fruitCell]) {
            setFruitCell(pickRandomCell(x,y))
        }

        if(spikeCell[cell]) {
            setCell(pickRandomCell(x,y))
        }
        
        if (justMoved.current) {

            setTimeout(() => {
                justMoved.current = false;
            }, 100);

        } else {
            if (moveUp) {
                move(cell - x);
            } else if (moveDown) {
                move(cell + x);
            } else if (moveRight) {
                if (cell % x !== 0) {
                    move(cell + 1);
                }
            } else if (moveLeft) {
                if ((cell % x) !== 1) {
                    move(cell - 1);
                }
            }
        }

        if(spikeCell[monsterCell]) {
            setMonsterCell(x*y);
        }

        if(monsterCell === cell) {
            setHealth(health - 1);
            setCell(1);
            setMonsterCell(x*y);
        }

        if(spikeCell[cell]) {
            setHealth(health - 1);
            setCell(1);
            setMonsterCell(x*y);
        }

        if(fruitCell === cell) {
            setScore(score + 100);
            setFruitCell(pickRandomCell(x,y));
            setFruit(pickRandomFruit(fruits));
        }

        // eslint-disable-next-line 
    }, [cell, move]);

    const genTableBody = (x,y) => {
        const rows = [];
        let count = 0;

        for(let i = 0; i < y; i+=1) {
            let col = [];

            for (let j = 0; j < x; j+=1) {
                let element = "";
                count += 1;

                if (count === cell) element = "Character";
                if (count !== cell && count === fruitCell) element = fruit;
                if (count !== cell && count === monsterCell) element = "Monster";
                if (count !== cell && count === spikeCell[count] && count !== monsterCell && count !== fruitCell) element = "Spike";
                const el = <td key={`cell ${j}`} ><Cell element={element}/></td>;
                col.push(el);
            }

            rows.push(<tr key={`row ${i}`}>{col}</tr>)
        }

        return rows;
    };

    return (
        <table>
            <thead>
            </thead>
            <tbody>
                {genTableBody(x,y)}
            </tbody>
        </table>
    );
};

export default Grid;