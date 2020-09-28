import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Navbar } from "./uiComponents/navbar.js";
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
                        <Route path="/" exact string render={() => <Navbar />} />
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
