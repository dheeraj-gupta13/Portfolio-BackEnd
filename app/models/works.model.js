const mongoose = require('../db');
const Schema = mongoose.Schema;

const WorksSchema = new Schema({
    id:String,
    Experience: Array,
    Ratings: Array,
})

module.exports = mongoose.model("Works", WorksSchema);
