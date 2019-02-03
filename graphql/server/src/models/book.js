const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    description: String,
    genre: String,
    authorId: String
});

module.exports = mongoose.model("Book", BookSchema);
