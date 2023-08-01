// This is a special file that creates a magical box called UserContext to store some important information that all parts of our app can access.

// First, we bring some magical tools from the React library to help us.
import React, { createContext, useState } from 'react';

// Next, we create a magical box called UserContext using the createContext function from React.
const UserContext = createContext();

// Now, we create a magical provider called UserProvider. This provider is like a guardian who will take care of the magical box and make sure everything inside stays safe.

// The UserProvider component receives a special present called "children" from its parent component. The "children" here are all the parts of our app that want to use the information in the magical box.

const UserProvider = ({ children }) => {
  // Inside the UserProvider, we create two special boxes to store important information.
  
  // The first box is called "cartItems." It's like a little cart where we keep all the products that you added to your cart. We start with an empty cart, and it's a magical box that can grow bigger as you add more products.
  const [cartItems, setCartItems] = useState([]);

  // The second box is called "totalPrice." It's like a special calculator that keeps track of the total price of all the products in your cart. We start with a total price of 0, and it's a magical calculator that can increase as you add more products to your cart.
  const [totalPrice, setTotalPrice] = useState(0);

  // Next, we create a magical function called "addToCart." When you use this function, it will add a product to your cart (the cartItems box) and update the total price (the totalPrice box) to include the price of the new product.
  const addToCart = (product) => {
    // When you add a product to your cart, we put it in the cartItems box by adding it to the previous items (prevItems) in the cart.
    setCartItems((prevItems) => [...prevItems, product]);
    // We also update the totalPrice box by adding the price of the new product to the previous total price (prevPrice).
    setTotalPrice((prevPrice) => prevPrice + product.price);
  };

  // Lastly, we create a magical function called "clearCart." When you use this function, it will remove all the products from your cart (empty the cartItems box) and reset the total price to 0 (reset the totalPrice box).
  const clearCart = () => {
    // We empty the cartItems box by setting it to an empty array.
    setCartItems([]);
    // We reset the totalPrice box to 0.
    setTotalPrice(0);
  };

  // Finally, we put the cartItems, addToCart, clearCart, and totalPrice inside the magical box (UserContext) so that all the parts of our app can access this information.
  return (
    <UserContext.Provider value={{ cartItems, addToCart, clearCart, totalPrice }}>
      {/* We hand over all the parts of our app (the children) to the UserContext.Provider. This way, they can access the magical information inside the UserContext box. */}
      {children}
    </UserContext.Provider>
  );
};

// We say that the UserContext and UserProvider are special and can be used in our app.
export { UserContext, UserProvider };
