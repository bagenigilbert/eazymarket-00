// Import the necessary libraries and functions from the React ecosystem
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';

// Import the UserContext from the '../contexts/UserContext' file
import { UserContext } from '../contexts/UserContext';

// Define a new component named ProductCard and pass it two props: product and onClick
const ProductCard = ({ product, onClick }) => {
  // Use the useContext hook to access the addToCart function from the UserContext
  const { addToCart } = useContext(UserContext);

  // Define a function called handleAddToCart
  const handleAddToCart = () => {
    // When the handleAddToCart function is called, use the addToCart function from the UserContext to add the product to the cart
    addToCart(product);
  };

  // Create a function called formatPrice that takes a price as an argument
  const formatPrice = (price) => {
    // Define a multiplier to make the price bigger for demonstration purposes
    const priceMultiplier = 1000;
    // Multiply the price by the multiplier to get a huge price
    const hugePrice = price * priceMultiplier;
    // Use the toLocaleString method to format the hugePrice into the Kenyan currency (KES)
    // The formatted price will look like KES 1,234,567.89
    return hugePrice.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <Card className="product-card">
      {/* Render the product's image as the top of the card and pass the onClick prop to handle image clicks */}
      <Card.Img variant="top" src={product.image} onClick={onClick} />
      <Card.Body>
        {/* Display the product's title as the card title */}
        <Card.Title>{product.title}</Card.Title>
        {/* Display the formatted price of the product as the card text */}
        <Card.Text>{formatPrice(product.price)}</Card.Text>
        {/* Render a button labeled "Add to Cart" that, when clicked, calls the handleAddToCart function */}
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

// Export the ProductCard component so that other parts of the app can use it
export default ProductCard;
