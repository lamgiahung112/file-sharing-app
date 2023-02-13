import { Handler } from "express"
import File from "../models/File"
import Folder from "../models/Folder"
import ApiError from "../utils/ApiError"

const uploadFiles: Handler = async (req, res, next) => {
	if (!req.files || !res.locals.user) {
		return next(ApiError.BadRequest("No files available"))
	}
	const email = res.locals.user
	const files = req.files as Express.Multer.File[]
	const { folderId } = req.body as { folderId?: string }

	let failedToSave = 0
	for await (const file of files) {
		const fileToSave = new File({
			name: file.originalname,
			owner: email,
			path: file.path,
			folderId,
			size: file.size,
		})
		await fileToSave.save().catch(() => failedToSave++)
	}
	res.send({
		failedToSave,
	})
}

const getFilesAndFoldersOfUser: Handler = async (req, res, next) => {
	const { folderId, user } = req.query as { folderId?: string; user: string }

	const files = await File.find({
		folderId,
		owner: user,
	})
		.select(["-path"])
		.exec()

	const folders = await Folder.find({
		rootId: folderId,
		owner: user,
	})

	res.json({ files, folders })
}

export { uploadFiles, getFilesAndFoldersOfUser }
