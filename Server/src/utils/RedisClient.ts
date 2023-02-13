import * as redis from "redis"

class RedisClient {
	private static client: redis.RedisClientType
	private constructor() {}

	public static getInstance() {
		if (!this.client) {
			this.client = redis.createClient({})
			this.client.on("error", (err) => console.log("Redis error", err))
		}
		return this.client
	}
}

export default RedisClient
