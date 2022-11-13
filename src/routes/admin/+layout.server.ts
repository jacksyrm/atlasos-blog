import * as cookieHandler from "$lib/components/ts/cookieHandler";
import { PrismaClient } from "@prisma/client";
import { redirect } from "@sveltejs/kit";

export async function load({ request, cookies }: any) {
	let userCookies = request.headers.get("cookie");
	let sessions = await cookieHandler.cookiesToArray(userCookies);
	let session_id;

	if (sessions) {
		sessions.forEach((session) => {
			if (session.name == "session_id") {
				session_id = session.value;
			}
		});
	}

	const prisma = new PrismaClient();
	let session;

	if (session_id) {
		session = await prisma.session.findUnique({
			where: {
				session: session_id
			}
		});

		if (!session) {
			cookies.set("session_id", "", {
				path: "/",
				httpOnly: true,
				sameSite: "strict",
				maxAge: -1,
				secure: true
			});

			throw redirect(307, "/login");
		}

		if (session.expires < new Date()) {
			cookies.set("session_id", "", {
				path: "/",
				httpOnly: true,
				sameSite: "strict",
				maxAge: -1,
				secure: true
			});

			throw redirect(307, "/login");
		}
	}

	if (!session_id) {
		throw redirect(307, "/login");
	}

	let user = await prisma.user.findUnique({
		where: {
			id: session?.userId
		}
	});

	return {
		username: user?.name
	};
}
