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

const Grid = ({ x, y, score, setScore, status, setStatus}) => {
    
    // let [count, setCount] = useState(0);

    const [cell, setCell] = useState(Math.floor(Math.random() * (x*y)) + 1);
    const [monsterCell, setMonsterCell] = useState(Math.floor(Math.random() * (x*y)) + 1);
    const [fruitCell, setFruitCell] = useState(Math.floor(Math.random() * (x*y)) + 1);
    const [fruit, setFruit] = useState(pickRandomFruit(fruits));
    const justMoved = useRef(false);

    const move = (newCell) => {
        if ((newCell > 0) && (newCell < (x * y) + 1)) {
            justMoved.current = true;
            setCell(newCell);
        }
    };

    
    const moveUp =  useKeyPress("ArrowUp")
    const moveDown = useKeyPress("ArrowDown")
    const moveRight = useKeyPress("ArrowRight")
    const moveLeft = useKeyPress("ArrowLeft")

    useEffect(() => {
        if(fruitCell === cell) {
            setFruitCell((Math.floor(Math.random() * (x*y)) +1));
        }
        if(monsterCell === cell) {
            setMonsterCell((Math.floor(Math.random() * (x*y)) +1));
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
        if(monsterCell === cell) {
            setStatus(false);
        }
        if(fruitCell === cell) {
            setScore(score + 100);
            setFruitCell((Math.floor(Math.random() * (x*y)) +1));
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