const express = require('express');
const Problem = require('../models/problem.model');

const postProblem = async (req, res) => {
    try {
        const {
            problem
        } = req.body;


        const {
            ProblemTitle,
            ProblemTags, 
            ProblemLevel,
            ProblemAcceptanceRate,
            ProblemQuestionParas,
            ProblemTestCases,
            ProblemApproachParas, 
            ProblemCode,
            ProblemCreatedAt
        } = problem;


        await Problem.create({
            ProblemTitle,
            ProblemLevel,
            ProblemAcceptanceRate,
            ProblemTags,
            ProblemQuestionParas,
            ProblemTestCases,
            ProblemApproachParas,
            ProblemCode,
            ProblemCreatedAt
        })
        

        res.send({
            msg:"Post Added"
        })
    } catch (error) {
        console.log(error);
    }
}

const getProblem = async (req, res) => {
    try {
        
        res.send({
            msg:"ans"
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllProblems = async (req, res) => {
    try {
        
        const r = await Problem.find({});

        res.send({
            problems:r
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postProblem,
    getProblem,
    getAllProblems
}
