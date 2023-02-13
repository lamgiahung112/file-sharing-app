import styles from "./SignUp.module.scss"
import _ from "../../utils/ComponentClass"
import HttpRequest from "../../utils/HttpRequest"
import Title from "./Title"
import Form from "./Form"
import { toast } from "react-toastify"
import { observer } from "mobx-react-lite"

function SignUp() {
	const onSuccess = () => {
		toast.success("Please check your email to continue!", {
			position: "top-center",
		})
	}
	const onError = () => {
		toast.warn("Please check if your email is valid!", {
			position: "top-center",
		})
	}

	const onFormSubmit = (email: string) => {
		HttpRequest.post(
			"/user/signup",
			{ email },
			{
				withCredentials: false,
			}
		)
			.then(onSuccess)
			.catch(onError)
	}

	return (
		<div className={_(styles, "wrapper")}>
			<Title />
			<Form submitHandler={onFormSubmit} />
		</div>
	)
}

export default observer(SignUp)
