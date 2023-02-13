import { useQuery } from "react-query"
import HttpRequest from "../../utils/HttpRequest"

const upload = (files: File[]) => {
	return HttpRequest.post(
		"/service/files",
		{ files },
		{
			headers: {
				Authorization: localStorage.getItem("file-sharing-token"),
			},
		}
	)
}

const useUploadFiles = (files: File[]) => {
	return useQuery({
		queryKey: "upload-files",
		queryFn: () => upload(files),
		retry: 0,
	})
}

export default useUploadFiles
