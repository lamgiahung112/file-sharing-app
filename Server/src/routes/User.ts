import { Router } from "express"
import { signup, verifyFromEmailLink, login, verify } from "../controller/User"
import ValidateUser from "../middlewares/ValidateUser"

const router = Router()

router.get("/verifyFromEmailLink", verifyFromEmailLink)
router.get("/verify", verify)
router.post("/signup", signup)
router.post("/login", ValidateUser, login)

export default router
