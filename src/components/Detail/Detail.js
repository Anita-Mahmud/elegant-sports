import React from 'react';
import './Detail.css'
const Detail = () => {
    return (
        <div className='details-container'>
              <h3>Time Details</h3>
              <div className='time-details'>
               <h4>Sports time</h4>
               <p>0 hour</p>
              </div>
              <div className='time-details'>
              <h4>Break time</h4>
               <p>0s</p>
              </div>
        </div>
    );
};

export default Detail;