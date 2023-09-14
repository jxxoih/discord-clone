import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
};

export const db = globalThis.prisma || new PrismaClient();

// globalThis = 새로고침시 db가 연결되어있으면 새로운 연결을 하지않음
if (process.env.NODE_ENV !== "production") globalThis.prisma = db
 
