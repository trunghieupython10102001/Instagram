const User = require("../models/User")
const jwt = require("jsonwebtoken")
const md5 = require("md5")

// sign up
// [POST] authen/signup

async function signup(req, res, next) {
	req.body.password = md5(req.body.password)

	try {
		const user = await User.findOne({ email: req.body.email })

		// user already exists
		if (user) {
			res.status(400).json({
				success: false,
				message: "Email already exists. Please choose another email.",
				errorCode: "email",
			})
		} else {
			// save user
			const user = new User(req.body)
			user.save()

			res.status(200).json({
				success: true,
				message: "User created.",
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

// log in
// [POST] authen/login

async function login(req, res, next) {
	req.body.password = md5(req.body.password)
	try {
		const user = await User.findOne({ email: req.body.email })

		if (user) {
			if (user.password === req.body.password) {
				const accessToken = jwt.sign(
					{
						id: user._id,
					},
					process.env.SECRET_SIGNATURE,
					{
						expiresIn: 86400,
					}
				)

				res.status(200).json({
					success: true,
					message: "User loged in successfully",
					accessToken,
				})
			} else {
				res.status(401).json({
					success: false,
					message: "Email or password is incorrect",
				})
			}
		} else {
			res.status(401).json({
				success: false,
				message: "Email or password is incorrect",
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: error.message,
		})
	}
}

// check login
// [GET] /authen
async function checkLogin(req, res, next) {
	try {
		const user = await User.findById(req.userId).select("-password")
		if (!user) {
			res.status(400).json({
				success: false,
				message: "User not found",
			})
		} else {
			res.status(200).json({
				success: true,
				message: "User is authenticated",
				user,
			})
		}
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Internal server error",
		})
	}
}

module.exports = {
	signup,
	login,
	checkLogin,
}
