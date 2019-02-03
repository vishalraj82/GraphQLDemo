import React, { Component } from "react";
import { graphql } from "react-apollo";

import { AddAuthor } from "./AddAuthor";
import { getAuthorsQuery } from "../queries/author.js";

class AuthorListComponent extends Component {
    displayAuthorList () {
        const data = this.props.data;

        if (data.loading) {
            return (
                <div>Loading author list...</div>
            )
        } else if (Array.isArray(data.authors) && data.authors.length) {
            return (
                <ul>
                    {
                        data.authors.map(
                            author => (<li key={author.id}>{author.name}</li>)
                        )
                    }
                </ul>
            );
        }

        return (<div className="center">Oops, no author found!</div>);
    }

    render() {
        return (
            <div id="author-list">
                {this.displayAuthorList()}
                <AddAuthor />
            </div>
        );
    }
}

const AuthorList = graphql(getAuthorsQuery)(AuthorListComponent);

export { AuthorList };
