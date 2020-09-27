import React, { Component } from "react";
import { graphql } from "react-apollo";
import { AddBook } from "./AddBook.js";
import { getBooksQuery } from "../../queries/book.js";
import { Spinner, Warning, List } from "../../uiComponents/index.js";

class BookListComponent extends Component {
    displayBookList () {
        const data = this.props.data;

        if (data.loading) {
            return (<Spinner loadingText="books" />);
        } else if (Array.isArray(data.books) && data.books.length) {
            return (<List items={data.books} />);
        } else {
            return (<Warning warning="Oops, no books found!" />);
        }
    }

    render() {
        return (
            <div id="book-list" className="d-flex">
                <div className="col-sm-6">
                    {this.displayBookList()}
                </div>
                <div className="col-sm-6">
                    <AddBook />
                </div>
            </div>
        );
    }
}

const BookList = graphql(getBooksQuery)(BookListComponent);

export { BookList };
