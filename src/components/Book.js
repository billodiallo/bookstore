/* eslint-disable react/prop-types */
import React from 'react';
import ProtoType from 'prop-types';

const Books = (props) => {
  const {
    id, title, category,completedPercent,currentChapeter, handleClick,
  } = props;
  return (
    <ul className ="book-ul"> 
  <li>
  <div className = "caterory-title-author">
    <p className = "category black-2">{category}</p>
    <p className = "title">{title}</p>
    <a href = "#" id = {id}> author</a> 

  <a href = "#" id = {id} className = 'flex-row-item Line-2 padding-1'>
    Comment
  </a>

  <a href = "#" id = {id}  onClick= {handleClick} className = "flex-row-item Line-2 padding-1">
Remove
  </a>

  <a href = "#" id = {id} className = "flex-row-item Line-2 padding-1">
    Edit
  </a>
  </div>
  </li>
    </ul>
    

Books.prototype = {
  id: ProtoType.number,
  title: ProtoType.string,
  category: ProtoType.string,
  handleClick: ProtoType.func,
};

Books.default = {
  id: 99,
  title: 'title must fill here',
  category: 'category must here',

};

export default Books;
