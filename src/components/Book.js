import React from 'react';
import ProtoType from "prop-types";

const Book = props => {
    const {id, title, category} = props;

    return(
        <tr>
            <th>{id}</th>
            <th>{title}</th>
            <th>{category}</th>

        </tr>
    );
};

Book.prototype = {
    id.ProtoType.number,
    title.ProtoType.string,
    category.ProtoType.string
};
