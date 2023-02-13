import { useLocation } from "react-router-dom"
import React from "react"

function useQueryParams() {
	const { search } = useLocation()

	return React.useMemo(() => new URLSearchParams(search), [search])
}

export default useQueryParams
