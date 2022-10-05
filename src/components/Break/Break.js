import React from 'react';
import { addBreak } from '../../utilities/store';
import './Break.css'
const Break = ({btns}) => {
    return (
        <div className='break-container'>
            <h3>Add A Break</h3>
            <div className='breaks'>
            {
                btns.map(btn=>
                <button onClick={()=>addBreak(btn.btime)}>{btn.btime}</button>
                )
            }
            </div>
        </div>
    );
};

export default Break;