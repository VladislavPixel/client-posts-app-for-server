const POST_AND_POINT = "post"

const postService = {
	getPostById: async (id) => {
		const responseDataPost = await fetch(`${process.env.API_URL}${POST_AND_POINT}`, {
			method: "POST",
			body: JSON.stringify({ id })
		})
		const post = await responseDataPost.json()
		return post
	}
}

export default postService
