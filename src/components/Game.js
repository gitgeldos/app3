import React from 'react';
import Board from './Board';
import { MyContext } from '../utils/context';

const Game = () => {
    return (
        <MyContext.Provider>
            <div className='game'>
            <div className='game-board'>
                <Board/>
            </div>      
            <div className='game-info'>
                <div>

                </div>
                <ol>
                
                </ol>
            </div>
            </div>
        </MyContext.Provider>
        
    );
};

export default Game;