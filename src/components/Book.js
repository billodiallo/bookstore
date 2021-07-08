/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ProtoType from 'prop-types';
import PieChartComponent from './PieChartComponent';
import '../index.css';

const Books = (props) => {
  const {
    id, title, author, category, completedPercent, currentChapter, handleClick,
  } = props;
  return (
    <ul className="book-ul">
      <li>
        <div className="category-title-author">
          <p className="category black-2">{category}</p>
          <p className="title">{title}</p>
          <a href="#" id={id}>
            {author}
          </a>
        </div>
        <div>

          <a href="#" id={id} className="flex-row-item Line-2 padding-1">
            Comments
          </a>

          <a href="#" id={id} onClick={handleClick} className="flex-row-item Line-2 padding-1">
            Remove
          </a>

          <a href="#" id={id} className="flex-row-item Line-2 padding-1">
            Edit
          </a>
        </div>
      </li>

      <li className="percentage-box">
        <div className="flex-row">
          <PieChartComponent percentage={parseInt(completedPercent, 10)} />
          <div className="flex-columm">
            <h2 className="flex-column-item percentage">{`${completedPercent} %`}</h2>
            <p className="black-2 flex-column-item">Completed</p>
          </div>
        </div>

      </li>
      <li>
        <div className="flex-row">
          <p className="Line-3" />
          <div className="current-chapter-box">
            <p className="black-2 current-chapter-text"> CURRENT CHAPTER</p>
            <p className="current-chapter-number">{`Chapter ${currentChapter}`}</p>
            <buton className="update-button">
              UPDATE PROGRESS
            </buton>
          </div>
        </div>
      </li>

    </ul>

  );
};

Books.prototype = {
  id: ProtoType.number,
  title: ProtoType.string,
  category: ProtoType.string,
  handleClick: ProtoType.func,
  author: ProtoType.string,
  completedPercent: ProtoType.number,
  currentChapter: ProtoType.number,
};

Books.default = {
  id: 99,
  title: 'title must fill here',
  category: 'category must here',
  author: 'defualt Author',
  completedPercent: 100,
  currentChapter: 1,
};

export default Books;
