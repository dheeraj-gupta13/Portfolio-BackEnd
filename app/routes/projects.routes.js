const express = require('express');
const router = express.Router();
const { postProject, getProjects } = require('../controllers/projects.controllers');

router.post('/projects/', postProject);
router.get('/projects/', getProjects);
module.exports = router;