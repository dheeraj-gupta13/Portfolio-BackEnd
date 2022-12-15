const express = require('express');
const router = express.Router();
const {postHomeDetails, getHomeDetails} = require('../controllers/home.controllers');

router.post('/home', postHomeDetails);
router.get('/home', getHomeDetails);
module.exports = router;