import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client"; // or "./generated/client"
import { DB_URL } from "../config/env.js";
// import path from "node:path";

// console.log("DB_URL: " + DB_URL);

const adapter = new PrismaBetterSQLite3({
  url: "file:" + DB_URL, // or from env var
});

// 🔒 keep exactly one instance in dev
const globalForPrisma = globalThis;
export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter, log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
