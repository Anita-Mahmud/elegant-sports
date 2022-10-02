import React from 'react';
import './Card.css'
const Card = (props) => {
    const {name,time,img}=props.card;
    return (
        <div className='card-container'>
            <img src={img} alt={name}></img>
            <h3>{name}</h3>
            <h4>Time Required: {time} hour</h4>
            <button>Add to list</button>
        </div>
    );
};

export default Card;