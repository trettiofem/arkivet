import prisma from "$lib/server/prisma";
import supabase from "$lib/server/supabase";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async () => {
    return new Response("skibidi");
};
