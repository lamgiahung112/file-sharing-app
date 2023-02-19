import { observer } from "mobx-react"
import { Navigate, Outlet } from "react-router-dom"
import { ObservableAuthStore } from "../stores/ObservableAuthStore"

type ProtectedRouteProps = {
	auth: ObservableAuthStore
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ auth }) => {
	const token = localStorage.getItem("file-sharing-token")
	console.log({ authenticated: auth.isAuthenticated })
	if (!auth.isAuthenticated) {
		if (!token) return <Navigate to="/login" />
		return <Navigate to={`/auth?token=${token}&type=VERIFY_LOGIN`} />
	}

	return <Outlet />
}

export default observer(ProtectedRoute)
