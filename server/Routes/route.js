const express = require("express");
const { createUser } = require("../Controllers/CreateUser");


const router = express.Router();


router.post("/", createUser);


module.exports = router;

