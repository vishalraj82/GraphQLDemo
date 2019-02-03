import { gql } from "apollo-boost";

const getGenresQuery = gql`
    query {
        genres {
            id
            name
        }
    }
`;

const addGenreMutation = gql`
    mutation($name: String!) {
        addGenre(name: $name) {
            id
            name
        }
    }
`;

export {
    getGenresQuery,
    addGenreMutation
};
