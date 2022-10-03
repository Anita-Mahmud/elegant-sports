import React from 'react';
import './Detail.css'
const Detail = ({items}) => {
    let totalTime = 0;
    items.forEach(item=>{
        totalTime=totalTime+parseFloat(item.time);
    })
    return (
        <div className='details-container'>
              <h3>Time Details</h3>
              <div className='time-details'>
               <h4>Sports time</h4>
               <p>{totalTime} hour</p>
              </div>
              <div className='time-details'>
              <h4>Break time</h4>
               <p>0s</p>
              </div>
              <button className='btn-activity'>Activity Completed</button>
        </div>
    );
};

export default Detail;