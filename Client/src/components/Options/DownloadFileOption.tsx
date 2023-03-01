import styles from "./Options.module.scss"
import _ from "../../utils/ComponentClass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { FileOptionProps } from "../../typings/menu_options"

const DownloadOption = ({ fileId }: FileOptionProps) => {
	return (
		<>
			<button className={_(styles, "option")}>
				<FontAwesomeIcon icon={faFileUpload} className={_(styles, "icon")} />
				<span className={_(styles, "title")}>Download</span>
			</button>
		</>
	)
}

export default DownloadOption
