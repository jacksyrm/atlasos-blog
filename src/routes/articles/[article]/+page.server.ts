import { PrismaClient } from '@prisma/client';
import { error } from '@sveltejs/kit';

export async function load({ params }: any) {
	const prisma = new PrismaClient();
	const post = await prisma.posts.findUnique({
		where: {
			slug: params.article
		},
		include: {
			category: true
		}
	});

	if (!post) throw error(404, 'Post not found');

	return {
		post
	};
}
