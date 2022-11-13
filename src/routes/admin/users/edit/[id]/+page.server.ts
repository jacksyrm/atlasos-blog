import { PrismaClient } from "@prisma/client";
import { invalid, redirect } from "@sveltejs/kit";
import * as bcrypt from "bcrypt";

export const load = async ({ params }: any) => {
	const prisma = new PrismaClient();
	const user = await prisma.user.findUnique({
		where: {
			id: parseInt(params.id)
		}
	});

	return {
		user
	};
};

export const actions = {
	default: async ({ request, params }: any) => {
		const prisma = new PrismaClient();

		let body = await request.formData();

		let errorMessage = [];

		if (!body.get("email")) errorMessage.push("Email is required");
		if (!body.get("name")) errorMessage.push("Name is required");

		if (errorMessage.length) {
			return invalid(400, { error: errorMessage });
		}

		// Create post on prisma database
		const user = await prisma.user.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				email: body.get("email"),
				name: body.get("name")
			}
		});

		if (body.get("password")) {
			let password = await bcrypt.hash(body.get("password"), 10);

			await prisma.user.update({
				where: {
					id: parseInt(params.id)
				},
				data: {
					password
				}
			});
		}

		throw redirect(307, "/admin/users");
	}
};
