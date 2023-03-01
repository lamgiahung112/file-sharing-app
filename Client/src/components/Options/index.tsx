import UploadFileOption from "./UploadFileOption"
import styles from "./Options.module.scss"

import _ from "../../utils/ComponentClass"
import DownloadOption from "./DownloadFileOption"
import DeleteFileOption from "./DeleteFileOption"

type OptionsProps = {
	type: "REGULAR" | "FILE"
	fileId?: string
}

const Options = ({ type, fileId }: OptionsProps) => {
	return (
		<div className={_(styles, "wrapper")}>
			{type === "REGULAR" && (
				<>
					<UploadFileOption />
				</>
			)}
			{type === "FILE" && fileId && (
				<>
					<DownloadOption fileId={fileId} key={fileId} />
					<DeleteFileOption fileId={fileId} key={fileId} />
				</>
			)}
		</div>
	)
}

export default Options
