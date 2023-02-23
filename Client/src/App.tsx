import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import Auth from "./routing/Auth"
import ProtectedRoute from "./routing/ProtectedRoute"
import authStore from "./stores/ObservableAuthStore"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SignUp from "./components/SignUp"
import MyFiles from "./components/MyFiles"
import Header from "./components/Header"
import SubMenu from "./components/SubMenu"

function App() {
	return (
		<div className="App" id="app">
			<ToastContainer />
			<Router>
				<Header />

				<SubMenu>
					<main>
						<Routes>
							<Route element={<Auth auth={authStore} />} path="/auth" />
							<Route element={<Login auth={authStore} />} path="/login" />
							<Route element={<SignUp />} path="/signup" />
						</Routes>
						<Routes>
							<Route element={<ProtectedRoute auth={authStore} />}>
								<Route
									element={<Dashboard auth={authStore} />}
									path="/"
								/>
							</Route>
							<Route element={<ProtectedRoute auth={authStore} />}>
								<Route
									element={<MyFiles auth={authStore} />}
									path="/my-files"
								/>
							</Route>
						</Routes>
					</main>
				</SubMenu>
			</Router>
		</div>
	)
}

export default App
