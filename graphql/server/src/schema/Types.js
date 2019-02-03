const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString, GraphQLList } = require("graphql");

const Book = require("../models/book");
const Author =  require("../models/author");

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: {
            type: GenreType,
            resolve(parent, args) {
                return Genre.findById(parent.genreId)
            }
        },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({ authorId: parent.id });
            }
        },
        genre: {
            type: new GraphQLList(GenreType),
            resolve(parent, args) {
                const books = Book.find({ authorId: parent.id }),
                    genreIdByBooks = books.map(book => book.genreId);

                return Genre.find({
                    '_id': {
                        $in: genreIdByBooks.map(mongoose.Types.ObjectId)
                    }
                });
            }
        }
    })
});

const GenreType = new GraphQLObjectType({
    name: "Genre",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Books.find({ genreId: args.id })
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                const books = Books.find({ genreId: args.id }),
                    authorIdByBooks = books.map(book => book.authorId);

                return Author.find({
                    'id': {
                        $in: authorIdByBooks.map(mongoose.Types.ObjectId)
                    }
                })
            }
        }
    })
})

module.exports = {
    BookType,
    AuthorType,
    GenreType
}
