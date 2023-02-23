import { useQuery } from "react-query"
import HttpRequest from "../../utils/HttpRequest"

const upload = (files: File[]) => {
	const data = new FormData()
	files.forEach((f) => data.append("files", f))

	return HttpRequest.post("/service/files", data, {
		headers: {
			Authorization: "Bearer " + localStorage.getItem("file-sharing-token"),
			"Content-Type": "multipart/form-data",
		},
		maxBodyLength: Infinity,
	})
}

const useUploadFiles = (files: File[] | null) => {
	return useQuery({
		queryKey: "upload-files",
		queryFn: () => upload(files!),
		retry: 0,
		enabled: files !== null,
	})
}

export default useUploadFiles
