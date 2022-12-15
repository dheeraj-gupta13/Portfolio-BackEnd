const mongoose = require('../db');

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
    id:String,
    navHeading: String,
    title:String,
    subTitle:String,
    description:String,
    jargons:Array
})

module.exports = mongoose.model("Home", HomeSchema);
