import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Import components
import BookList from "./components/BookList";

// ApolloClient setup
const client = new ApolloClient({
    uri: 'http://server:4000/graphql'
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div id="main">
                    <h2>Ninja's Reading List</h2>
                    <BookList />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
