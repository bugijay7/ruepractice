import React, { useState } from 'react';
import './navbar.css';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';


function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isInputVisible, setIsInputVisible] = useState(false); // State for input visibility

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    // sending search actions to an API or performing a local search
    console.log('Search term:', searchTerm);
  };

  const handleIconClick = () => {
    // Toggle input visibility when search icon is clicked
    setIsInputVisible(!isInputVisible);
  };

  const handleInputBlur = () => {
    // Hide input when focus is lost
    setIsInputVisible(false);
  };

  return (
    <div className='navbar-container'>
      <div className='nav'>
        <div className='nav-title'>
          <p className='logo'>Rue</p>
        </div>

        <div className='nav-links'>
          <p><a href="#menu">Menu</a></p>
          <p><a href="#specials">Specials</a></p>
          <p><a href="#community">Community</a></p>
          <p><a href="#contacts">Contacts</a></p>
          <p><a href="#footer">About</a></p>
        </div>

        <div>
          {/* Conditional rendering based on input visibility */}
          {!isInputVisible ? (
            <button onClick={handleIconClick} 
            style={{ backgroundColor: 'transparent', border: 'none',  }}>
            <FaSearch style={{ color: 'white', fontSize: '1.5rem' }} />
            </button>
          ) : (
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                onBlur={handleInputBlur} // Handle blur event to hide input
                placeholder="Enter search term..."
                style={{fontSize: '1.5rem', fontWeight: 'bold', 
                        borderRadius: '5px', backgroundColor: 'black',
                        color: 'white', padding: '5px'  }}
              />
              <button onClick={handleSubmit}>Search</button>
            </div>
          )}
        </div>
      </div>
       <div className='header-box'>
        <div className='header'>
        <h1>Welcome!</h1>
        <p className='header-title'>
        "Welcome to Our Coffee Shop! Dive into the inviting <br></br>
         aroma of freshly brewed coffee and <br></br>
         bask in the cozy ambiance of our café. Experience the <br></br>
         perfect blend of comfort and community <br></br>
         with every sip."<br></br></p>
        <button id='order'>Make an Order</button>
        </div>
        
        <div className='header2'>
        <div className="gallery-container">
        </div>

            <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTiktok className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
