import posts from "../../../../fakeDb/db"

const Posts = (req, res) => {
	const { title, description } = req.body
	let arrayReturned
	function checkReturn(arr) {
		if (arr.length <= 8) return res.status(200).send(arr)
		return res.status(200).send(arr.slice(0, 9))
	}
	if (title !== "") {
		arrayReturned = posts.filter(post => {
			if (post.title.toLowerCase().includes(title.toLowerCase())) return post
			return null
		})
		console.log("Произвел выборку по заголовку: ", arrayReturned)
		checkReturn(arrayReturned)
	} else if (description !== "") {
		arrayReturned = posts.filter(post => {
			if (post.description.toLowerCase().includes(description.toLowerCase())) return post
			return null
		})
		console.log("Произвел выборку по описанию: ", arrayReturned)
		checkReturn(arrayReturned)
	} else {
		res.status(200).send([])
	}
}

export default Posts
