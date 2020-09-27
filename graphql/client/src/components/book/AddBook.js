import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery } from "../../queries/author.js";
import { getBooksQuery, addBookMutation } from "../../queries/book.js";
import { getGenresQuery } from "../../queries/genre.js";


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
            <form id="add-book" onSubmit={this.onSubmitForm}>
                <h4 className="text-center">Add new Book</h4>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" onChange={(e) => this.onChangeBookName(e.target.value) } />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Genre: </label>
                    <div className="col-sm-10">
                        <select className="form-control" onChange={(e) => this.onChangeGenreId(e.target.value) }>
                            { genres.map(genre => (<option key={genre.id} value={genre.id}>{genre.name}</option>)) }
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Author: </label>
                    <div className="col-sm-10">
                        <select className="form-control" onChange={(e) => this.onChangeAuthorId(e.target.value) }>
                            { authors.map(author => (<option key={author.id} value={author.id}>{author.name}</option>)) }
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 d-flex justify-content-end">
                        <button type="submit" class="btn btn-sm btn-primary">Add book</button>
                    </div>
                </div>
                
            </form>
        )
    }
}

const AddBook = compose(
    graphql(getAuthorsQuery,{ name: "getAuthorsQuery"} ),
    graphql(getGenresQuery, { name: "getGenresQuery" } ),
    graphql(addBookMutation, { name: "addBookMutation"} )
)(AddBookComponent);

export { AddBook };
