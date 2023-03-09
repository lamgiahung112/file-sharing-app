import NodeMailer from "nodemailer"

class Mailer {
	private static instance: Mailer
	private transporter: NodeMailer.Transporter

	private constructor() {
		this.transporter = NodeMailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.EMAIL_USERNAME,
				pass: process.env.EMAIL_PASS,
			},
		})
	}

	public static getInstance() {
		if (!this.instance) {
			this.instance = new Mailer()
		}
		return this.instance
	}

	public async sendVerificationEmail(
		toEmail: string,
		token: string,
		type: VerificationType
	) {
		await this.transporter.sendMail({
			from: "Trikohung Service <noreply@trikohung.vn>",
			to: toEmail,
			subject: type === "VERIFY_LOGIN" ? "Verify your login" : "Verify your email",
			html: `<a href="${`http://localhost:3000/user/verifyFromEmailLink?token=${token}&type=${type}`}">Click here to verify</a>`,
		})
	}
}

export default Mailer
