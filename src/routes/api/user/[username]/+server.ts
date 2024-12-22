import prisma from "$lib/server/prisma";
import type { RequestHandler } from "./$types";
import { error } from "@sveltejs/kit";

// TODO: change to userId?
export const GET: RequestHandler = async (req) => {
    const username = req.params.username;

    try {
        const user = await prisma.user.findFirstOrThrow({
            where: { username }
        });

        return Response.json(user);
    } catch (e) {
        error(404, `User @${username} not found.`);
    }
};
