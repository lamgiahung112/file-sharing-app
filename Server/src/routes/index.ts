import UserRouter from "./User.route"
import FileRoute from "./File.route"
import FolderRoute from "./Folder.route"
import reset from "./ResetDB.route"
import { Application } from "express"

const initRoute = (app: Application) => {
	app.use("/user", UserRouter)
	app.use("/service", FileRoute, FolderRoute)
	app.use("/", reset)
}

export default initRoute
