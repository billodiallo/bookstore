import React, { useState } from 'react';

const BookForm = (props) => {
  const [state, setState] = useState({
    id: Date.now(),
    title: '',
    category: '',
  });

  const bookCategories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const handleSubmit = event => {
    event.preventDefault();
    setState({
      ...state, id: Date.now(),
    });
    props.createBook(state);
  };

  const handleChange = event => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'title':
        setState({
          ...state, title: value,
        });
        break;
      case 'category':
        setState({
          ...state, category: value,
        });
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <form>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" />
        </label>
        <label htmlFor="category">
          Category:
          <select>
            {bookCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookForm;
