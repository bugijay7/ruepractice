import React from 'react';
import './community.css';

import profile1 from '../../assets/profile1.jpg'; // Assuming these are different profile images
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';

function About() {
    const customers = [
        {
            img: profile1,
            name: "Charlie",
            rating: 4,
            text: "This coffee exceeded all my expectations! From the first sip to the last drop, it was a journey of pure indulgence. The velvety texture and intense flavor make it an absolute must-try for any coffee enthusiast!"
        },
        {
            img: profile2,
            name: "Bob",
            rating: 5,
            text: "Absolutely loved the rich aroma and smooth taste of the coffee. It's the perfect blend of boldness and subtlety, leaving me craving for more with every sip!"
        },
        {
            img: profile3,
            name: "Alice",
            rating: 4,
            text: "Hands down, one of the best coffees I've ever tasted! The flavor profile is exquisite, with hints of caramel and chocolate dancing on my palate. Truly a delightful experience!"
        }
    ];

    return (
        <div className='about-container' id='community'>
            <div className="box">
                <p className='about-text'>Join our community</p>
            </div>
            <div className="box">
                <p className='about-text2'>OUR HAPPY CUSTOMERS</p>
            </div>
            <div className="box nested-container">
                {customers.map((customer, index) => (
                    <div className="row-box" key={index}>
                        <div className="profile-info">
                            <img src={customer.img} alt="Profile" />
                            <div>
                                <p className='row-text'>{customer.name}</p>
                                <div className="star-rating">{'⭐'.repeat(customer.rating)}</div>
                            </div>
                        </div>
                        <div className='row-text'>{customer.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
