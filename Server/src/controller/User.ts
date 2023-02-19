import { Handler } from "express"
import jwt from "jsonwebtoken"
import User from "../models/User"
import ApiError from "../utils/ApiError"
import Mailer from "../utils/Mailer"
import RedisClient from "../utils/RedisClient"

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type VerificationBody = {
	token: string
	type: VerificationType
}

const signup: Handler = async (req, res, next) => {
	const body: IUser = req.body
	if (!body.email) return res.status(400).send({})

	if (!body.email.toLowerCase().match(emailRegex)) return res.status(400).send({})

	const token = jwt.sign({}, process.env.VERIFY_SIGNUP_KEY, {
		expiresIn: "1h",
		subject: body.email,
	})

	const newUser = new User({
		email: body.email,
	})
	await newUser.save()

	res.send("ok")
	// send email
	await Mailer.getInstance()
		.sendVerificationEmail(body.email, token, "VERIFY_SIGNUP")
		.catch((e) => {
			console.log(e)
		})
}

const verifyFromEmailLink: Handler = async (req, res, next) => {
	const { token, type } = req.query as VerificationBody
	try {
		const key =
			type === "VERIFY_LOGIN"
				? process.env.VERIFY_LOGIN_KEY
				: process.env.VERIFY_SIGNUP_KEY
		jwt.verify(token, key)
		const { sub } = jwt.decode(token) as { sub: string }

		const accessToken = jwt.sign({}, process.env.ACCESS_KEY, {
			subject: sub,
			expiresIn: "7d",
		})

		const nextLink = `${process.env.CLIENT_URL}/auth?token=${accessToken}&type=VERIFY_LOGIN`
		await RedisClient.getInstance().setEx(sub, 7 * 24 * 3600, token)
		res.redirect(nextLink)
	} catch (e) {
		const nextLink = `${process.env.CLIENT_URL}/login`
		res.redirect(nextLink)
	}
}

const verify: Handler = async (req, res, next) => {
	const { token } = req.query as VerificationBody
	try {
		const { sub } = jwt.decode(token) as { sub: string }

		const tokenExists = await RedisClient.getInstance().get(sub)

		if (!tokenExists) jwt.verify(token, process.env.ACCESS_KEY)
		res.send(jwt.decode(token))
	} catch {
		next(ApiError.BadRequest("Invalid Credentials"))
	}
}

const login: Handler = async (req, res, next) => {
	const body: IUser = req.body
	if (!body.email) return res.status(400).send({})
	if (!body.email.toLowerCase().match(emailRegex)) return res.status(400).send({})

	const token = jwt.sign({}, process.env.VERIFY_LOGIN_KEY, {
		expiresIn: "1h",
		subject: body.email,
	})

	res.send("ok")
	// send email
	await Mailer.getInstance()
		.sendVerificationEmail(body.email, token, "VERIFY_LOGIN")
		.catch((e) => {
			console.log(e)
		})
}

export { signup, verifyFromEmailLink, login, verify }
