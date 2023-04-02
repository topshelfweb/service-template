import jwt from "jsonwebtoken"
const { TOKEN_SECRET, TOKEN_ACCESS_TIME, TOKEN_REFRESH_TIME } = process.env

export default function generate(id) {
	const access_token = jwt.sign({
		id,
		type: "ACCESS"
	}, TOKEN_SECRET, {
		expiresIn: parseInt(TOKEN_ACCESS_TIME, 10),
		audience: "API"
	})

	const refresh_token = jwt.sign({
		id,
		type: "REFRESH"
	}, TOKEN_SECRET, {
		expiresIn: parseInt(TOKEN_REFRESH_TIME, 10),
		audience: "API"
	})

	return { access_token, refresh_token }
}
