/* eslint-disable react/prop-types */
import React from 'react';
import ProtoType from 'prop-types';

const Books = (props) => {
  const {
    id, title, category, completedPercent, currentChapter, handleClick,
  } = props;
  return (
    <ul className="book-ul">
      <li>
        <div className="caterory-title-author">
          <p className="category black-2">{category}</p>
          <p className="title">{title}</p>
          <a href="www" id={id}> author</a>
        </div>
        <div>

          <a href="www" id={id} className="flex-row-item Line-2 padding-1">
            Comment
          </a>

          <a href="ww" id={id} onClick={handleClick} className="flex-row-item Line-2 padding-1">
            Remove
          </a>

          <a href="www" id={id} className="flex-row-item Line-2 padding-1">
            Edit
          </a>
        </div>
      </li>

      <li className="percentage-box">
        <div className="flex-row">
          <PichartComponent />
          <div className="flex-column">
            <h2 className="flex-coulumn-item percentage"> </h2>
            {`${completedPercent} %`}
            <p className="black-2 flex-column-1-item">Completed</p>

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
