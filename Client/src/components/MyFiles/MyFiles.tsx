import useMyFilesData from "../../hooks/data/useMyFilesData"

function MyFiles() {
	const { data } = useMyFilesData()
	console.log(data)
	return <div>My files</div>
}

export default MyFiles
