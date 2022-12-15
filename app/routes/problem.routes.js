const express = require('express');
const router = express.Router();
const {postProblem, getProblem, getAllProblems} = require('../controllers/problem.controllers');

router.post('/problems/', postProblem);
router.get('/problems/:id', getProblem);
router.get('/problems/', getAllProblems);
module.exports = router;