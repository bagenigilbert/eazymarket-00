import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserProvider } from './contexts/UserContext';
import ProductList from './components/ProductList';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LogoCart from './components/LogoCart';

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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">EazyMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Add other navigation links if needed */}
            </Nav>
            <LogoCart /> {/* Render the cart in the navbar */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <h1 className="mb-4">EazyMarket</h1>
        <ProductList products={products} />
      </Container>
    </UserProvider>
  );
};

export default App
