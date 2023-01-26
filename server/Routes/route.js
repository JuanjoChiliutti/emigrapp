const express = require("express");
const { createUser } = require("../Controllers/CreateUser");
const { encriptingPass } = require("../Controllers/encriptingPass");
const { requireToken } = require("../Middleware/requiretoken");


const router = express.Router();


router.post("/signup", createUser);
router.post("/login", encriptingPass);
router.get("/protected",  requireToken);


module.exports = router;

