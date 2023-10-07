const router = require('express').Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const authController =require("../Controllers/authController");



router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

module.exports = router;