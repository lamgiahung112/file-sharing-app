interface IProcessEnv {
	MONGO_URI: string
	VERIFY_SIGNUP_KEY: string
	VERIFY_LOGIN_KEY: string
	ACCESS_KEY: string
	EMAIL_PASS: string
	EMAIL_USERNAME: string
	CLIENT_URL: string
	// REDIS_PORT: number
	APP_PORT: number
}

declare global {
	namespace NodeJS {
		interface ProcessEnv extends IProcessEnv {}
	}
}

export {}
