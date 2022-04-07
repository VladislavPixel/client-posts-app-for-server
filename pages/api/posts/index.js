import posts from "../../../fakeDb/db"

const Posts = (req, res) => {
	res.setHeader("Content-type", "application/json")
	res.status(200).send(posts.length)
}

export default Posts
