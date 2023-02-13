import { observer } from "mobx-react-lite"
import { ObservableAuthStore } from "../stores/ObservableAuthStore"

type DashboardProps = {
	auth: ObservableAuthStore
}

const Dashboard = ({ auth }: DashboardProps) => {
	return <div>Authenticated as {auth.email}</div>
}

export default observer(Dashboard)
