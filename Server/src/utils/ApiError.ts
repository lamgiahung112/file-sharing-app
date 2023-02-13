class ApiError extends Error {
	public msg: string
	public statusCode: number

	private constructor(msg: string, statusCode: number) {
		super(msg)
		this.msg = msg
		this.statusCode = statusCode
	}

	public static NotFound(msg: string) {
		return new ApiError(msg, 404)
	}

	public static Unauthorized(msg: string) {
		return new ApiError(msg, 401)
	}

	public static InternalServerError(msg: string) {
		return new ApiError(msg, 500)
	}

	public static BadRequest(msg: string) {
		return new ApiError(msg, 400)
	}
}

export default ApiError
