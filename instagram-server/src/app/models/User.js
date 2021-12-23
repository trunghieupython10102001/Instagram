const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
	{
		username: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		fullname: { type: String, required: true },
		gender: { type: String },
		following: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "users",
			},
		],
		follower: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "users",
			},
		],
		avatar: { type: String },
		birthday: { type: String },
		posts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "posts",
			},
		],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("users", User)
