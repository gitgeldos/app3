import React from 'react';

function Square (props){  
    return (
        <button className='border border-slate-500 w-8' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;