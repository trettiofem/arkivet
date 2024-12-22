import { PrismaClient } from "@prisma/client";

const getPrismaClient = () => new PrismaClient();

declare const globalThis: { prisma: ReturnType<typeof getPrismaClient> } & typeof global;
const prisma = globalThis.prisma ?? getPrismaClient();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
