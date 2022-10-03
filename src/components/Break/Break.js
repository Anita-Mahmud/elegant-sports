import React from 'react';
import './Break.css'
const Break = () => {
    
    return (
        <div className='break-container'>
            <h3>Add A Break</h3>
            <div className='breaks'>
            <button id="1">10s</button>
            <button id="2">20s</button>
            <button id="3">30s</button>
            <button id="4">40s</button>
            <button id="5">50s</button>
            </div>
        </div>
    );
};

export default Break;