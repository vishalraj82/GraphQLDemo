const
    graphql = require("graphql"),
    { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLNonNull } = graphql;

const Types = require("./Types"),
    { BookType, AuthorType, GenreType } = Types;

const
    Models = require("../models/index"),
    { Book, Author, Genre } = Models;


const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const author = new Author({
                    name: args.name
                });

                return author.save();
            }
        },
        updateAuthor: {
            type: AuthorType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                let author = Author.findById(args.id);
                author.name = args.name;
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genreId: { type: new GraphQLNonNull(GraphQLID) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const book = new Book({
                    name: args.name,
                    genreId: args.genreId,
                    authorId: args.authorId
                });

                return book.save();
            }
        },
        updateBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                genreId: { type: new GraphQLNonNull(GraphQLID) },
                authorId: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                let book = Book.findById(args.id);

                if (args.name) book.name = args.name
                if (args.genreId) book.genreId = args.genreId;
                if (args.authorId) book.authorId = args.authorId;

                return book.save();
            }
        },
        addGenre: {
            type: GenreType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const genre = new Genre({
                    name: args.name
                });

                return genre.save();
            }
        },
        updateGenre: {
            type: GenreType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let genre = Genre.findById(args.id);
                genre.name = args.id;
                return genre.save();
            }
        }
    }
});

module.exports = Mutation;
