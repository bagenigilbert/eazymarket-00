// This is the part where we show you the products (things we want to buy) and the cart where you put your favorite products!
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import Cart from './Cart';
import CategoryFilter from './CategoryFilter';
import ProductListDisplay from './ProductListDisplay';

const ProductList = ({ products }) => {
  // We create a special place (a "box") to keep track of the selected category (like a favorite type of product).
  const [selectedCategory, setSelectedCategory] = useState('');

  // We make a list of different categories (types) of products from all the products we have.
  const categories = [...new Set(products.map((product) => product.category))];

  // When you choose a category, we remember it and put it in our special "box."
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Here we show you the products and the cart side by side!
  return (
    <Container>
      <Row>
        {/* This part shows the products on the left side. */}
        <Col md={8}>
          <Row>
            <Col>
              {/* We show you a dropdown list of categories so you can choose your favorite type of products. */}
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* We call the ProductListDisplay component and give it the products and the category you chose. */}
              <ProductListDisplay products={products} selectedCategory={selectedCategory} />
            </Col>
          </Row>
        </Col>
        {/* This part shows the cart on the right side. */}
        <Col md={4}>
          {/* We show you the cart where you can put your favorite products! */}
          <Cart />
        </Col>
      </Row>
    </Container>
  );
};

// We say that the ProductList is special and we can use it in our app.
export default ProductList;
