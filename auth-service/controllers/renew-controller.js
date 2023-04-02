import jwt from "jsonwebtoken"
import redis from "../connections/redis.js"
import generate from "../helpers/generate-token.js"

export default async function renewController(req, res) {
	if (!req.headers["x-refresh-token"])
		return res.status(401).end()

	try {
		const decoded = jwt.verify(req.headers["x-refresh-token"], process.env.TOKEN_SECRET)
		
		if (decoded.type !== "REFRESH")
			return res.status(403).end()

		redis.connect()
		
		if (!await redis.SISMEMBER(decoded.id, req.headers["x-refresh-token"])) {
			redis.quit()
			return res.status(401).end()
		}
		
		await redis.SREM(decoded.id, req.headers["x-refresh-token"])

		const { access_token, refresh_token } = generate(decoded.id)
		const expires = Math.floor(Date.now() / 1000) + parseInt(process.env.TOKEN_ACCESS_TIME,10)

		redis.SADD(decoded.id, refresh_token)
		redis.quit()
		res.status(201).json({ access_token, refresh_token, expires })

	} catch (error) {
		console.error("Token verification error", error)
		redis.quit()
		res.status(400).end()
	}
}
