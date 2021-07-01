/* eslint-disable react/prop-types */
import React from 'react';
import ProtoType from 'prop-types';

const Books = (props) => {
  const { id, title, category } = props;
  return (
    <tr>
      <th>{id}</th>
      <th>{title}</th>
      <th>{category}</th>
      <button type="button" onClick={handleClick}>X</button>
    </tr>
  );
};

Books.prototype = {
  id: ProtoType.number,
  title: ProtoType.string,
  category: ProtoType.string,
};

Books.default = {
  id: 99,
  title: 'title must fill here',
  category: 'category must here',

};

export default Books;
