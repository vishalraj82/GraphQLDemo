import React, { Component } from "react";
import { graphql } from "react-apollo";

import { AddBook } from "./AddBook.js";
import { getBooksQuery } from "../queries/book.js";

class BookListComponent extends Component {
    displayBookList () {
        const data = this.props.data;

        if (data.loading) {
            return (
                <div>Loading book list...</div>
            )
        } else if (Array.isArray(data.books) && data.books.length) {
            return (
                <ul>
                    {data.books.map(book => (<li key={book.id}>{book.name}</li>))}
                </ul>
            );
        }

        return (<div className="center">Oops, no book found!</div>);
    }

    render() {
        return (
            <div id="book-list">
                {this.displayBookList()}
                <AddBook />
            </div>
        );
    }
}

const BookList = graphql(getBooksQuery)(BookListComponent);

export { BookList };
