import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { getBooksQuery, addBookMutation } from "../queries/book.js";
import { getAuthorsQuery } from "../queries/author.js";
import { getGenresQuery } from "../queries/genre.js";


class AddBookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: { name: "" },
            genre: { id: "" },
            author: { id: "" }
        }

        this.onChangeBookName = this.onChangeBookName.bind(this);
        this.onChangeGenreId = this.onChangeGenreId.bind(this);
        this.onChangeAuthorId = this.onChangeAuthorId.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeBookName(bookName) {
        this.setState({
            book: {
                name: bookName
            }
        });
    }

    onChangeGenreId (genreId) {
        this.setState({
            genre: {
                id: genreId
            }
        });
    }

    onChangeAuthorId (authorId) {
        this.setState({
            author: {
                id: authorId
            }
        });
    }

    onSubmitForm(e) {
        e.preventDefault();
        const { book, genre, author } = this.state;

        this.props.addBookMutation({
            variables: {
                name: book.name,
                genreId: genre.id,
                authorId: author.id
            },
            refetchQueries: [
                { query: getBooksQuery },
                { query: getAuthorsQuery },
                { query: getGenresQuery }
            ]
        });
    }

    render() {
        const authors = this.props.getAuthorsQuery.authors || [];
        const genres = this.props.getGenresQuery.genres || [];

        return (
            <div>
                <form id="add-book" onSubmit={this.onSubmitForm}>
                    <h4>Add new Book</h4>
                    <p>
                        <label>Name: </label>
                        <input type="text" onChange={(e) => this.onChangeBookName(e.target.value) } />
                    </p>
                    <p>
                        <label>Genre: </label>
                        <select onChange={(e) => this.onChangeGenreId(e.target.value) }>
                            { genres.map(genre => (<option key={genre.id} value={genre.id}>{genre.name}</option>)) }
                        </select>
                    </p>
                    <p>
                        <label>Author: </label>
                        <select onChange={(e) => this.onChangeAuthorId(e.target.value) }>
                            { authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>)) }
                        </select>
                    </p>
                    <p>
                        <input type="submit" value="Add Book" />
                    </p>
                </form>
            </div>
        )
    }
}

const AddBook = compose(
    graphql(getAuthorsQuery,{ name: "getAuthorsQuery"} ),
    graphql(getGenresQuery, { name: "getGenresQuery" } ),
    graphql(addBookMutation, { name: "addBookMutation"} )
)(AddBookComponent);

export { AddBook };
