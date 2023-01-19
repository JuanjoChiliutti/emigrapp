const userSchema = require("../Models/Users.js");

const createUser = (req, res) => {
  console.log(req.body);
  const user = userSchema(req.body);
  console.log(user);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  createUser,
};
