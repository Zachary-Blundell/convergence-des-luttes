# ER Diagrams

## Snapshot‑autosave version (Tiptap + Yjs snapshot)

```mermaid
erDiagram
  ASSOCIATION ||--o{ SOCIAL_LINK : "has"
  ASSOCIATION ||--|{ ORGANISER : "is managed by"
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
    JSON bodyJson        "ProseMirror/Tiptap doc"
    BYTES yjsState       "Binary snapshot of Yjs"
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

> **Notes**
> • `bodyJson` stores the editor’s ProseMirror/Tiptap JSON, enabling fast renders and autosave.
> • `yjsState` stores a single binary snapshot of the full Yjs document—simple but good enough for now.
> • When we switch to incremental Yjs updates, we’ll introduce an `ARTICLE_YJS_UPDATE` table instead of `yjsState`.
