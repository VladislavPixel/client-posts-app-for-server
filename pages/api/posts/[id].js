import posts from "../../../fakeDb/db"
import getNewArray from "../../../utils/pagination"
import { MAX_POSTS_ON_PAGE } from "../../../utils/core/variables"

const CurrentPost = (req, res) => {
	const { id } = req.query
	const postsArray = getNewArray(MAX_POSTS_ON_PAGE, Number(id), posts)
	res.setHeader("Content-type", "application/json")
	res.status(200).send(postsArray)
}

export default CurrentPost