import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='break-container'>
            <h3>Add A Break</h3>
            <div className='breaks'>
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
            <button>50s</button>
            </div>
        </div>
    );
};

export default Break;