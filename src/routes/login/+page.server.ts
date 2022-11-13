import { PrismaClient } from "@prisma/client";
import { invalid, redirect } from "@sveltejs/kit";
import * as bcrypt from "bcrypt";
import * as crypto from "crypto";
import * as cookieHandler from "$lib/components/ts/cookieHandler";

export async function load({ request }: any) {
	let cookies = request.headers.get("cookie");
	let sessions = await cookieHandler.cookiesToArray(cookies);
	let session_id;

	if (sessions) {
		sessions.forEach((session) => {
			if (session.name == "session_id") {
				session_id = session.value;
			}
		});
	}

	if (session_id) {
		throw redirect(307, "/admin");
	}

	return;
}

export const actions = {
	default: async ({ request, cookies }: any) => {
		const prisma = new PrismaClient();

		let body = await request.formData();

		let errorMessage = [];

		if (!body.get("email")) errorMessage.push("Email is required");
		if (!body.get("password")) errorMessage.push("Password is required");

		if (errorMessage.length) {
			return invalid(400, { error: errorMessage });
		}

		const user = await prisma.user.findUnique({
			where: {
				email: body.get("email")
			}
		});

		if (!user) {
			return invalid(400, { error: ["Incorrect details"] });
		}

		let password = await bcrypt.compare(body.get("password"), user.password);

		if (!password) {
			return invalid(400, { error: ["Incorrect details"] });
		}

		const sessionToken = crypto.randomBytes(20).toString("hex");

		await prisma.session.create({
			data: {
				userId: user.id,
				session: sessionToken,
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
			}
		});

		cookies.set("session_id", sessionToken, {
			path: "/",
			httpOnly: true,
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7, // one week
			secure: true
		});

		throw redirect(307, "/admin/users");
	}
};
