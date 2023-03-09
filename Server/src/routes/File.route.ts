import { Router } from "express"
import Multer from "../middlewares/Multer.middleware"

import { getFilesAndFoldersOfUser, uploadFiles } from "../controller/File.controller"
import Authenticate from "../middlewares/Authentication.middleware"
import ValidateUser from "../middlewares/ValidateUser.middleware"

const router = Router()

router
	.route("/files")
	.post(Authenticate, ValidateUser, Multer.array("files"), uploadFiles)
	.get(Authenticate, ValidateUser, getFilesAndFoldersOfUser)
export default router
