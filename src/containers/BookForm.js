import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import bookCategories from '../constaints/bookCategories';
import '../index.css';

const BooksForm = (props) => {
  const [state, setState] = useState({
    id: Date.now().toString().slice(-5),
    title: '',
    category: 'not selected',
  });
  const bookCategoriesExtended = ['not selected', ...bookCategories];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.category === 'not selected' || state.title === '') {
      alert(`None of inputs can be empty in the form! \n
      Please fill both ttle and category fields.`);
    } else {
      setState({
        ...state, id: Date.now().toString().slice(-5),
      });
      props.createBook(state);
    }
  };

  const handleChange = (event) => {
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
    <div className="create-book">
      <p className="Line-4" />
      <div className="nnewbut">
        <span className="add-new-book-text">ADD NEW BOOK</span>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="title-input"
          />
        </label>
        <label htmlFor="category">
          <select
            onChange={handleChange}
            name="category"
            className="category-input"
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
        <input
          type="submit"
          value="ADD BOOK"
          className="add-book-button"
        />
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func,
};

BooksForm.defaultProps = {
  createBook: createBook(),
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
