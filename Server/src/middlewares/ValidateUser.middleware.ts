import { Handler } from "express"
import File from "../models/File.model"
import User from "../models/User.model"
import ApiError from "../utils/ApiError"

const ValidateUser: Handler = async (req, res, next) => {
	const email: string = res.locals.user || req.query.user || req.body.email

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (!email || !email.match(emailRegex))
		return next(ApiError.BadRequest("Invalid Request"))

	const foundUser = await User.findOne({
		email,
	})
	if (!foundUser) return next(ApiError.NotFound("User Not Found"))
	res.locals.user = email
	return next()
}

const ValidatePermission: Handler = async (req, res, next) => {
	const email = res.locals.user
	const { fileId } = req.body as {
		fileId: string
	}

	const f = await File.findById(fileId)
	if (!f) return next(ApiError.BadRequest("This file does not exist"))
	if (f.owner !== email)
		return next(ApiError.Unauthorized("You are not allowed to modify this file"))
	next()
}

export { ValidateUser, ValidatePermission }
