import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { AddGenre } from "./AddGenre";
import { getGenresQuery } from "../../queries/genre.js";
import { Spinner, Warning, List } from "../../uiComponents/index.js";

class GenreListComponent extends Component {
    displayGenreList () {
        const data = this.props.getGenresQuery;

        if (data.loading) {
            return (<Spinner loadingText="genres" />);
        } else if (Array.isArray(data.genres) && data.genres.length) {
            return (<List items={data.genres} />);
        } else {
            return (<Warning warning="Oops, no genres found!" />);
        }
    }

    render() {
        return (
            <div id="genre-list" className="d-flex">
                <div className="col-sm-6">
                    {this.displayGenreList()}
                </div>
                <div className="col-sm-6">
                    <AddGenre />
                </div>
            </div>
        );
    }
}

const GenreList = compose(
    graphql(getGenresQuery, { name: "getGenresQuery" })
)(GenreListComponent);

export { GenreList };
