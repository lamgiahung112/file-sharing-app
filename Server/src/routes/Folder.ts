import { Router } from "express"
import { createFolder } from "../controller/Folder"
import Authenticate from "../middlewares/Authentication"

const router = Router()

router.post("/folders", Authenticate, createFolder)

export default router
