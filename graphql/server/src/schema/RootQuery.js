const graphql = require("graphql");

const Types = require("./Types.js")
const Models = require("../models/index");


const { BookType, AuthorType, GenreType } = Types;
const { Book, Author, Genre } = Models;

const { GraphQLObjectType } = graphql;
const { GraphQLID, GraphQLList } = graphql;


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Book.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                return Author.findById(args.id);
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return Author.find({});
            }
        },
        genre: {
            type: GenreType,
            resolve(parent, args) {
                return Genre.findById(args.id)
            }
        },
        genres: {
            type: new GraphQLList(GenreType),
            resolve(parent, args) {
                return Genre.find({});
            }
        }
    }
});

module.exports = RootQuery
