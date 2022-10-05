import React, { useEffect, useState } from 'react';
import './Container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch20} from '@fortawesome/free-solid-svg-icons'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Card from '../Card/Card';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
import FAQ from '../FAQ/FAQ';

const Container = () => {
    const [cards,setCards]=useState([]);
    const [items, setItems] = useState([]);
    const [btns,setBtns]=useState([]);
    useEffect(()=>{
        fetch ('fakedb/data.js')
        .then(res=>res.json())
        .then (data=>setCards(data))
    },[])
    const addToList = (item)=>{
        const newItem = [...items, item];
        setItems(newItem);
    }
    const addBreak = (sec)=>{
    localStorage.setItem('time',JSON.stringify(sec));
}
    useEffect (()=>{
        fetch('fakedb/btn.js')
        .then (res=>res.json())
        .then(data=>setBtns(data))
    },[addBreak]);
    return (
        <div className='container'>
            <div className='activity-container'>
            <h1><FontAwesomeIcon icon={faStopwatch20}></FontAwesomeIcon><span>Elegant-Sports-Club</span></h1>
            <h2>Select Your Today's Game</h2>
            <div className='cards-container'>
            {
                cards.map(card=><Card 
                    card={card} 
                    key={card.id}
                    addToList = {addToList}
                    >
                    </Card>)
            }
        </div>
        <FAQ></FAQ>
        </div>
        <div className='info-Container'>
             <h2>Anita Mahmud Jhara</h2>
             <h4><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon><span>Dhaka,Bangladesh</span></h4>
             <div className='infos'>
                <div>
                <h4>Weight: 75kg</h4>
                <h4>Height: 4.11'</h4>
                <h4>Age: 27yrs</h4>
                </div>
             </div>
             <Break btns={btns} key={btns.id} addBreak={addBreak}></Break>
             <Detail items={items} key={items.id}></Detail>
        </div>
        </div>
    );
};

export default Container;