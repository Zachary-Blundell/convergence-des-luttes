// -------------------------------------------------------------
// Prisma seed script (SQLite) — run with:
//   npx prisma db seed
// -------------------------------------------------------------
// package.json needs (JS):
//   "prisma": { "seed": "node --experimental-modules prisma/seed.js" }
// -------------------------------------------------------------

import { PrismaClient } from "@prisma/client";
import crypto from "node:crypto";

const prisma = new PrismaClient();

// Tiny helper to mimic hashing so you can log in during local dev
const fakeHash = (str) => crypto.createHash("sha256").update(str).digest("hex");

async function main() {
  console.log("🌱  Starting seed…\n");

  /* ----------------------------------------------------------
   *  Associations (with nested organiser + article + links)
   * -------------------------------------------------------- */

  const association = await prisma.association.upsert({
    where: { slug: "climate-justice" },
    update: {},
    create: {
      name: "Climate Justice League",
      slug: "climate-justice",
      description: "Grass-roots org fighting for climate justice.",
      contactEmail: "hello@climatejustice.test",
      phone: "555-0101",
      website: "https://climatejustice.example",
      socialLinks: {
        create: [
          { platform: "TWITTER", url: "https://twitter.com/climatejustice" },
          { platform: "MASTODON", url: "https://mastodon.social/@climate" },
        ],
      },
      organisers: {
        create: {
          email: "lead@climatejustice.test",
          passwordHash: fakeHash("password123"),
          role: "ORGANISER",
        },
      },
      articles: {
        create: [
          {
            slug: "welcome",
            title: "Welcome to the Climate Justice League",
            bodyJson: {
              type: "doc",
              content: [
                {
                  type: "heading",
                  attrs: { level: 1 },
                  content: [{ type: "text", text: "Welcome!" }],
                },
                {
                  type: "paragraph",
                  content: [
                    { type: "text", text: "Thanks for joining our fight." },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    include: { organisers: true, socialLinks: true, articles: true },
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
      description: "Tenant-led network resisting evictions.",
      contactEmail: "contact@housing-solidarity.test",
      socialLinks: {
        create: [
          {
            platform: "FACEBOOK",
            url: "https://facebook.com/housingsolidarity",
          },
        ],
      },
      organisers: {
        create: {
          email: "admin@housing-solidarity.test",
          passwordHash: fakeHash("letmein"),
          role: "ADMIN",
        },
      },
    },
    include: { organisers: true },
  });

  console.log("✅  Seeded association:", housing.slug);

  /* ----------------------------------------------------------
   *  Extra: display counts
   * -------------------------------------------------------- */

  const [assocs, organisers, articles] = await Promise.all([
    prisma.association.count(),
    prisma.organiser.count(), // ← singular model name
    prisma.article.count(),
  ]);

  console.log(
    `\n📊  Totals — Associations: ${assocs}, Organisers: ${organisers}, Articles: ${articles}`,
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
