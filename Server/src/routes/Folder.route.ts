import { Router } from "express"
import { createFolder } from "../controller/Folder.controller"
import Authenticate from "../middlewares/Authentication.middleware"

const router = Router()

router.post("/folders", Authenticate, createFolder)

export default router
