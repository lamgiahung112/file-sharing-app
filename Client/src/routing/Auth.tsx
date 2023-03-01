import { Navigate } from "react-router-dom"
import useQueryParams from "../hooks/useQueryParams"
import useValidateToken from "../hooks/data/useValidateToken"
import { ObservableAuthStore } from "../stores/ObservableAuthStore"
import { observer } from "mobx-react-lite"

type AuthProps = {
	auth: ObservableAuthStore
}

function Auth({ auth }: AuthProps) {
	const params = useQueryParams()

	const [token, type] = [params.get("token"), params.get("type")]

	if (!token) return <Navigate to="/login" />
	const { data, isError, isFetching } = useValidateToken(token, type || "VERIFY_LOGIN")
	if (auth.isAuthenticated) return <Navigate to="/" />
	if (data) {
		auth.load(token, data.data as AuthData)
	}

	if (isError) {
		localStorage.removeItem("file-sharing-token")
		return <Navigate to="/login" />
	}
	if (isFetching) return <h1>Please wait while we're validating your credentials!</h1>
	return <Navigate to="/" />
}

export default observer(Auth)
