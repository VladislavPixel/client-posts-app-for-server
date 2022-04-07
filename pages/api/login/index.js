
const Login = (req, res) => {
	const { username, password } = req.body
	res.setHeader("Content-type", "application/json")
	if (username !== "" && password !== "") return res.status(200).send({ id: "3254356", token: "token-user-data=345345tgerter5636546456" })
	res.status(401).send(null)
}

export default Login
