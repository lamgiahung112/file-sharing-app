import mongoose from "mongoose"

const userSchema = new mongoose.Schema<IUser>({
	email: { type: String, unique: true, required: true },
})

const User = mongoose.model<IUser>("Users", userSchema)

export default User
