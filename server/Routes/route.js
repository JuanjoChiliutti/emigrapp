const express = require("express");
const createUser = require("../Controllers/CreateUser");
const router = express.Router();

// router.post("/", createUser);
router.post("/", (req, res) => {
  console.log("hello albert");
});

module.exports = {
  router,
};
