const User = require("../models/User")
const Post = require("../models/Post")

// [POST] /post/create
// create a post
async function createPost(req, res, next) {
	try {
		req.body.author = req.userId
		const userName = await User.findOne({ _id: req.userId })
		req.body.authorName = userName.username
		const newPost = new Post(req.body)
		const savedPost = await newPost.save()

		const user = await User.findOneAndUpdate(
			{ _id: savedPost.author },
			{ $push: { posts: savedPost._id } }
		)

		res.status(200).json({
			success: true,
			message: "Post created successfully",
			post: savedPost,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Some error occured!!!",
		})
	}
}

// [GET] /post/all
// get all post in db
async function getAllPost(req, res, next) {
	try {
		const allPost = await Post.find({}).sort({ createdAt: -1 })
		// const allPost = await Post.find({}).limit(1).skip(4)
		if (allPost) {
			res.status(200).json({
				success: true,
				message: "Get all posts successfully",
				allPost,
			})
		} else {
			res.status(400).json({
				success: false,
				message: "Post not found",
			})
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Some error occured!!!",
		})
	}
}

// [GET] /post/limit
// get limitation of posts
async function getPostByLimit(req, res, next) {
	try {
		const limit = parseInt(req.params.limit)
		const skip = parseInt(req.params.skip)
		console.log(limit, skip)
		const posts = await Post.find({})
			.sort({ createdAt: -1 })
			.limit(limit)
			.skip(skip)
		if (posts) {
			res.status(200).json({
				success: true,
				message: "Get posts successfully",
				posts,
			})
		} else {
			res.status(400).json({
				success: false,
				message: "Post not found",
			})
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Some error occured!!!",
		})
	}
}

// [GET] /post/:id
// get one post by post id
async function getPostById(req, res, next) {
	try {
		const post = await Post.findOne({ _id: req.params.id })
		if (post) {
			res.status(200).json({
				success: true,
				message: "Post founded",
				post,
			})
		} else {
			res.status(400).json({
				success: false,
				message: "Post not found",
			})
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({
			success: false,
			message: "Some error occured!!!",
		})
	}
}

module.exports = { createPost, getAllPost, getPostById, getPostByLimit }
