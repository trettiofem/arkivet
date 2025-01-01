import prisma from "$lib/server/prisma";
import supabase from "$lib/server/supabase";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    console.log(JSON.stringify(data));

    // Check the request parameters
    if (!data.path) {
        return error(400, "You must provide a valid path.");
    }

    // TODO: check that album with that path exists

    if (!data.type) {
        return error(400, "You must provide a resource type.");
    }

    if (!data.attribute) {
        return error(400, "You must provide an attribute.");
    }    

    if (!data.file || !(data.file as File).name) {
        return error(400, "You must provide a file to upload.");
    }

    const file = data.file as File;
    const ext = file.name.toLowerCase().split(".").filter(Boolean).at(-1);

    // Generate thumbnail
    switch (ext) {
        case "jpg":
        case "jpeg":
        case "png":
        case "webp":
        case "gif":
        case "avif":
        case "tif":
        case "tiff":
        case "svg":
            break;
        case "pdf":
            break;
    }

    return new Response("skibidi");
};
