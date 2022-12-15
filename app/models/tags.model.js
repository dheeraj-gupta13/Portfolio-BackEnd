const mongoose = require('../db');

const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    id: String,
    allTags: Array
})

module.exports = mongoose.model("Tags", TagsSchema);
