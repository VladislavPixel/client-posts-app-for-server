/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {// server for docker
		API_URL: "http://localhost:8081/"
	},
	distDir: "build"
}

module.exports = nextConfig
