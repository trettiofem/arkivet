import type { PageServerLoad } from "./$types";
import { PrismaClient } from "@prisma/client";

export const load: PageServerLoad = async () => {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();

    return { users };
};