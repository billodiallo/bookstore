import React from "react";

const BookForm = () => {
    const bookCategories = [
        'Action',
        'Biography',
        'History',
        'Horror',
        'Kids',
        'Learning',
        'Sci-Fi',
    ];


    return (
        <div>
            <form>
                <label htmlFor= "title">
                    Title:
                    <input type = "text" name = "title" />                  
                </label>
                <label>
                    Category:
                    <select>
                        {bookCategories.map(category => (
                            <option key = {category} value = {category}>{category}    
                            </option> ))}
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default BookForm;