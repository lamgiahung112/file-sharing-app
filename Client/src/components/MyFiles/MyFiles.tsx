import useMyFilesData from "../../hooks/data/useMyFilesData"

function MyFiles() {
	const { data } = useMyFilesData()
	console.log(data)
	return (
		<div>
			{data?.data?.payload?.files?.map((f) => {
				return <div>{f.name}</div>
			})}
		</div>
	)
}

export default MyFiles
