// Import necessary components and functions from the React library and other files
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

// Define a new component named ProductListDisplay and pass it two props: products and selectedCategory
const ProductListDisplay = ({ products, selectedCategory }) => {
  // Create a state variable called selectedProductId and a function to update it (setSelectedProductId) with an initial value of null
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Define a function called handleProductClick that takes a productId as an argument
  const handleProductClick = (productId) => {
    // When the handleProductClick function is called, update the selectedProductId with the productId that was passed as an argument
    setSelectedProductId(productId);
  };

  // Filter the products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Find the selected product from the filtered list using the selectedProductId
  const selectedProduct = filteredProducts.find((product) => product.id === selectedProductId);

  // Return the JSX (React elements) to be rendered on the screen
  return (
    <div>
      {/* If a selectedProduct exists (a product is clicked), render the ProductDetails component */}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onBackToList={() => setSelectedProductId(null)} />
      )}
      {/* Render the list of ProductCards */}
      <div>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => handleProductClick(product.id)} />
        ))}
      </div>
    </div>
  );
};

// Export the ProductListDisplay component so that other parts of the app can use it
export default ProductListDisplay;
