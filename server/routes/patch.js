var express = require('express');
var router = express.Router();
var db = require('../database/patchrequest');
const { loginRequired } = require("../auth/helpers");

router.patch('/editUser/:userID', loginRequired, db.editUser)
router.patch('/editProfile/:userID', loginRequired, db.editProfile)

module.exports = router;
