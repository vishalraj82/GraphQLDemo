import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { addGenreMutation, getGenresQuery } from "../../queries/genre.js";

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
            },
            refetchQueries: [
                { query: getGenresQuery }
            ]
        })
    }

    render() {
        return (
            <form id="add-genre" className="mt-2" onSubmit={this.onSubmitForm}>
                <h4 className="text-center">Add new Genre</h4>
                <div className="form-group row">
                    <label for="genreName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="genreName" onChange={this.onChangeGenreName} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-12 d-flex justify-content-end">
                        <button type="submit" class="btn btn-sm btn-primary">Add Genre</button>
                    </div>
                </div>
            </form>
        );
    }
};

const AddGenre = compose(
    graphql(addGenreMutation, { name: "addGenreMutation"} )
)(AddGenreComponent);

export { AddGenre };
