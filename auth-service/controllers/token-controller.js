import Account from "../models/account-model.js"
import generate from "../helpers/generate-token.js"
import redis from "../connections/redis.js"

export default async function tokenController(req, res) {
	try {
		const account = await Account.findOne({email: req.body.email})
		if (await account.comparePassword(req.body.password)) {

			const { access_token, refresh_token } = generate(account._id)
			const expires = Math.floor(Date.now() / 1000) + parseInt(process.env.TOKEN_ACCESS_TIME,10)
			await redis.connect()
			await redis.SADD(account._id.toString(), refresh_token)

			const response = { access_token, refresh_token, expires }
			/**Change below for extra scope options,
			 * such as for example
			 * name, age, socials, role, etc.
			 * NOTICE: You may need additional database calls to get this info.
			 */
			if (req.query.scope?.includes("email")) response.email = account.email
			if (req.query.scope?.includes("id")) response.id = account._id

			res.status(201).json(response)
		}	else {
			res.status(401).end()
		}
	} catch (error) {
		console.error(error)
		res.status(500).end()
	} finally {
		redis.disconnect()
	}
}
