import React, { useState } from 'react';
import './specials.css';

import affo from '../../assets/affo.jpg';

function Specials() {
  const [count, setCount] = useState(0);

  return (
    <div className='specials-container' id='specials'>
      <div>
        <p className='specials-text'>
          Treat yourself to a moment of 
          <br></br>pure bliss with our 
          <br></br>Affogatto -<br></br>
         the perfect blend of 
         <br></br>coffee and dessert.
         
         <br></br>
         <button className='my-button'>
         Explore more products .. </button>
        </p>
      </div>
      <img src={affo} alt="Affogatto" />
    </div>
  );
}

export default Specials;
