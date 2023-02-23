declare type ServerResponse<T> = {
	payload: T
	statusCode: number
}

type FileInfo = {
	_id: string
	name: string
	owner: string
	size: number
	createdAt: string
	updatedAt: string
}

type FolderInfo = {}

declare type FileNFolderInfo = ServerResponse<{
	files: FileInfo[]
	folders: FolderInfo[]
}>
