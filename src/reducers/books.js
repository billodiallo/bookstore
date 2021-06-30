import { CREATE_BOOK, REMOVE_BOOK } from "../constaints/action-types";
import {books as booksArrays} from '../static.data'

export default function books(store = booksArrays,action) {
if (action.type == CREATE_BOOK) {
    return [
        ...store, action.payload,
    ]
}

}