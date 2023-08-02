import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetails = ({ product, onBackToList }) => {
  // Create a function called formatPrice that takes a price as an argument
  const formatPrice = (price) => {
    // Use the toLocaleString method to format the price into the Kenyan currency (KES)
    // The formatted price will look like KES 1,234,567.89
    return price.toLocaleString('en-KE', { style: 'currency', currency: 'KES' });
  };

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <Container>
      <Row>
        <Col md={6}>
          {/* Render the product's image on the left side of the container */}
          <img src={product.image} alt={product.title} className="img-fluid" />
        </Col>
        <Col md={6}>
          {/* Render the product's title, category, description, and formatted price on the right side of the container */}
          <h2>{product.title}</h2>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Price: {formatPrice(product.price)}</p>
          {/* Render a button labeled "Back to Product List" that, when clicked, calls the onBackToList function */}
          <Button variant="primary" onClick={onBackToList}>
            Back to Product List
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// Export the ProductDetails component so that other parts of the app can use it
export default ProductDetails;
