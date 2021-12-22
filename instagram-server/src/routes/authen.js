const AuthenController = require("../app/controller/authen")
const verifyToken = require("../app/middlewares/auth.middleware")
const router = require("express").Router()

router.post("/signup", AuthenController.signup)
router.post("/login", AuthenController.login)
router.get("/", verifyToken, AuthenController.checkLogin)

module.exports = router
