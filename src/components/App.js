import React from "react"
import './App.css';
import {BookList, BookForm}from "../containers/BookList";

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
