import React, { Component } from 'react';

// Import components
import BookList from "./components/BookList";

class App extends Component {
    render() {
        return (
            <div id="main">
                <h2>Ninja's Reading List</h2>
                <BookList />
            </div>
        );
    }
}

export default App;
