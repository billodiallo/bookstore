import React from "react";
import {connect} from "react-redux";
import { ProtoTypes } from "prop-types";
import Book from "../components/Book";

const BookList = props => {
    const {books} = props;
    return (
        <div>
            <h1>Books as html table</h1>
            <table>
                <tr>
                    <th>Book ID</th>
                    <th>Title</th>
                    <th>category</th>
                </tr>
            </table>
        </div>
    )
}
