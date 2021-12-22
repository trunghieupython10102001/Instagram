const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
	const authHeader = req.header('Authorization')
	const accessToken = authHeader && authHeader.split(' ')[1]

	if (!accessToken) {
		res.status(401).json({
			success: false,
			message: "You must to log in"
		})
	} else {
		try {
			const decoded = jwt.verify(accessToken, process.env.SECRET_SIGNATURE)
			req.userId = decoded.id
			next()
		} catch (error) {
			res.status(403).json({
				success: false,
				message: error.message
			})
		}
	}
}

module.exports = verifyToken