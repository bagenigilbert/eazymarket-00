//  this is the main part of the app where everything starts!
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserProvider } from './contexts/UserContext';
import ProductList from './components/ProductList';

// We're using special tools called "React" and "axios" to help us create our app.
// We also import the "UserProvider" and "ProductList" components that we'll use later.

const App = () => {
  // Here, we create a special box called "products" to keep a list of things we want to buy.
  const [products, setProducts] = useState([]);

  // Now, let's do something special when the app starts (when it's born).
  useEffect(() => {
    // We want to talk to a special shop (API) to get the things we want to buy.
    const fetchProducts = async () => {
      try {
        // We send a message to the shop and ask for the things (products).
        const response = await axios.get('https://fakestoreapi.com/products');
        // The shop sends us the things (products), and we put them in our "products" box.
        setProducts(response.data);
      } catch (error) {
        // If there's a problem getting the things (products), we tell ourselves there's an error.
        console.error('Failed to fetch products:', error);
      }
    };

    // Now, we tell the shop to get the things for us!
    fetchProducts();
  }, []);

  // Finally, we show the things (products) to you by calling the ProductList component.
  // We also give the things in our "products" box to the ProductList component.
  return (
    <UserProvider>
      {/* We say the name of our app: EazyMarket! */}
      <div className="container mt-4">
        <h1 className="mb-4">EazyMarket</h1>
        {/* We call the ProductList component and give it the list of things (products) as a present. */}
        <ProductList products={products} />
      </div>
    </UserProvider>
  );
};

// We say that the App is special and we can use it in our app.
export default App;
