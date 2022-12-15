const express = require('express');
const router = express.Router();
const { postWorks, getWorks } = require('../controllers/works.controllers');

router.post('/works', postWorks);
router.get('/works', getWorks);
module.exports = router;