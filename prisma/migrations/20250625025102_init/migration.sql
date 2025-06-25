-- CreateTable
CREATE TABLE "Association" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "phone" TEXT,
    "website" TEXT,
    "logoUrl" TEXT,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "associationId" TEXT NOT NULL,
    CONSTRAINT "SocialLink_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "Association" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "bodyMd" TEXT NOT NULL,
    "bodyHtml" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "associationId" TEXT NOT NULL,
    CONSTRAINT "Article_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "Association" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Organiser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'ORGANISER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "associationId" TEXT NOT NULL,
    CONSTRAINT "Organiser_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "Association" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tokenHash" TEXT NOT NULL,
    "organiserId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "revoked" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "RefreshToken_organiserId_fkey" FOREIGN KEY ("organiserId") REFERENCES "Organiser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Association_name_key" ON "Association"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Association_slug_key" ON "Association"("slug");

-- CreateIndex
CREATE INDEX "SocialLink_associationId_idx" ON "SocialLink"("associationId");

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "Article"("slug");

-- CreateIndex
CREATE INDEX "Article_associationId_idx" ON "Article"("associationId");

-- CreateIndex
CREATE UNIQUE INDEX "Organiser_email_key" ON "Organiser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Organiser_associationId_key" ON "Organiser"("associationId");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_tokenHash_key" ON "RefreshToken"("tokenHash");

-- CreateIndex
CREATE INDEX "RefreshToken_organiserId_idx" ON "RefreshToken"("organiserId");
