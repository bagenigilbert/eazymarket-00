import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotalPrice((prevPrice) => prevPrice + product.price);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    const updatedTotalPrice = updatedCartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(updatedTotalPrice);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <UserContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
