import mongoose from "mongoose"

const fileSchema = new mongoose.Schema<IFile>(
	{
		folderId: { immutable: true, type: String },
		name: { type: String, required: true },
		owner: { type: String, required: true },
		size: { type: Number, required: true },
		path: { type: String, unique: true },
	},
	{ timestamps: true }
)

const File = mongoose.model<IFile>("Files", fileSchema)

export default File
