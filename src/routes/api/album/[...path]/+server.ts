import prisma from "$lib/server/prisma";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (req) => {
    // Look for resource first
    // i.e. last element in the path is a file name
    const slugs = req.params.path.split("/");

    const path = slugs.slice(0, -1).join("/");
    const name = slugs.at(-1);

    try {
        const album = await prisma.album.findFirstOrThrow({
            where: { path, name },
            include: { resources: true }
        });

        const children = await prisma.album.findMany({
            where: { path }
        });

        return Response.json({ ...album, children });
    } catch (e) {
        error(404, `Album ${req.params.path} not found.`);
    }
};
