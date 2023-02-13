import express from "express"
import cors from "cors"
import initRoute from "./routes"
import connectDB from "./db"
import dotenv from "dotenv"
import errorHandler from "./middlewares/ErrorHandler"
import RedisClient from "./utils/RedisClient"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:5173",
	})
)

initRoute(app)

app.use(errorHandler)
app.listen(process.env.APP_PORT, () => {
	RedisClient.getInstance()
		.connect()
		.then(() => console.log("Connected to redis"))
	connectDB()
	console.log("Listening on port 3000")
})
