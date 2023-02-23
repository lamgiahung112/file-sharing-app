import { AxiosResponse } from "axios"
import { useQuery } from "react-query"
import HttpRequest from "../../utils/HttpRequest"

const fetchMyFiles = () => {
	return HttpRequest.get("/service/files", {
		headers: {
			Authorization: "Bearer " + localStorage.getItem("file-sharing-token"),
		},
	})
}
const useMyFilesData = () => {
	return useQuery<AxiosResponse<FileNFolderInfo>>({
		queryKey: `myFiles`,
		queryFn: fetchMyFiles,
		refetchOnWindowFocus: false,
		retry: 3,
	})
}

export default useMyFilesData
