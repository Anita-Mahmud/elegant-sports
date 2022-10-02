import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.css'
const Cards = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch ('fakedb/data.js')
        .then(res=>res.json())
        .then (data=>setCards(data))
    },[]);
    return (
        <div className='cards-container'>
            {
                cards.map(card=><Card card={card} key={card.key}></Card>)
            }
        </div>
    );
};

export default Cards;