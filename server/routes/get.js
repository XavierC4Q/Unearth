var express = require('express');
var router = express.Router();
var db = require('../database/getrequest');
const { loginRequired } = require("../auth/helpers");

router.get('/loggedInUser', loginRequired, db.getUser)
router.get('/singleuser/:userID', loginRequired, db.getSingleUser)
router.get('/allusers', db.getAllUsers)
router.get('/userlocation/:userID', db.getUserLocation)
router.get('/profileInfo/:userID', loginRequired, db.getProfileInfo)
router.get('/logout', loginRequired, db.logoutUser)

module.exports = router;
