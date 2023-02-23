import styles from "./Options.module.scss"
import _ from "../../../utils/ComponentClass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileUpload } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import useUploadFiles from "../../../hooks/data/useUploadFiles"
import { toast } from "react-toastify"

const UploadFileOption = () => {
	const [filesToUpload, setFilesToUpload] = useState<File[] | null>(null)
	const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if (e.target.files == null) {
			setFilesToUpload(null)
			return
		}
		const fArray = []
		for (let i = 0; i < e.target.files.length; i++) {
			fArray.push(e.target.files[i])
		}
		setFilesToUpload(fArray)
	}

	const { data } = useUploadFiles(filesToUpload)
	useEffect(() => {
		if (data) {
			toast.success("Uploaded successfully!")
			setFilesToUpload(null)
		}
	}, [data])

	return (
		<>
			<input id="_file" hidden type="file" onChange={handleFileChange} />
			<label className={_(styles, "option")} htmlFor="_file">
				<FontAwesomeIcon icon={faFileUpload} className={_(styles, "icon")} />
				<span className={_(styles, "title")}>Upload files</span>
			</label>
		</>
	)
}

export default UploadFileOption
