import React from 'react';
import PropType from 'prop-types';
import bookcategories from '../constaints/bookCategories';

const CategoryFilter = (props) => {
  const { handleChange } = props;
  const bookCategoriesExtended = ['All', ...bookcategories];
  return (
    <label htmlFor="category">
      Category:
      <select
        onChange={handleChange}
        name="category"
      >
        {bookCategoriesExtended.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

    </label>

  );
};

CategoryFilter.propTypes = {
  handleChange: PropType.func,
};

CategoryFilter.defaultProps = {
  handleChange: null,
};

export default CategoryFilter;
