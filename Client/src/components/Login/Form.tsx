import { FormEvent, useRef } from "react"
import { Link } from "react-router-dom"
import _ from "../../utils/ComponentClass"
import styles from "./Login.module.scss"

type LoginFormProps = {
	submitHandler: (email: string) => void
}

function Form({ submitHandler }: LoginFormProps) {
	const inputRef = useRef<HTMLInputElement>(null)

	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
		submitHandler(inputRef.current!.value)
	}

	return (
		<form className={_(styles, "loginform")} onSubmit={onSubmit}>
			<div className={_(styles, "form-group")}>
				<label htmlFor="logininput">Email</label>
				<input id="logininput" type="email" ref={inputRef} required />
			</div>
			<div className={_(styles, "form-group")}>
				<button type="submit">Submit</button>
			</div>
			<div className={_(styles, "form-group")}>
				<span>
					Not signed up yet? <Link to="/signup">Click here!</Link>
				</span>
			</div>
		</form>
	)
}

export default Form
