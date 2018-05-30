const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function editUser(req, res, next) {
  return db.none(
    `UPDATE users
     SET username=$1, email=$2, first_name=$3, last_name=$4, user_image=$5, search_distance=$6
     WHERE user_id=${req.params.userID};`,
    [
      req.body.username,
      req.body.email, req.body.first_name,
      req.body.last_name, req.body.user_image,
      req.body.search_distance
    ]
  )
  .then(data => {
    res.json("success");
  })
  .catch(error => {
    res.json(error);
  });
}

function editProfile(req, res, next) {
  return db.none(
    `UPDATE profile
     SET bio=$1, facebook=$2, twitter=$3, youtube=$4, soundcloud=$5, vimeo=$6, instagram=$7, linkedIn=$8
     WHERE user_id=${req.params.userID}`,
     [
       req.body.bio, req.body.facebook, req.body.twitter,
       req.body.youtube, req.body.soundcloud, req.body.vimeo,
       req.body.instagram, req.body.linkedIn
     ]
  )
  .then(data => {
    res.json("success")
  })
  .catch(error => {
    res.json(error)
  })
}

module.exports = {
  editUser,
  editProfile
}
