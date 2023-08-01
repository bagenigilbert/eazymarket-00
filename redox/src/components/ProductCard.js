// This component is all about showing you a single product card with its image, title, price, and a button to add it to the cart.

import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';

// We have a special place (a "box") called UserContext where we keep some important information about the user, like the function to add products to the cart.
import { UserContext } from '../contexts/UserContext';

const ProductCard = ({ product }) => {
  // Now, we use our special box (UserContext) to take out some information we need: the function to add products to the cart.
  const { addToCart } = useContext(UserContext);

  // Here we define a special function (handleAddToCart) that will be called when you click the "Add to Cart" button.
  const handleAddToCart = () => {
    // When you click the button, we call the addToCart function from our special box (UserContext) and give it the product as a present.
    addToCart(product);
  };

  // We also have a special helper function (formatPrice) to change the way the price of the product is shown. We use a large multiplier to increase the prices for fun!
  const formatPrice = (price) => {
    // We set a large price multiplier to make the prices look huge (for fun only!).
    const priceMultiplier = 1000;
    // We make the price look huge by multiplying it with our priceMultiplier.
    const hugePrice = price * priceMultiplier;
    // Then, we tell the price to dress up nicely in the Kenyan Shillings (KES) style with the huge format.
    return hugePrice.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Now, we show you the product card with its image, title, price, and the "Add to Cart" button!
  return (
    <Card className="product-card">
      {/* We show you the image of the product on the top of the card. */}
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        {/* We say the title of the product. */}
        <Card.Title>{product.title}</Card.Title>
        {/* We show you the price of the product, but it's in a huge format (remember, just for fun!). */}
        <Card.Text>{formatPrice(product.price)}</Card.Text>
        {/* We show you a special button called "Add to Cart." If you click this button, the product will be added to your cart! */}
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

// We say that the ProductCard is special and we can use it in our app.
export default ProductCard;
