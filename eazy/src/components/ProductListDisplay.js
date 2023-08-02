import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

const ProductListDisplay = ({ products, selectedCategory }) => {
  // Define a state variable called selectedProductId and a function to update it called setSelectedProductId
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Define a function called handleProductClick that takes a productId as an argument
  const handleProductClick = (productId) => {
    // When the handleProductClick function is called, update the selectedProductId state with the selected productId
    setSelectedProductId(productId);
  };

  // Filter the products based on the selected category, if any
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Find the selected product object from the filtered products based on the selectedProductId state
  const selectedProduct = filteredProducts.find((product) => product.id === selectedProductId);

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <div>
      {/* If a product is selected (selectedProduct is truthy), render the ProductDetails component with the selected product */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onBackToList={() => setSelectedProductId(null)} />
      )}

      {/* Render a row of product cards using the Bootstrap grid system */}
      <Row xs={1} md={2} lg={4}> {/* Change the lg value to 4 to display four cards in a row on large screens */}
        {filteredProducts.map((product) => (
          <Col key={product.id} className="mb-4">
            {/* Render the ProductCard component, passing it the product object and the handleProductClick function */}
            <ProductCard product={product} onClick={() => handleProductClick(product.id)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Export the ProductListDisplay component so that other parts of the app can use it
export default ProductListDisplay;
