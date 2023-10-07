const router = require("express").Router();
const Post = require("../Models/Post");
const User = require("../Models/User");
const postController =require("../Controllers/postController");


router.route("/").post(postController.createPost);
router.route("/:id").put(postController.updatePost);
router.route("/:id").delete(postController.deletePost);
router.route("/:id/like").put(postController.LikeOrDislike);
router.route("/:id").get(postController.getPost);
router.route("/timeline/all").get(postController.getTimelinePost);


module.exports = router;