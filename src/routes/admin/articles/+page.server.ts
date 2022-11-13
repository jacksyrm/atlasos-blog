import { PrismaClient } from "@prisma/client";

export async function load() {
	const prisma = new PrismaClient();
	const posts = await prisma.posts.findMany({
		include: {
			category: true,
			author: true
		}
	});

	return {
		posts
	};
}
