import React, { useState } from 'react';
import './contacts.css';

function Contacts() {
    const [count, setCount] = useState(0)
    
    return ( <div className='contacts-container' id='contacts'>
    <div className='contacts-title'>
        <div>
        <p className='contacts-text'>Join in and get 15% Off! </p>
        </div>
        <div>
        <p className='contacts-subtext'>subscribe to our newsletter 15% off discount code</p>
        </div>
        </div>
        <div className="subscription-container">
        <input type="email" placeholder="Email address" className="email-input" />
        <button className="subscribe-button">Subscribe</button>
    </div>
            </div>)
}

export default Contacts