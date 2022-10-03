import React from 'react';
import './FAQ.css';
const FAQ = () => {
    return (
        <div className='faq-container'>
            <h2>FAQ</h2>
           <div className='faq'>
            <h3>How does react work?</h3>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
           </div>
           <div className='faq'>
           <h3>Difference between props&state</h3>
          <p>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
           </div>
           <div className='faq'>
           <h3>Uses of use effect</h3>
          <ul>
            <li>Manipulating DOM directly</li>
            <li>Using timer functions like setTimeout()</li>
            <li>Setting up a subscription</li>
            </ul>
           </div>
        </div>
    );
};

export default FAQ;