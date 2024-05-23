// Import necessary modules from React
import React, { useState } from 'react';

// Import CSS styles for the menu component
import './menu.css';

// Import images for the menu items
import item1 from '../../assets/item1.jpg';
import item2 from '../../assets/item2.jpg';
import item3 from '../../assets/item3.jpg';
import item4 from '../../assets/item4.jpg';
import item5 from '../../assets/item5.jpg';
import item6 from '../../assets/item6.jpg';
import item7 from '../../assets/item7.jpg';
import item8 from '../../assets/item8.jpg';

// Define an array of items with their names, prices, and image paths
const items = [
  { name: 'Latte', price: '$8.99', image: item1 },
  { name: 'Capuccino', price: '$5.99', image: item2 },
  { name: 'Mocha', price: '$10.99', image: item3 },
  { name: 'Spanish Latte', price: '$9.99', image: item4 },
  { name: 'Espresso', price: '$6.99', image: item5 },
  { name: 'Double Espresso', price: '$5.99', image: item6 },
  { name: 'Iced coffee', price: '$7.99', image: item7 },
  { name: 'V60', price: '$15.99', image: item8 },
];

// Define the Menu component
function Menu() {
  // Use the 'useState' hook to manage state within the component
  // Initialize 'quantities' state with an array of 8 elements, each initialized to 0
  const [quantities, setQuantities] = useState(new Array(8).fill(0));

  // Define a function to handle changes in the quantity of an item
  const handleQuantityChange = (index, quantity) => {
    // Create a copy of the 'quantities' array to avoid mutating state directly
    const newQuantities = [...quantities];
    // Update the quantity of the item at the specified index
    // Ensure the quantity doesn't go below 0
    newQuantities[index] = quantity >= 0 ? quantity : 0;
    // Update the state with the new quantities array
    setQuantities(newQuantities);
  };

  // Render the menu component
  return (
    <div className="menu" id="menu">
      {/* Map over the 'items' array to render each menu item */}
      {items.map((item, index) => (
        <div className="menu-item" key={index}>
          {/* Render the image of the menu item */}
          <img src={item.image} alt={item.name} />
          {/* Render a caption with the name of the menu item */}
          <figcaption>{item.name}</figcaption>
          <div className="item-details">
            {/* Render the price of the menu item */}
            <div className="price">{item.price}</div>
            <div className="quantity">
              {/* Button to decrease the quantity of the item */}
              <button onClick={() => handleQuantityChange(index, quantities[index] - 1)}>-</button>
              {/* Display the quantity of the item */}
              <span>Quantity: {quantities[index]}</span>
              {/* Button to increase the quantity of the item */}
              <button onClick={() => handleQuantityChange(index, quantities[index] + 1)}>+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Export the Menu component as the default export
export default Menu;
