import { Handler } from "express"
import Permission from "../models/Permission"
import ApiError from "../utils/ApiError"

const UpdatePermission: Handler = async (req, res, next) => {
	const { permissionMatchers, fileId } = req.body as {
		permissionMatchers: string[]
		fileId: string
	}

	let permRecord = await Permission.findOne({ fileId })
	if (!permRecord) return next(ApiError.BadRequest("This file has been corrupted"))
	permRecord.matchers = permissionMatchers
	await permRecord.save()
	res.send({ success: true })
}

export { UpdatePermission }
