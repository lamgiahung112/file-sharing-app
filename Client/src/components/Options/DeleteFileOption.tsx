import styles from "./Options.module.scss"
import _ from "../../utils/ComponentClass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRemove } from "@fortawesome/free-solid-svg-icons"
import { FileOptionProps } from "../../typings/menu_options"

const DeleteFileOption = ({ fileId }: FileOptionProps) => {
	const handleDeleteFile = () => {}
	return (
		<>
			<button className={_(styles, "option")} onClick={handleDeleteFile}>
				<FontAwesomeIcon icon={faRemove} className={_(styles, "icon")} />
				<span className={_(styles, "title")}>Delete File</span>
			</button>
		</>
	)
}

export default DeleteFileOption
