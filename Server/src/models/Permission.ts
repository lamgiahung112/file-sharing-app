import mongoose from "mongoose"

const permissionSchema = new mongoose.Schema<IPermission>({
	key: { type: String, required: true },
	permitRootId: { type: String, required: true },
})

const Permission = mongoose.model<IPermission>("Permissions", permissionSchema)

export default Permission
