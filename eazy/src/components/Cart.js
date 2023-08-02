// Hey, this is a special part of our app that shows you a shopping cart.
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
// We have a magical box called "UserContext" where we keep important information about the user.
import { UserContext } from '../contexts/UserContext';

const Cart = () => {
  // Now, we use our magical box (UserContext) to take out some information we need:
  // - "cartItems": It's like a little cart where we keep the products we added.
  // - "clearCart": It's a special magic button that can clear all the products from the cart.
  const { cartItems, clearCart } = useContext(UserContext);

  // Here's a special helper function (formatPrice) that dresses up the price of a product nicely in Kenyan Shillings (KES) format.
  const formatPrice = (price) => {
    // We tell the price to dress up nicely in Kenyan Shillings (KES) style.
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Now, we show you the shopping cart with the products you added!
  return (
    <div className="mb-3">
      {/* We say the name of the shopping cart: Shopping Cart! */}
      <h2>Shopping Cart</h2>
      {/* If your cart is empty, we tell you: Your cart is empty. */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        // If you added some products, we show you a list of the products you added.
        <ul className="list-group">
          {/* For each product in your cart, we show its title and the nicely formatted price. */}
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item">
              {/* We say the name of the product and how much it costs in Kenyan Shillings (KES) format. */}
              {item.title} - {formatPrice(item.price)}
            </li>
          ))}
        </ul>
      )}
      {/* We show you a special magic button called "Clear Cart." If you click this button, we will remove all the products from your cart. */}
      <Button variant="primary" onClick={clearCart}>
        Clear Cart
      </Button>
    </div>
  );
};

// We say that the Cart is special and we can use it in our app.
export default Cart;
