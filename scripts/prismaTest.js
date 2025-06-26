import { prisma } from "../prisma/prisma.js"; // or "./generated/client.js"

async function main() {
  // 1️⃣  Read: COUNT existing associations
  const count = await prisma.association.count();
  console.log(`📊  Associations in DB: ${count}`);

  // 2️⃣  Write: UPSERT a throw-away record (idempotent)
  const demo = await prisma.association.upsert({
    where: { slug: "orm-smoke-test" },
    update: {}, // nothing to change if it’s already there
    create: {
      name: "ORM Smoke Test",
      slug: "orm-smoke-test",
      description: "If you can read this, Prisma ➜ SQLite works ✔️",
      contactEmail: "noreply@example.com",
      organizer: {
        create: {
          email: "tester@example.com",
          passwordHash: "not_really_hashed",
          role: "ORGANIZER",
        },
      },
    },
    include: { organizer: true },
  });

  console.log("🆕  Upserted / fetched record:\n", demo);

  // 3️⃣  Extra sanity: fetch SQLite version
  const [{ version }] =
    await prisma.$queryRaw`SELECT sqlite_version() AS version`;
  console.log("🖥️  SQLite engine version:", version);
}

main()
  .catch((e) => {
    console.error("❌  Smoke test failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
