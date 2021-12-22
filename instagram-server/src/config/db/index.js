const mongoose = require("mongoose")
require("dotenv").config()

async function connect() {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@instagram.xbxmf.mongodb.net/Instagram?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				// useUnifieldTopology: true,
			}
			
		)
		console.log('Connect database successfully')
	} catch(error) {
		console.log(error.message)
		console.log('Some error occured!!!')
	}
}

module.exports = { connect }