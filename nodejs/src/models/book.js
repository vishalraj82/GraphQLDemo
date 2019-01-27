const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchena = new Schema({
    name: String,
    genre: String,
    authorId: Number
});

module.exports = mongoose.model("Book", BookSchena);

