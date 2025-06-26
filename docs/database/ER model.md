# ER Diagrams

### MVP

```mermaid
---
config:
  theme: neo
---
erDiagram
  ASSOCIATION ||--o{ SOCIAL_LINK : "has"
  ASSOCIATION ||--|| ORGANISER : "is managed by"
  ORGANISER ||--o{ REFRESH_TOKEN : "has"
  ASSOCIATION {
    UUID id PK
    STRING name
    STRING slug
    TEXT description
    STRING contactEmail
    STRING phone
    STRING website
    STRING logoUrl
    DATETIME updatedAt

  }
  SOCIAL_LINK {
    INT id PK
    ENUM platform
    STRING url
    UUID associationId FK
  }
  ORGANISER {
    UUID id PK
    STRING email
    STRING passwordHash
    ENUM role
    DATETIME createdAt
    UUID associationId FK
  }
  REFRESH_TOKEN {
    INT id PK
    STRING tokenHash
    UUID organiserId FK
    DATETIME expiresAt
    BOOLEAN revoked
  }
```

### Version with articles

```mermaid
erDiagram
  ASSOCIATION ||--o{ SOCIAL_LINK : "has"
  ASSOCIATION ||--|| ORGANISER : "is managed by"
  ORGANISER ||--o{ REFRESH_TOKEN : "has"
  ASSOCIATION ||--o{ ARTICLE      : "has"

  ASSOCIATION {
    UUID id PK
    STRING name
    STRING slug
    TEXT description
    STRING contactEmail
    STRING phone
    STRING website
    STRING logoUrl
    DATETIME updatedAt

  }
  SOCIAL_LINK {
    INT id PK
    ENUM platform
    STRING url
    UUID associationId FK
  }
  ARTICLE {
    INT id PK
    STRING slug
    STRING title
    TEXT bodyMd
    TEXT bodyHtml
    DATETIME createdAt
    DATETIME updatedAt
    UUID associationId FK
  }
  ORGANISER {
    UUID id PK
    STRING email
    STRING passwordHash
    ENUM role
    DATETIME createdAt
    UUID associationId FK
  }
  REFRESH_TOKEN {
    INT id PK
    STRING tokenHash
    UUID organiserId FK
    DATETIME expiresAt
    BOOLEAN revoked
  }
```

---

## Prisma Database Schema for Convergence des Luttes

```prisma
// =======================================================
//  Prisma schema  •  SQLite
// =======================================================

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

// -------------------------
//  ENUMS
// -------------------------

enum SocialPlatform {
  WEBSITE
  TWITTER
  FACEBOOK
  INSTAGRAM
  MASTODON
  OTHER
}

enum GlobalRole {
  ORGANISER
  ADMIN
}

// -------------------------
//  MODELS
// -------------------------

model Association {
  id            String       @id @default(uuid())
  name          String       @unique
  slug          String       @unique
  description   String
  contactEmail  String
  phone         String?
  website       String?
  logoUrl       String?
  updatedAt     DateTime     @updatedAt

  // relations
  socialLinks   SocialLink[]       // 1 ──╮
  articles      Article[]          // 1 ──╯
  organiser     Organiser?         // 1 ⇄ 1 (back-reference)
}

model SocialLink {
  id             Int            @id @default(autoincrement())
  platform       SocialPlatform
  url            String
  associationId  String
  association    Association     @relation(fields: [associationId], references: [id])

  @@index([associationId])
}

model Article {
  id             Int        @id @default(autoincrement())
  slug           String     @unique
  title          String
  bodyMd         String
  bodyHtml       String?
  createdAt      DateTime   @default(now())
  updatedAt      DateTime   @updatedAt
  associationId  String
  association    Association @relation(fields: [associationId], references: [id])

  @@index([associationId])
}

model Organiser {
  id              String        @id @default(uuid())
  email           String        @unique
  passwordHash    String
  role            GlobalRole    @default(ORGANISER)
  createdAt       DateTime      @default(now())
  associationId   String        @unique            // enforces 1-to-1
  association     Association   @relation(fields: [associationId], references: [id])
  tokens          RefreshToken[]
}

model RefreshToken {
  id           Int       @id @default(autoincrement())
  tokenHash    String    @unique
  organiserId  String
  organiser    Organiser @relation(fields: [organiserId], references: [id])
  expiresAt    DateTime
  revoked      Boolean   @default(false)

  @@index([organiserId])
}
```
