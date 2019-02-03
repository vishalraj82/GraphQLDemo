import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { getAuthorsQuery, addAuthorMutation } from "../queries/author.js";

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
            <div>
                <form id="add-genre" onSubmit={this.onSubmitForm}>
                    <h4>Add new Author</h4>
                    <p>
                        <label>Name:</label>
                        <input style={{ marginLeft: 10 }} type="text" name="name" onChange={(e) => this.onChangeAuthorName(e.target.value)}/>
                    </p>
                    <p>
                        <input type="submit" value="Add Author" />
                    </p>
                </form>
            </div>
        );
    }
};

const AddAuthor = compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery"}),
    graphql(addAuthorMutation, { name: "addAuthorMutation"})
)(AddAuthorComponent);

export { AddAuthor };
