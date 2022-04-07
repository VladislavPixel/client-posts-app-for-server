import posts, { comments } from "../../../fakeDb/db"

const Post = (req, res) => {
	const { id } = req.query
	res.setHeader("Content-type", "application/json")
	const post = posts.find(item => item.id === id)
	let correctDataPost
	if (post.commented.length === 0) {
		correctDataPost = post
	} else {
		correctDataPost = post
		let commentsArr = []
		for (const idComment of post.commented) {
			for (const comment of comments) {
				if (comment.id === idComment) commentsArr.push(comment)
			}
		}
		correctDataPost["commentsData"] = commentsArr
	}
	res.status(200).send(correctDataPost)
}

export default Post
