const AUTH_END_POINT = "login"

const authService = {
	signIn: async (payload) => {
		const responseDataAuth = await fetch(`${process.env.API_URL}${AUTH_END_POINT}`, {
			method: "POST",
			body: JSON.stringify(payload)
		})
		const data = await responseDataAuth.json()
		return data
	}
}

export default authService
