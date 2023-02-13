import Tippy from "@tippyjs/react"
import { cloneElement, useState } from "react"
import { useLocation } from "react-router-dom"
import { followCursor } from "tippy.js"
import "tippy.js/dist/tippy.css"
import Options from "./Options"

type SubMenuProps = {
	children: React.ReactElement
}

const NO_SUBMENU_PATHS = ["/", "/login", "/signup"]

const SubMenu = ({ children }: SubMenuProps) => {
	const [visible, setVisible] = useState(false)
	const { pathname } = useLocation()

	const child = cloneElement(children, {
		onContextMenu: (e: Event) => {
			e.preventDefault()
			setVisible(!visible)
		},
	})

	if (NO_SUBMENU_PATHS.includes(pathname)) return <>{child}</>

	return (
		<Tippy
			visible={visible}
			onClickOutside={() => setVisible(false)}
			content={<Options />}
			followCursor="initial"
			placement="right-start"
			plugins={[followCursor]}
		>
			{child}
		</Tippy>
	)
}

export default SubMenu
