import React from 'react';
import Square from './Square';

const Board = () => {
    const status = 'Next Player: X';
    return (
        <div className='ml-3 mt-3'>
            <div className='mb-2.5 font-bold text-2xl'>{status}</div>
            <div className='flex grid-cols-3 text-xl'>
                <div>
                    <div><Square value={0}/></div>
                    <div><Square value={1}/></div>
                    <div><Square value={2}/></div>
                </div>
                <div>
                    <div><Square value={3}/></div>
                    <div><Square value={4}/></div>
                    <div><Square value={5}/></div>
                </div>
                <div>
                    <div><Square value={6}/></div>
                    <div><Square value={7}/></div>
                    <div><Square value={8}/></div>
                </div>
            </div>
            
        </div>
    );
};

export default Board;