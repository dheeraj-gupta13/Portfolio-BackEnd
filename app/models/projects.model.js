const mongoose = require('../db');

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    id:                         String,
    ProjectName:                String,
    ProjectTechStack:           Array,
    ProjectLiveLink:            String,
    ProjectGithubLink:          String,     
    ProjectDescriptionParas:    Array,
    ProjectCreatedAt:           String,
    ProjectImageUrl:            String,
})

module.exports = mongoose.model("Projects", ProjectsSchema);
