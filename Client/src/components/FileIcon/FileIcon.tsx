import {
	faFile,
	faFileCsv,
	faFileExcel,
	faFilePowerpoint,
	faFileText,
	faFileWord,
	faFileZipper,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import _ from "../../utils/ComponentClass"
import SubMenu from "../SubMenu"
import styles from "./FileIcon.module.scss"

type FileIconProps = {
	file: FileInfo
}

const FileIcon = React.forwardRef<null, FileIconProps>((field, ref) => {
	const { file } = field
	const icon = mapFileExtensionToIcon(file)
	return (
		<SubMenu type="FILE" key={file._id} fileId={file._id}>
			<div className={_(styles, "wrapper")}>
				<FontAwesomeIcon icon={icon} className={_(styles, "icon")} />
				<span className={_(styles, "name")}>{file.name}</span>
			</div>
		</SubMenu>
	)
})

const mapFileExtensionToIcon = (f: FileInfo) => {
	if (f.name.endsWith(".docx") || f.name.endsWith(".doc")) return faFileWord
	if (f.name.endsWith(".ppt") || f.name.endsWith(".pptx")) return faFilePowerpoint
	if (f.name.endsWith(".xlsx")) return faFileExcel
	if (f.name.endsWith(".rar") || f.name.endsWith(".zip")) return faFileZipper
	if (f.name.endsWith(".csv")) return faFileCsv
	if (f.name.endsWith(".txt")) return faFileText
	else return faFile
}

export default FileIcon
