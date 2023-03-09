import Tippy from "@tippyjs/react/headless"
import { cloneElement, useCallback, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import { followCursor } from "tippy.js"
import "tippy.js/dist/tippy.css"
import Options from "../Options"

type SubMenuProps = {
	children: React.ReactElement
	type?: "REGULAR" | "FILE"
	fileId?: string
}

const NO_SUBMENU_PATHS = ["/", "/login", "/signup"]

const SubMenu = ({ children, type = "REGULAR", fileId }: SubMenuProps) => {
	const [visible, setVisible] = useState(false)
	const { pathname } = useLocation()
	const toggle = useCallback(() => setVisible(!visible), [visible])
	const close = useCallback(() => setVisible(false), [])

	const child = cloneElement(children, {
		onContextMenu: (e: Event) => {
			e.preventDefault()
			toggle()
			e.stopPropagation()
		},
		onClick: (e: Event) => {
			e.stopPropagation()
			close()
		},
	})

	if (NO_SUBMENU_PATHS.includes(pathname)) return <>{children}</>

	return (
		<Tippy
			allowHTML
			visible={visible}
			onClickOutside={close}
			render={() => <Options type={type} fileId={fileId} />}
			interactive
			followCursor="initial"
			placement="right-start"
			plugins={[followCursor]}
			appendTo={document.body}
		>
			{child}
		</Tippy>
	)
}

export default SubMenu
