const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const userController =require("../Controllers/userController");

router.route("updateUser").put(userController.updateUser);
router.route("deleteUser").delete(userController.deleteUser);
router.route("getUser").get(userController.getUser);
router.route("/:id/followUser").put(userController.followUser);
router.route("/:id/unfollowUser").put(userController.unfollowUser);

module.exports = router;