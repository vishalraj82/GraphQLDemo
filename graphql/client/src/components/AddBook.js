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

    onChangeBookName(e) {
        this.setState({
            book: {
                name: e.target.value
            }
        });
    }

    onChangeGenreId (e) {
        this.setState({
            genre: {
                id: e.target.value
            }
        });
    }

    onChangeAuthorId (e) {
        this.setState({
            author: {
                id: e.target.value
            }
        });
    }

    onSubmitForm(e) {
        e.preventDefault();
        this.props.addBookMutation({
            variables: {
                name: this.state.book.name,
                genreId: this.state.genre.id,
                authorId: this.state.author.id
            },
            refetchQueries: [
                { query: getBooksQuery }
            ]
        });
    }

    render() {
        return (
            <div>
                <form id="add-book" onSubmit={this.onSubmitForm}>
                    <p>
                        <label>Name: </label>
                        <input type="text" onChange={this.onChangeBookName} />
                    </p>
                    <p>
                        <label>Genre: </label>
                        <select onChange={this.onChangeGenreId}>
                            {
                                this.props.getGenresQuery.genres && this.props.getGenresQuery.genres.map(
                                    genre => (<li key={genre.id}>{genre.name}</li>)
                                )
                            }
                        </select>
                    </p>
                    <p>
                        <label>Author: </label>
                        <select onChange={this.onChangeAuthorId}>
                            {
                                this.props.getAuthorsQuery.authors && this.props.getAuthorsQuery.authors.map(
                                    author => (<li key={author.id}>{author.name}</li>)
                                )
                            }
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
