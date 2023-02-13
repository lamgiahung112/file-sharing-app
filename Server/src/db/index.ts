import mongoose from "mongoose"

const connectDB = () => {
	mongoose.set("strictQuery", true)
	mongoose.connect(process.env.MONGO_URI, () => {
		console.log("Connected to db")
	})
}

export default connectDB
