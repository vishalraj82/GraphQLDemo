import { gql } from "apollo-boost";


const getBooksQuery = gql`
    query {
        books {
            id
            name
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genreId: ID!, $authorId: ID!) {
        addBook( name: $name, genreId: $genreId, authorId: $authorId) {
            id
        }
    }
`;

export {
    getBooksQuery,
    addBookMutation
}
