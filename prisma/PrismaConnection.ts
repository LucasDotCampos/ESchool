import { PrismaClient } from "@prisma/client";

export const prismaConnection = {
  instance: new PrismaClient(),
};

export type IDBClient = typeof prismaConnection;

Object.freeze(prismaConnection);
