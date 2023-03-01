import useMyFilesData from "../../hooks/data/useMyFilesData"
import FileIcon from "../FileIcon"

const MyFiles = () => {
	const { data } = useMyFilesData()
	console.log(data)
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexFlow: "row wrap",
				justifyContent: "space-evenly",
				height: "calc(100% - 40px)",
			}}
		>
			{data?.data?.payload?.files?.map((f) => {
				return <FileIcon file={f} key={f._id} />
			})}
		</div>
	)
}

export default MyFiles
