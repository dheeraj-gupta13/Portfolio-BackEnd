const mongoose = require('../db');

const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
    id:                         String,
    ProblemTitle:               String,
    ProblemTags:                Array,
    ProblemLevel:               String,
    ProblemAcceptanceRate:      Number,
    ProblemQuestionParas:       Array,
    ProblemTestCases:           Array,
    ProblemApproachParas:       Array,
    ProblemCode:                Array,
    ProblemCreatedAt:           String
})

module.exports = mongoose.model("Problem", ProblemSchema);
