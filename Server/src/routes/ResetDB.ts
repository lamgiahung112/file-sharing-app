import { Router } from "express"
import File from "../models/File"
import Folder from "../models/Folder"
import User from "../models/User"

const router = Router()

router.get("/reset", async (req, res) => {
	await File.deleteMany({})
	await Folder.deleteMany({})
	await User.deleteMany({})

	res.end()
})

export default router
