import styles from "./Login.module.scss"
import _ from "../../utils/ComponentClass"

function Title() {
	return <div className={_(styles, "title")}>Login</div>
}

export default Title
