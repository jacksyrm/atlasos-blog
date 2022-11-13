import { PrismaClient } from "@prisma/client";
import { invalid, redirect } from "@sveltejs/kit";

export const load = async ({ params }: any) => {
	const prisma = new PrismaClient();
	const post = await prisma.posts.findUnique({
		where: {
			slug: params.slug
		},
		include: {
			category: true
		}
	});

	let category = await prisma.category.findMany();

	return {
		category,
		post
	};
};

export const actions = {
	default: async ({ request, params }: any) => {
		const prisma = new PrismaClient();

		let body = await request.formData();

		let published = false;
		if (body.get("published") === "on") published = true;

		let errorMessage = [];

		if (!body.get("title")) errorMessage.push("Title is required");
		if (!body.get("content")) errorMessage.push("Content is required");
		if (!body.get("category")) errorMessage.push("Category is required");
		if (!body.get("slug")) errorMessage.push("Slug is required");
		if (!body.get("thumbnail")) errorMessage.push("Thumbnail is required");

		if (errorMessage.length) {
			return invalid(400, { error: errorMessage });
		}

		// Create post on prisma database
		const post = await prisma.posts.update({
			where: {
				slug: params.slug
			},
			data: {
				title: body.get("title"),
				content: body.get("content"),
				published,
				categoryId: parseInt(body.get("category")),
				authorId: 1,
				slug: body.get("slug"),
				thumbnail: body.get("thumbnail")
			}
		});

		throw redirect(307, "/admin/articles");
	}
};
