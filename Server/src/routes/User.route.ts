import { Router } from "express"
import { signup, verifyFromEmailLink, login, verify } from "../controller/User.controller"
import ValidateUser from "../middlewares/ValidateUser.middleware"

const router = Router()

router.get("/verifyFromEmailLink", verifyFromEmailLink)
router.get("/verify", verify)
router.post("/signup", signup)
router.post("/login", ValidateUser, login)

export default router
