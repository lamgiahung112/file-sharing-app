import { Router } from "express"
import Multer from "../middlewares/Multer.middleware"

import { getFilesAndFoldersOfUser, uploadFiles } from "../controller/File.controller"
import Authenticate from "../middlewares/Authentication.middleware"
import { ValidatePermission, ValidateUser } from "../middlewares/ValidateUser.middleware"
import { UpdatePermission } from "../controller/Permission.controller"

const router = Router()

router
	.route("/files")
	.post(Authenticate, ValidateUser, Multer.array("files"), uploadFiles)
	.get(Authenticate, ValidateUser, getFilesAndFoldersOfUser)

router
	.route("/files/permission")
	.post(Authenticate, ValidateUser, ValidatePermission, UpdatePermission)
export default router
