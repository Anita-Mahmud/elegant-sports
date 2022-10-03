import React from 'react';
import './Card.css'
const Card = ({card,addToList}) => {
    const {name,time,img}=card;
    return (
        <div className='card-container'>
            <img src={img} alt={name}></img>
            <h3>{name}</h3>
            <h4>Time Required: {time} hour</h4>
            <button onClick={()=>addToList(card)}>Add to list</button>
        </div>
    );
};

export default Card;