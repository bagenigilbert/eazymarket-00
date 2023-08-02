import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';
import LogoCart from './LogoCart'; // Import the LogoCart component instead of Cart

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = [...new Set(products.map((product) => product.category))];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <ProductListDisplay products={products} selectedCategory={selectedCategory} />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <LogoCart /> {/* Use the LogoCart component instead of Cart */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
