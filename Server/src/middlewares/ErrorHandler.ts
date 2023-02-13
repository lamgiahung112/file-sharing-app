import { ErrorRequestHandler } from "express"
import ApiError from "../utils/ApiError"

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof ApiError) {
		res.status(err.statusCode).json(err)
	} else res.status(500).json(ApiError.InternalServerError("Unknown Error"))
}

export default errorHandler
