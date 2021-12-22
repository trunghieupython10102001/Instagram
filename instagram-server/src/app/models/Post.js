const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = new Schema(
	{
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
		authorName: { type: String },
		content: {
			type: String,
		},
		location: {
			type: String,
		},
		images: { type: Array },
		comments: { type: Array, default: [] },
		likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "users",
			},
		],
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("posts", Post)
