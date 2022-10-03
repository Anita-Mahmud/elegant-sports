import React from 'react';
import './Detail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Detail = ({items}) => {
    const showToastMessage = () => {
        toast.success('Congratulations', {
            position: toast.POSITION.TOP_CENTER
        });
    };
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
              <button onClick={showToastMessage} className='btn-activity' >Activity Completed</button>
              <ToastContainer />
        </div>
    );
};

export default Detail;