import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import { AuthorList } from "./components/author/AuthorList.js";
import { BookList } from "./components/book/BookList.js";
import { GenreList } from "./components/genre/GenreList.js";

const client = new ApolloClient({ uri: "http://graphqlServer:4000/graphql" });

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">The Book Store</h1>
                        <Route path="/" exact string render={
                            () => (
                                <nav className="navbar navbar-expand-lg navbar-light bg-light mb1">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item"><Link className="nav-link" to="/books">Books</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/authors">Authors</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/genres">Genres</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            )
                        } />
                        <Route path="/books" exact strict component={BookList} />
                        <Route path="/authors" exact strict component={AuthorList} />
                        <Route path="/genres" exact strict component={GenreList} />
                    </div>
                </ApolloProvider>
            </BrowserRouter>
        );
    }
}

export default App;
