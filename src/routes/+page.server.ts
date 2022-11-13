import { PrismaClient } from '@prisma/client';

export async function load() {
	const prisma = new PrismaClient();
	const posts = await prisma.posts.findMany({
		where: {
			published: true
		},
		include: {
			category: true
		}
	});

	return {
		posts
	};
}
