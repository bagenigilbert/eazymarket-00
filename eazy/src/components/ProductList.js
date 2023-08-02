import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Cart from './Cart';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';

const ProductList = ({ products }) => {
  // Define a state variable called selectedCategory and a function to update it called setSelectedCategory
  const [selectedCategory, setSelectedCategory] = useState('');

  // Create an array of unique categories by extracting them from the products array
  const categories = [...new Set(products.map((product) => product.category))];

  // Define a function called handleSelectCategory that takes a category as an argument
  const handleSelectCategory = (category) => {
    // When the handleSelectCategory function is called, update the selectedCategory state with the selected category
    setSelectedCategory(category);
  };

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <Container>
      <Row>
        <Col md={8}>
          {/* Render the CategoryFilter component, passing it the categories, selectedCategory, and handleSelectCategory props */}
          <Row>
            <Col>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />
            </Col>
          </Row>
          {/* Render the ProductListDisplay component, passing it the products and selectedCategory props */}
          <Row>
            <Col>
              <ProductListDisplay products={products} selectedCategory={selectedCategory} />
            </Col>
          </Row>
        </Col>
        {/* Render the Cart component in a separate column */}
        <Col md={4}>
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

// Export the ProductList component so that other parts of the app can use it
export default ProductList;
