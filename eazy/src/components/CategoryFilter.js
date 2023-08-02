import React from 'react';

// We create a special function called CategoryFilter.
// It receives three important pieces of information (props) from its parent component:
// - "categories": It's a list of different categories (types) of products.
// - "selectedCategory": It's the category that you already chose (your favorite type of products).
// - "onSelectCategory": It's a special function that will be called when you choose a new category.

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  // Now, we show you a special dropdown list of categories!
  return (
    <div>
      {/* We create a dropdown list where you can choose your favorite type of products. */}
      <select className="form-select mb-3" value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
        {/* We add a special option at the top of the list that says "All Categories." */}
        <option value="">All Categories</option>
        {/* For each category in the list, we create an option in the dropdown list. */}
        {categories.map((category) => (
          <option key={category} value={category}>
            {/* We say the name of the category, like "Toys" or "Clothing." */}
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

// We say that the CategoryFilter is special and we can use it in our app.
export default CategoryFilter;
