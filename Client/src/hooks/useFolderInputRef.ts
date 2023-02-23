import { useEffect, useRef } from "react"

const useFolderInputRef = () => {
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (ref.current !== null) {
			ref.current.setAttribute("directory", "")
			ref.current.setAttribute("webkitdirectory", "")
		}
	}, [ref])
	return ref
}

export default useFolderInputRef
