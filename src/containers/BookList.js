import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = (props) => {
  const {
    books, removeBook, selectedCategory, changeFilter,
  } = props;

  const handleRemoveBook = (event) => {
    event.preventDefault();
    const bookId = event.target.id;
    removeBook(bookId);
  };

  const handleFilterChange = (event) => {
    event.preventDefault();
    const category = event.target.value;
    changeFilter(category);
  };
  let currentBookList;
  if (selectedCategory === 'All') {
    currentBookList = books.concat();
  }
  else {
    currentBookList = books.filter(books => book.category ===selectedCategory);
    
  }
  }

  return (
    <div>
      <h1>Books as an HTML Table</h1>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
              handleClick={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookId) => dispatch(removeBook(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
