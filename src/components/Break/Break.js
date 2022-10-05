import React from 'react';
import './Break.css'
const Break = ({btns,addBreak}) => {
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