import styles from "./Login.module.scss"
import _ from "../../utils/ComponentClass"
import HttpRequest from "../../utils/HttpRequest"
import Title from "./Title"
import Form from "./Form"
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom"
import { ObservableAuthStore } from "../../stores/ObservableAuthStore"
import { observer } from "mobx-react-lite"

type LoginProps = {
	auth: ObservableAuthStore
}

function Login({ auth }: LoginProps) {
	const tokenExists = localStorage.getItem("file-sharing-token")
	if (auth.isAuthenticated) return <Navigate to="/" />
	if (tokenExists)
		return <Navigate to={`/auth?token=${tokenExists}&type=VERIFY_LOGIN`} />

	const onSuccess = () => {
		toast.success("Please check your email to continue!", {
			position: "top-center",
		})
		setTimeout(() => {
			window.open("https://mail.google.com")
		}, 1500)
	}
	const onError = () => {
		toast.warn("Please check if your email is correct!", {
			position: "top-center",
		})
	}

	const onFormSubmit = (email: string) => {
		HttpRequest.post(
			"/user/login",
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

export default observer(Login)
