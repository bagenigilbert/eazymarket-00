// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserProvider } from './contexts/UserContext';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <UserProvider>
      <h1 className="my-4">EazyMarket</h1>
      <ProductList products={products} />
    </UserProvider>
  );
};

export default App;
