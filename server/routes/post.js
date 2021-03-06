var express = require('express');
var router = express.Router();
var db = require('../database/postrequest');
const { loginRequired } = require("../auth/helpers");

router.post('/register', db.registerUser)
router.post('/login', db.loginUser)
router.post('/newUserCoords', db.insertUserCoords)
router.post('/newProfile', db.insertNewProfile)

module.exports = router;
