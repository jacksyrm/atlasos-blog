import { cookiesToArray } from "$lib/components/ts/cookieHandler";
import { PrismaClient } from "@prisma/client";

export async function load({ request }: any) {
	const prisma = new PrismaClient();
	const users = await prisma.user.findMany({});

	let userCookies = request.headers.get("cookie");
	let sessions = await cookiesToArray(userCookies);
	let session_id;

	if (sessions) {
		sessions.forEach((session) => {
			if (session.name == "session_id") {
				session_id = session.value;
			}
		});
	}

	let session = await prisma.session.findUnique({
		where: {
			session: session_id
		}
	});

	let user = await prisma.user.findUnique({
		where: {
			id: session?.userId
		}
	});

	if (!user?.isSuperUser) {
		return {
			permission: false
		};
	}

	return {
		permission: true,
		users
	};
}
