import prisma from "$lib/server/prisma";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params }) => {
    // Look for resource first
    // i.e. last element in the path is a file name
    const slugs = params.path.split("/");

    const path = slugs.slice(0, -1).join("/");
    const name = slugs.at(-1);

    try {
        const resource = await prisma.resource.findFirstOrThrow({
            where: { path, name },
            include: { comments: true, tags: true, user: true }
        });

        return Response.json(resource);
    } catch (e) {
        error(404, `Resource ${params.path} not found.`);
    }
};
