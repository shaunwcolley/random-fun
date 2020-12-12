import React, { useState, useEffect, useRef } from 'react';
import Cell from '../cell/Cell.js'
import './Grid.css';
import useKeyPress from "../../Hooks/useKeyPress";

const Grid = ({ x, y, score, setScore}) => {
    
    // let [count, setCount] = useState(0);

    const [cell, setCell] = useState(Math.floor(Math.random() * (x*y)) + 1);
    const [fruit, setFruit] = useState(Math.floor(Math.random() * (x*y)) + 1);
    const justMoved = useRef(false);

    const move = (newCell) => {
        let fruitCell = fruit;
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
        if(fruit === cell) {
            setFruit((Math.floor(Math.random() * (x*y)) +1));
        }
        if (justMoved.current) {
            setTimeout(() => {
                justMoved.current = false;
            }, 100);
        } else {
            if (moveUp) {
                move(cell - x)
            } else if (moveDown) {
                move(cell + x)
            } else if (moveRight) {
                if (cell % x !== 0) {
                    move(cell + 1)
                }
            } else if (moveLeft) {
                if ((cell % x) !== 1) {
                    move(cell - 1)
                }
            }
        }

        if(fruit === cell) {
            setScore(score + 100);
            setFruit((Math.floor(Math.random() * (x*y)) +1));
        }
        
    }, [cell, move])
    

    

    // switch(true) {
    //     case moveUp :
    //         move(cell - x);
    //         break;
    //     case moveDown :
    //         move(cell + x);
    //         break;
    //     case moveRight :
    //         move(cell + 1);
    //         break;
    //     case moveLeft :
    //         move(cell - 1);
    //         break;
    //     default :
    //     break;
    // }

    const genTableBody = (x,y) => {
        const rows = [];
        let count = 0;
        for(let i = 0; i < y; i+=1) {
            let col = [];
            for (let j = 0; j < x; j+=1) {
                let element = "";
                count += 1;
                if (count === cell) element = "Character";
                if (count !== cell && count === fruit) element = "Strawberry";
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