// Import the React library to be able to create a React component
import React from 'react';

// Define a new component named ProductDetails and pass it two props: product and onBackToList
const ProductDetails = ({ product, onBackToList }) => {
  // Create a function called formatPrice that takes a price as an argument
  const formatPrice = (price) => {
    // Use the toLocaleString method to format the price into the Kenyan currency (KES)
    // The formatted price will look like KES 1,234.56
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <div>
      {/* Display the heading "Product Details" */}
      <h2>Product Details</h2>
      {/* Display the product's title */}
      <p>Title: {product.title}</p>
      {/* Display the formatted price of the product */}
      <p>Price: {formatPrice(product.price)}</p>
      {/* Display the product's category */}
      <p>Category: {product.category}</p>
      {/* Display the product's description */}
      <p>Description: {product.description}</p>
      {/* Display the product's image with a maximum width of 300px */}
      <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
      {/* Render a button that, when clicked, calls the onBackToList function */}
      {/* This button allows the user to go back to the product list */}
      <button onClick={onBackToList}>Back to Product List</button>
    </div>
  );
};

// Export the ProductDetails component so that other parts of the app can use it
export default ProductDetails;
