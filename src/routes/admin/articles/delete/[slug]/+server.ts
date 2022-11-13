import { PrismaClient } from "@prisma/client";
import { redirect } from "@sveltejs/kit";

export const GET = async ({ params }: any) => {
	const prisma = new PrismaClient();
	const post = await prisma.posts.delete({
		where: {
			slug: params.slug
		}
	});

	throw redirect(307, "/admin/articles");
};
