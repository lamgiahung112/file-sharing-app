import styles from "./Options.module.scss"
import _ from "../../../utils/ComponentClass"

const UploadFileOption = () => {
	return <button className={_(styles, "option")}>Upload</button>
}

export default UploadFileOption
