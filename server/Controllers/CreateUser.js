const userSchema = require("../Models/users.js");

const createUser = (req, res) => {

  const user = userSchema(req.body);
  
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  createUser,
};
