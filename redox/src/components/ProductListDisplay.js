// This component is all about showing you a list of product cards based on the selected category.

import React from 'react';
import ProductCard from './ProductCard';

// The ProductListDisplay component receives two important pieces of information (props) from its parent component:
// - products: It's a list of all the products available in the store.
// - selectedCategory: It's the category that you chose as your favorite type of products (if any).

const ProductListDisplay = ({ products, selectedCategory }) => {
  // Here we create a new list of products that will be displayed based on the selected category.
  // If you chose a category, we will show you only the products that belong to that category.
  // If you didn't choose any category (selectedCategory is empty), we will show you all the products.
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Now, we show you the list of products!
  return (
    <div>
      {/* For each product in the filtered list, we create a product card using the ProductCard component. */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// We say that the ProductListDisplay is special and we can use it in our app.
export default ProductListDisplay;
