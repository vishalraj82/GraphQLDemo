import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
    query {
        authors {
            id
            name
        }
    }
`;

const addAuthorQuery = gql`
    mutation ($name: String!) {
        addAuthor(name: $name) {
            id
            name
        }
    }
`;

export {
    getAuthorsQuery,
    addAuthorQuery
}
