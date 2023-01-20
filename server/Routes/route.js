const express = require("express");
const { createUser } = require("../Controllers/CreateUser");
const { encriptingPass } = require("../Controllers/encriptingPass");

const router = express.Router();


router.post("/", createUser);
router.post("/login", encriptingPass);


module.exports = router;

