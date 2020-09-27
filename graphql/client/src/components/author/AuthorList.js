import React, { Component } from "react";
import { graphql } from "react-apollo";
import { AddAuthor } from "./AddAuthor";
import { getAuthorsQuery } from "../../queries/author.js";
import { Spinner, Warning, List } from "../../uiComponents/index.js";

class AuthorListComponent extends Component {
    displayAuthorList () {
        const data = this.props.data;

        if (data.loading) {
            return (<Spinner loadingText="authors" />);
        } else if (Array.isArray(data.authors) && data.authors.length) {
            return (<List items={data.authors} />);
        } else {
            return (<Warning warning="Oops, no authors found!" />);
        }
    }

    render() {
        return (
            <div id="author-list" className="d-flex">
                <div className="col-sm-6">
                    {this.displayAuthorList()}
                </div>
                <div className="col-sm-6">
                    <AddAuthor />
                </div>
            </div>
        );
    }
}

const AuthorList = graphql(getAuthorsQuery)(AuthorListComponent);

export { AuthorList };
