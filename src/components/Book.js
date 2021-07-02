/* eslint-disable react/prop-types */
import React from 'react';
import ProtoType from 'prop-types';

const Books = (props) => {
  const {
    id, title, category, handleClick,
  } = props;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <button type="button" id={id} onClick={handleClick}>X</button>
    </tr>
  );
};

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
