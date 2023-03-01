import HttpRequest from "../../utils/HttpRequest"
import { useQuery } from "react-query"

const verifyToken = (token: string, type: string) => {
	return HttpRequest.get(`/user/verify`, {
		params: {
			token,
			type,
		},
		withCredentials: false,
	})
}
const onError = () => {
	localStorage.removeItem("file-sharing-token")
}

function useValidateToken(token: string, type: string) {
	localStorage.setItem("file-sharing-token", token)
	return useQuery("AuthToken", () => verifyToken(token, type), {
		refetchOnWindowFocus: false,
		retry: 3,
		onError,
	})
}

export default useValidateToken
