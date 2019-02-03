const BookModel = require("./book");
const AuthorModel = require("./author");
const GenreModel = require("./genre");

module.exports = {
    Book: BookModel,
    Author: AuthorModel,
    Genre: GenreModel
};
