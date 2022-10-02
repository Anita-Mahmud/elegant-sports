import React from 'react';
import './Container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Cards from '../Cards/Cards';
import Break from '../Break/Break';

const Container = () => {
    return (
        <div className='container'>
            <div className='activity-container'>
            <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon><span>Elegant-Sports-Club</span></h1>
            <h2>Select Your Today's Game</h2>
           <Cards></Cards>
        </div>
        <div className='info-Container'>
             <h2>Anita Mahmud Jhara</h2>
             <h4><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><span>Dhaka,Bangladesh</span></h4>
             <div className='infos'>
                <h4>75kg</h4>
                <h4>4.11'</h4>
                <h4>27yrs</h4>
             </div>
             <Break></Break>
        </div>
        </div>
    );
};

export default Container;