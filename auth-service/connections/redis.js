import { createClient } from "redis"

const redis = createClient({
	url: process.env.REDIS_URI
})

redis.on("error", err => console.error("Redis Client Error", err))

export default redis
