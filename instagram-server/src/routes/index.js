const authenRouter = require("./authen")
const postRouter = require("./post")
const verifyToken = require("../app/middlewares/auth.middleware")

function route(app) {
	app.use("/authen", authenRouter)
	app.use("/post", verifyToken, postRouter)
}

module.exports = route
