const db = require("./index");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

function editUser(req, res, next) {
  return db.none(
    `UPDATE users
     SET username=$1, email=$2, first_name=$3, last_name=$4, user_image=$5
     WHERE user_id=${req.params.userID};`,
    [
      req.body.username,
      req.body.email, req.body.first_name,
      req.body.last_name, req.body.imageInput
    ]
  )
  .then(data => {
    res.json("success");
  })
  .catch(error => {
    res.json(error);
  });
}

module.exports = {
  editUser
}
