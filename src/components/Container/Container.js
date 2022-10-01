import React from 'react';
import './Container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons'

const Container = () => {
    return (
        <div className='container'>
            <div className='activity-container'>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon><span>Elegant-Sports-Club</span></h1>
            <h2>Select Your Today's Game</h2>
        </div>
        <div className='info-Container'>
              yup
        </div>
        </div>
    );
};

export default Container;