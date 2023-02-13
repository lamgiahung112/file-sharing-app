import { Router } from "express"
import Multer from "../middlewares/Multer"

import { getFilesAndFoldersOfUser, uploadFiles } from "../controller/File"
import Authenticate from "../middlewares/Authentication"
import ValidateUser from "../middlewares/ValidateUser"

const router = Router()

router
	.route("/files")
	.post(Authenticate, ValidateUser, Multer.array("files"), uploadFiles)
	.get(Authenticate, ValidateUser, getFilesAndFoldersOfUser)
export default router
