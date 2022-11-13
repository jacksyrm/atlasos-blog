import { PrismaClient } from "@prisma/client";
import { invalid, redirect } from "@sveltejs/kit";
import * as bcrypt from "bcrypt";

export const actions = {
	default: async ({ request }: any) => {
		const prisma = new PrismaClient();

		let body = await request.formData();

		let errorMessage = [];

		if (!body.get("email")) errorMessage.push("Email is required");
		if (!body.get("name")) errorMessage.push("Name is required");
		if (!body.get("password")) errorMessage.push("Password is required");

		if (errorMessage.length) {
			return invalid(400, { error: errorMessage });
		}

		let password = await bcrypt.hash(body.get("password"), 10);

		// Create post on prisma database
		const user = await prisma.user.create({
			data: {
				email: body.get("email"),
				name: body.get("name"),
				password
			}
		});

		throw redirect(307, "/admin/users");
	}
};
