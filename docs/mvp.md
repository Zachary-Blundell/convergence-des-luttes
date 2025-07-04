# Convergence des Luttes – MVP Specification

## 1 · Purpose & Vision

Build a lightweight web platform that federates the different clubs and organisations forming **Convergence des Luttes**, so that the public can discover them and organisers can collaboratively publish up‑to‑date information and articles.
This is for a non‑profit community project, so the focus is on simplicity, and low costs.

## 2 · User Roles

| Role          | Capabilities                                                   |
| ------------- | -------------------------------------------------------------- |
| **Visitor**   | Browse the directory, read association pages and articles.     |
| **Organiser** | Authenticate, edit their own association profile and articles. |
| **Admin**     | Full CRUD on all associations, organisers and articles.        |

## 3 · Functional Requirements

### 3.1 Frontend

- **Home / Directory** – lists all associations with logo, tagline & link to detail page.
- **Association Detail** – description, contact info, social links, recent articles.
- **Articles Feed** – chronological list of all published articles; filter by association.
- **Article Detail** – full article content rendered from Markdown (Tiptap ➜ HTML).
- **Organiser Back‑Office**

  - **Login** (email + password).
  - **Dashboard** with quick links to edit association and manage articles.
  - **Association Editor** – update name, slug, description, contacts, logo, socials.
  - **Article Editor** – create / edit articles using Tiptap Markdown editor.

### 3.2 Backend (REST API, JSON, OpenAPI 3.1)

| Method | Endpoint             | Description                         | Auth        |
| ------ | -------------------- | ----------------------------------- | ----------- |
| GET    | /associations        | List associations                   | ‑           |
| GET    | /associations/{slug} | Association details                 | ‑           |
| POST   | /associations        | Create association                  | Admin       |
| PUT    | /associations/{id}   | Update association                  | Owner/Admin |
| GET    | /articles            | List articles (query ?association=) | ‑           |
| GET    | /articles/{slug}     | Article details                     | ‑           |
| POST   | /articles            | Create article                      | Owner/Admin |
| PUT    | /articles/{id}       | Update article                      | Owner/Admin |
| POST   | /auth/login          | Issue access & refresh tokens       | ‑           |
| POST   | /auth/refresh        | Refresh access token                | ‑           |

_Note: Use JWT access tokens (15 min) and hashed refresh tokens stored server‑side._

## 4 · Data Model (ERD excerpt)

- **Association** ↔ **SocialLink** (1‑n)
- **Association** ↔ **Article** (1‑n)
- **Association** ↔ **Organiser** (1‑n)
- **Organiser** ↔ **RefreshToken** (1‑n)

## 5 · Tech Stack

- **Database:** SQLite (file‑based) – perfect for single‑node MVP.
- **ORM:** Prisma – type‑safe, generates migrations.
- **Server:** Express (ES modules) – REST endpoints & static delivery.
- **Auth:** bcrypt + JWT + HttpOnly refresh cookies.
- **UI:** React + Chakra UI – accessible components & theming.
- **Editor:** Tiptap (Markdown) – stored as `bodyMd`, rendered to `bodyHtml` on write.

## 6 · Non‑Functional Requirements

- **Accessibility:** WCAG 2.1 AA compliance.
- **i18n:** French default, English roadmap.
- **Performance:** < 1 s TTI on 3G Fast.
- **Security:** OWASP Top 10 mitigation; rate‑limit auth routes.
- **Documentation:** Auto‑publish OpenAPI docs via Swagger‑UI at `/docs`.

## 7 · Milestones & Scope Cut‑Lines

| Phase             | Deliverables                                                              |
| ----------------- | ------------------------------------------------------------------------- |
| **v0.1 (Week 1)** | DB schema & Prisma migrations; basic Express server; `/associations` GET. |
| **v0.2 (Week 2)** | Public pages (Home, Association, Articles); seeded data.                  |
| **v0.3 (Week 3)** | Auth flows; organiser dashboard; protected write APIs.                    |
| **v1.0 (Week 4)** | Styling polish, i18n skeleton, deployment on Render/Heroku.               |

Anything beyond this (subscriptions, search, advanced analytics) is intentionally out of MVP scope.
