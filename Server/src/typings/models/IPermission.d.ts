import mongoose, { Document, HydratedDocument, Model, QueryWithHelpers } from "mongoose"

declare interface IPermission {
	_id: string
	matchers: Array<string>
	fileId: string
}
