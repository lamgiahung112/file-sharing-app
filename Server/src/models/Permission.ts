import mongoose, { Document, QueryWithHelpers } from "mongoose"
import { IPermission } from "../typings/models/IPermission"
import ApiError from "../utils/ApiError"

const permissionSchema = new mongoose.Schema<IPermission>({
	matchers: { type: [String], required: true },
	fileId: { type: String, required: true, immutable: true, unique: true },
})

permissionSchema.pre("save", (next) => {
	try {
		const perm: IPermission = this!
		perm._id = perm.fileId
		next()
	} catch {
		next(ApiError.InternalServerError("Internal Server Error"))
	}
})

const Permission = mongoose.model<IPermission>("Permissions", permissionSchema)

export default Permission
