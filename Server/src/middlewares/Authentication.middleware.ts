import { Handler } from "express"
import jwt from "jsonwebtoken"
import ApiError from "../utils/ApiError"

const Authenticate: Handler = (req, res, next) => {
	try {
		const token = req.headers["authorization"]?.split(" ")[1]!

		jwt.verify(token, process.env.ACCESS_KEY)
		res.locals = {
			user: jwt.decode(token)?.sub,
		}
		next()
	} catch {
		next(ApiError.Unauthorized("Invalid Credentials"))
	}
}

export default Authenticate
