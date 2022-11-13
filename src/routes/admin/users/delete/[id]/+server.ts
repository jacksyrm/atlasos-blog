import { PrismaClient } from "@prisma/client";
import { redirect } from "@sveltejs/kit";

export const GET = async ({ params }: any) => {
	const prisma = new PrismaClient();
	const user = await prisma.user.delete({
		where: {
			id: parseInt(params.id)
		}
	});

	throw redirect(307, "/admin/articles");
};
