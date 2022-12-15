const express = require('express');
const Projects = require('../models/projects.model');

const postProject = async (req, res) => {
    try {
        const {
            project
        } = req.body;


        const {
            ProjectName,
            ProjectTechStack, 
            ProjectLiveLink,
            ProjectGithubLink,
            ProjectDescriptionParas,
            ProjectCreatedAt,
            ProjectImageUrl
        } = project;

        await Projects.create({
            ProjectName,
            ProjectTechStack, 
            ProjectLiveLink,
            ProjectGithubLink,
            ProjectDescriptionParas,
            ProjectCreatedAt,
            ProjectImageUrl
        })
        

        res.send({
            msg:"Post Added"
        })
    } catch (error) {
        console.log(error);
    }
}



const getProjects = async (req, res) => {
    try {
        
        const r = await Projects.find({});

        res.send({
            projects:r
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postProject,
    getProjects,
}
