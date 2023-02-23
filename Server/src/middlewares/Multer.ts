import multer from "multer"
import path from "path"
import { randomUUID } from "crypto"

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, "./uploads")
	},
	filename(req, file, cb) {
		cb(null, randomUUID() + path.extname(file.originalname))
	},
})

export default multer({ storage })
