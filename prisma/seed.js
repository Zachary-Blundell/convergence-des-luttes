// -------------------------------------------------------------
// Prisma seed script (SQLite) — run with:
//   npx prisma db seed
// -------------------------------------------------------------
// Make sure you have this in package.json:
//   "prisma": { "seed": "node --experimental-modules prisma/seed.js" }
// Or, if using TS:
//   "prisma": { "seed": "ts-node prisma/seed.ts" }
// -------------------------------------------------------------

import { PrismaClient } from "@prisma/client";
import crypto from "node:crypto";

const prisma = new PrismaClient();

// A tiny helper to mimic hashing so you can log in during local dev
const fakeHash = (str) => crypto.createHash("sha256").update(str).digest("hex");

async function main() {
  console.log("🌱  Starting seed…\n");

  /* ----------------------------------------------------------
   *  Associations (and nested organizer + article + social links)
   * -------------------------------------------------------- */

  const association = await prisma.association.upsert({
    where: { slug: "climate-justice" },
    update: {},
    create: {
      name: "Climate Justice League",
      slug: "climate-justice",
      description: "Grass‑roots org fighting for climate justice.",
      contactEmail: "hello@climatejustice.test",
      phone: "555‑0101",
      website: "https://climatejustice.example",
      socialLinks: {
        create: [
          {
            platform: "TWITTER",
            url: "https://twitter.com/climatejustice",
          },
          {
            platform: "MASTODON",
            url: "https://mastodon.social/@climate",
          },
        ],
      },
      organizer: {
        create: {
          email: "lead@climatejustice.test",
          passwordHash: fakeHash("password123"),
          role: "ORGANIZER",
        },
      },
      articles: {
        create: [
          {
            slug: "welcome",
            title: "Welcome to the Climate Justice League",
            bodyMd: "# Welcome!\nThanks for joining our fight.",
            bodyHtml: "<h1>Welcome!</h1><p>Thanks for joining our fight.</p>",
          },
        ],
      },
    },
    include: { organizer: true, socialLinks: true, articles: true },
  });

  console.log("✅  Seeded association:", association.slug);

  /* ----------------------------------------------------------
   *  Another example association
   * -------------------------------------------------------- */

  const housing = await prisma.association.upsert({
    where: { slug: "housing-solidarity" },
    update: {},
    create: {
      name: "Housing Solidarity Network",
      slug: "housing-solidarity",
      description: "Tenant‑led network resisting evictions.",
      contactEmail: "contact@housing-solidarity.test",
      socialLinks: {
        create: [
          {
            platform: "FACEBOOK",
            url: "https://facebook.com/housingsolidarity",
          },
        ],
      },
      organizer: {
        create: {
          email: "admin@housing-solidarity.test",
          passwordHash: fakeHash("letmein"),
          role: "ADMIN",
        },
      },
    },
    include: { organizer: true },
  });

  console.log("✅  Seeded association:", housing.slug);

  /* ----------------------------------------------------------
   *  Extra: display counts
   * -------------------------------------------------------- */

  const counts = await Promise.all([
    prisma.association.count(),
    prisma.organizer.count(),
    prisma.article.count(),
  ]);
  console.log(
    `\n📊  Totals — Associations: ${counts[0]}, Organizers: ${counts[1]}, Articles: ${counts[2]}`,
  );

  console.log("\n🌱  Database seeded successfully!\n");
}

main()
  .catch((e) => {
    console.error("❌  Seed script failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
