import { Router } from "express"
import File from "../models/File.model"
import Folder from "../models/Folder.model"

const router = Router()

router.get("/reset", async (req, res) => {
	await File.deleteMany({})
	await Folder.deleteMany({})

	res.end()
})

export default router
