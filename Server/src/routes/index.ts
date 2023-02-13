import UserRouter from "./User"
import FileRoute from "./File"
import FolderRoute from "./Folder"
import reset from "./ResetDB"
import { Application } from "express"

const initRoute = (app: Application) => {
	app.use("/user", UserRouter)
	app.use("/service", FileRoute, FolderRoute)
	app.use("/", reset)
}

export default initRoute
