const bcrypt = require("bcryptjs");
const db = require("../database/index");

function comparePass(username, password) {
  console.log(username);
  return bcrypt.compareSync(username, password);
}

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return db.none(
    "INSERT INTO users (user_id, username, password, email, first_name, last_name, user_image, search_distance, latitude, longitude) VALUES (DEFAULT, ${username}, ${password}, ${email}, ${first_name}, ${last_name}, ${user_image}, ${search_distance}, ${latitude}, ${longitude})",
    {
      username: req.body.username,
      password: hash,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      user_image: req.body.user_image,
      search_distance: req.body.search_distance,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    }
  );
}

function loginRequired(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ status: "Please log in" });
  }
  return next();
}


module.exports = {
  comparePass,
  createUser,
  loginRequired
};
