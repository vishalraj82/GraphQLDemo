import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { addGenreMutation } from "../queries/genre.js";

class AddGenreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: {
                name: ""
            }
        };
        this.onChangeGenreName = this.onChangeGenreName.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onChangeGenreName(e) {
        this.setState({
            genre: {
                name: e.target.value
            }
        });
    }

    onSubmitForm(e) {
        e.preventDefault();
        this.props.addGenreMutation({
            variables: {
                name: this.state.genre.name
            }
        })
    }

    render() {
        return (
            <div>
                <form id="add-genre" onSubmit={this.onSubmitForm}>
                    <p>
                        <label>Name:</label>
                        <input style={{ marginLeft: 10 }} type="text" onChange={this.onChangeGenreName}/>
                    </p>
                    <p>
                        <input type="submit" value="Add Genre" />
                    </p>
                </form>
            </div>
        );
    }
};

const AddGenre = compose(
    graphql(addGenreMutation, { name: "addGenreMutation"} )
)(AddGenreComponent);

export { AddGenre };
