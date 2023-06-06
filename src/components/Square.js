import React, { useContext } from 'react';
import { MyContext } from '../utils/context';

const Square =()=> {
    const contextValue=useContext(MyContext)
    return (
        <button className='border border-slate-500 w-8'>
            {contextValue}
        </button>
    );
}

export default Square;