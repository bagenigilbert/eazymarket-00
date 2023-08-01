// This component is all about showing you the shopping cart where you can see the products you added and clear the cart if you want.

import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';

// We have a special place (a "box") called UserContext where we keep some important information about the user, like the items in their cart.
import { UserContext } from '../contexts/UserContext';

const Cart = () => {
  // Now, we use our special box (UserContext) to take out some information we need: the items in the cart and a special function to clear the cart.
  const { cartItems, clearCart } = useContext(UserContext);

  // Here's a special helper function (formatPrice) to change the way the price of a product is shown. We change it to Kenyan Shillings (KES) format.
  const formatPrice = (price) => {
    // We tell the price to dress up nicely in the Kenyan Shillings (KES) style.
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Now, we show you the shopping cart with the products you added!
  return (
    <div>
      {/* We say the name of the shopping cart: Shopping Cart! */}
      <h2>Shopping Cart</h2>
      {/* If your cart is empty, we tell you: Your cart is empty. */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        // If you added some products, we show you a list of the products you added.
        <ul>
          {/* For each product in your cart, we show its title and the nicely formatted price. */}
          {cartItems.map((item) => (
            <li key={item.id}>
              {/* We say the name of the product and how much it costs in the Kenyan Shillings (KES) format. */}
              {item.title} - {formatPrice(item.price)}
            </li>
          ))}
        </ul>
      )}
      {/* We show you a button called "Clear Cart." If you click this button, we will remove all the products from your cart. */}
      <Button variant="primary" onClick={clearCart}>
        Clear Cart
      </Button>
    </div>
  );
};

// We say that the Cart is special and we can use it in our app.
export default Cart;
