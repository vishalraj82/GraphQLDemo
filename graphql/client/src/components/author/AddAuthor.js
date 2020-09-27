import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addAuthorMutation } from "../../queries/author.js";

class AddAuthorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: {
                name: ""
            }
        };
        this.onChangeAuthorName = this.onChangeAuthorName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeAuthorName(authorName) {
        this.setState({
            author: {
                name: authorName
            }
        });
    }

    onSubmitForm(e) {
        e.preventDefault();

        const { author } = this.state;

        this.props.addAuthorMutation({
            variables: {
                name: author.name
            },
            refetchQueries: [
                { query: getAuthorsQuery }
            ]
        });
    }

    render() {
        return (
            <form id="add-genre" onSubmit={this.onSubmitForm}>
                <h4 className="text-center">Add new Book</h4>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name: </label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" onChange={(e) => this.onChangeAuthorName(e.target.value) } />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 d-flex justify-content-end">
                        <button type="submit" class="btn btn-sm btn-primary">Add Author</button>
                    </div>
                </div>
            </form>
        );
    }
};

const AddAuthor = compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addAuthorMutation, { name: "addAuthorMutation"})
)(AddAuthorComponent);

export { AddAuthor };
