import Tippy from "@tippyjs/react/headless"
import { cloneElement, useCallback, useState } from "react"
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

	const toggle = useCallback(() => setVisible(!visible), [visible])
	const close = useCallback(() => setVisible(false), [])

	const child = cloneElement(children, {
		onContextMenu: (e: Event) => {
			e.preventDefault()
			toggle()
		},
		onClick: (e: Event) => {
			e.stopPropagation()
			close()
		},
	})

	if (NO_SUBMENU_PATHS.includes(pathname)) return <>{child}</>

	return (
		<Tippy
			allowHTML
			visible={visible}
			onClickOutside={close}
			render={Options}
			interactive
			followCursor="initial"
			placement="right-start"
			plugins={[followCursor]}
		>
			{child}
		</Tippy>
	)
}

export default SubMenu
