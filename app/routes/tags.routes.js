const express = require('express');
const router = express.Router();
const {postTags, getTags, getProblemsByTag, addTag} = require('../controllers/tags.controllers');

router.post('/tags', postTags);
router.get('/tags', getTags);
router.get('/getProblemsByTag', getProblemsByTag);
router.post('/addTag', addTag);

module.exports = router;