import { Link, useLocation } from "react-router-dom"

function Header() {
	const { pathname } = useLocation()

	const renderBtn = () => {
		if (pathname === "/") return <Link to="/my-files">My files</Link>
		else return <Link to="/">Home</Link>
	}

	return (
		<div id="header">
			<div className="header-left">TRIKOHUNG</div>
			<div className="header-right">{renderBtn()}</div>
		</div>
	)
}

export default Header
