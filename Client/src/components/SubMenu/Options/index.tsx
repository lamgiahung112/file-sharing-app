import UploadFileOption from "./UploadFileOption"
import styles from "./Options.module.scss"

import _ from "../../../utils/ComponentClass"
import { MenuProps } from "./Options"

const Options = () => {
	return (
		<div className={_(styles, "wrapper")}>
			<UploadFileOption />
		</div>
	)
}

export default Options
