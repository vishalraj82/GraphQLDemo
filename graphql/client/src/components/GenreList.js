import React, { Component } from "react";
import { graphql, compose } from "react-apollo";

import { AddGenre } from "./AddGenre";
import { getGenresQuery } from "../queries/genre.js";

class GenreListComponent extends Component {
    displayGenreList () {
        const data = this.props.getGenresQuery;

        if (data.loading) {
            return (
                <div>Loading genre list...</div>
            )
        } else if (Array.isArray(data.genres) && data.genres.length) {
            return (
                <ul>
                    {data.genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}
                </ul>
            );
        }

        return (<div className="center">Oops, no genre found!</div>);
    }

    render() {
        return (
            <div id="genre-list">
                {this.displayGenreList()}
                <AddGenre />
            </div>
        );
    }
}

const GenreList = compose(
    graphql(getGenresQuery, { name: "getGenresQuery" })
)(GenreListComponent);

export { GenreList };
