import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import Route from "react-router-dom/Route";

import { BookList } from "./components/BookList.js";
import { AuthorList } from "./components/AuthorList.js";
import { GenreList } from "./components/GenreList.js";

const client = new ApolloClient({ url: "http://localhost:4000/graphql" });

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <h1>The Book Store</h1>
                    <Route path="/" exact string render={
                        () => (
                            <div className="center">
                                <p><a href="/books">Books</a></p>
                                <p><a href="/authors">Authors</a></p>
                                <p><a href="/genres">Genres</a></p>
                            </div>
                        )
                    } />
                    <Route path="/books" exact strict component={BookList} />
                    <Route path="/authors" exact strict component={AuthorList} />
                    <Route path="/genres" exact strict component={GenreList} />
                </ApolloProvider>
            </BrowserRouter>
        );
    }
}

export default App;
