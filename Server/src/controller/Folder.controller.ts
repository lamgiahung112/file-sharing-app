import { Handler } from "express"
import Folder from "../models/Folder.model"
import ApiError from "../utils/ApiError"

const createFolder: Handler = async (req, res, next) => {
	const { folderName, rootId } = req.body as { rootId?: string; folderName: string }
	if (!res.locals.user || !folderName) {
		return next(ApiError.BadRequest("Invalid Request!"))
	}

	const folderToSave = new Folder({
		name: folderName,
		owner: res.locals.user,
		rootId,
	})

	await folderToSave.save()
	res.send()
}

export { createFolder }
