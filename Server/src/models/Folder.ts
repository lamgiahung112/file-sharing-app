import mongoose from "mongoose"

const folderSchema = new mongoose.Schema<IFolder>(
	{
		owner: { type: String, required: true },
		name: { type: String, required: true },
		rootId: { type: String },
	},
	{ timestamps: true }
)

const Folder = mongoose.model<IFolder>("Folders", folderSchema)

export default Folder
