import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { addAuthorMutation } from "../queries/genre.js";

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

    onChangeAuthorName(e) {
        this.setState({
            genre: {
                name: e.target.value
            }
        });
    }

    onSubmitForm(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>
                <form id="add-genre" onSubmit={this.onSubmitForm}>
                    <p>
                        <label>Name:</label>
                        <input style={{ marginLeft: 10 }} type="text" name="name" onChange={this.onChangeAuthorName}/>
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
    graphql(addAuthorMutation, { name: "addAuthorMutation"} )
)(AddAuthorComponent);

export { AddAuthor };
