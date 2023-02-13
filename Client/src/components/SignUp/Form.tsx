import { FormEvent, useRef } from "react"
import { Link } from "react-router-dom"
import _ from "../../utils/ComponentClass"
import styles from "./SignUp.module.scss"

type SignUpFormProps = {
	submitHandler: (email: string) => void
}

function Form({ submitHandler }: SignUpFormProps) {
	const inputRef = useRef<HTMLInputElement>(null)

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		submitHandler(inputRef.current!.value)
	}

	return (
		<form className={_(styles, "signupform")} onSubmit={onSubmit}>
			<div className={_(styles, "form-group")}>
				<label htmlFor="signupinput">Email</label>
				<input id="signupinput" type="email" ref={inputRef} required />
			</div>
			<div className={_(styles, "form-group")}>
				<button type="submit">Submit</button>
			</div>
			<div className={_(styles, "form-group")}>
				<span>
					Already signed up? <Link to="/login">Login now!</Link>
				</span>
			</div>
		</form>
	)
}

export default Form
