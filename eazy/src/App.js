// Hey developer, this is the main part of the app where everything starts!
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserProvider } from './contexts/UserContext';
import ProductList from './components/ProductList';

const App = () => {
  // Here, we create a special place (a "box") to store the list of products (things we want to buy).
  const [products, setProducts] = useState([]);

  // When the app starts, we want to get the products from a special shop (API) and put them in our "box."
  useEffect(() => {
    // We send a message to the shop to get the products (things we want to buy).
    const fetchProducts = async () => {
      try {
        // The shop sends us the products, and we put them in our "box" (the products state).
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        // If there's a problem getting the products, we say there's an error.
        console.error('Failed to fetch products:', error);
      }
    };

    // We tell the shop to get the products for us!
    fetchProducts();
  }, []);

  // Finally, we show the products to you by calling the ProductList component.
  // We also give the products in our "box" (the products) to the ProductList component.
  return (
    <UserProvider>
      {/* We say the name of our app: EazyMarket! */}
      <h1 className="my-4">EazyMarket</h1>
      {/* We call the ProductList component and give it the list of products (things we want to buy) as a present. */}
      <ProductList products={products} />
    </UserProvider>
  );
};

// We say that the App is special and we can use it in our app.
export default App;