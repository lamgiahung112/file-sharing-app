import styles from "./SignUp.module.scss"
import _ from "../../utils/ComponentClass"

function Title() {
	return <div className={_(styles, "title")}>Sign Up</div>
}

export default Title
