import { PrismaBetterSQLite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "./generated/client";
// import { DB_URL } from "../config/env.js";
//
// const adapter = new PrismaBetterSQLite3({
//   url: DB_URL,
// });

const adapter = new PrismaBetterSQLite3({
  url: "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

export { prisma };
