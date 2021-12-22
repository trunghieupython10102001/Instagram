const PostController = require("../app/controller/post")
const router = require("express").Router()

router.post("/create", PostController.createPost)
router.get("/all", PostController.getAllPost)
router.get('/:limit/:skip', PostController.getPostByLimit)
router.get('/:id', PostController.getPostById)

module.exports = router
