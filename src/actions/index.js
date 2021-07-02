import { CREATE_BOOK, REMOVE_BOOK } from '../constaints/action-types';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,

});
