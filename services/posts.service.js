import { getCurrentToken } from "../services/localStorage.service"
const POSTS_END_POINT = "posts"

const postsService = {
	getPostsByPage: async (idPostsPage) => {
		const responseDataPosts = await fetch(`${process.env.API_URL}${POSTS_END_POINT}/${idPostsPage}`)
		const data = await responseDataPosts.json()
		return data
	},
	getAllLength: async () => {
		const responseLength = await fetch(`${process.env.API_URL}${POSTS_END_POINT}`)
		const data = await responseLength.json()
		return data.count
	},
	getDataForSearch: async (body) => {
		const responseDataForSearch = await fetch(`${process.env.API_URL}${POSTS_END_POINT}/search`, {
			method: "POST",
			body: JSON.stringify(body)
		})
		const data = await responseDataForSearch.json()
		return data
	},
	updatePost: async (body) => {
		delete body.comments
		const responseDataUpdatePost = await fetch(`${process.env.API_URL}${POSTS_END_POINT}/update/${body.id}`, {
			method: "PUT",
			headers: {
				"Authorization": `Bearer ${getCurrentToken()}`,
				"Content-type": "application/json"
			},
			body: JSON.stringify(body)
		})
		const data = await responseDataUpdatePost.json()
		return data
	}
}

export default postsService
