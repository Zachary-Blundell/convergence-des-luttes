# Association API (v1)

Base path: `/api/v1/associations`

| Verb       | Path   | Purpose                                          |
| ---------- | ------ | ------------------------------------------------ |
| **GET**    | `/`    | List all associations (alphabetical)             |
| **POST**   | `/`    | Create a new association and its first organiser |
| **GET**    | `/:id` | Fetch a single association by UUID               |
| **PATCH**  | `/:id` | Update association fields                        |
| **DELETE** | `/:id` | Delete an association (cascades to children)     |

---

## 1. List associations

```http
GET /api/v1/associations
```

**Query params:** _none_

**Response 200**

```jsonc
{
  "data": [
    {
      "id": "uuid",
      "name": "Convergence des Luttes",
      "slug": "convergence-des-luttes",
      "description": "…",
      "logoUrl": "https://…",
      "updatedAt": "2025-07-14T12:34:56.000Z"
    },
    …
  ]
}
```

---

## 2. Create association

```http
POST /api/v1/associations
```

### Required JSON body

| Field               | Type             | Notes                                                  |
| ------------------- | ---------------- | ------------------------------------------------------ |
| `name`              | `string`         | Unique, ≥1 char                                        |
| `rawSlug`           | `string`         | Will be slug‑sanitised and must be unique              |
| `description`       | `string`         |                                                        |
| `contactEmail`      | `string (email)` |                                                        |
| `organiserEmail`    | `string (email)` | For organiser’s login                                  |
| `organiserPassword` | `string`         | Strong password (min 8 with upper/lower/number/symbol) |

### Optional body fields

`phone`, `website`, `logoUrl`, `organiserRole` (defaults to `ORGANISER` if omitted)

### Success 201

```jsonc
{
  "data": {
    "association": { … },
    "organiser": { … }
  }
}
```

### Error responses

| Code | Reason                                 |
| ---- | -------------------------------------- |
| 400  | Missing or invalid fields              |
| 409  | Duplicate name/slug or organiser email |

---

## 3. Get association by ID

```http
GET /api/v1/associations/{id}
```

**Response 200** – same fields as list _plus_ `contactEmail`, `phone`, `website`, `socialLinks[]`, and `_count.organisers`, `_count.articles`.

**Response 404** – association not found.

---

## 4. Update association

```http
PATCH /api/v1/associations/{id}
```

### Body (any subset)

`name`, `slug`, `description`, `contactEmail`, `phone`, `website`, `logoUrl`

**Rules**

- Empty strings rejected.
- `slug` auto‑generated from `name` if not provided.
- Duplicate name/slug guarded with 409.

**Success 200** – returns updated association.

**Errors** – 400 invalid input, 404 not found, 409 duplicate.

---

## 5. Delete association

```http
DELETE /api/v1/associations/{id}
```

_Cascade deletes_ linked organisers, social links, and articles (`ON DELETE CASCADE` in DB schema).

**Success 204** – no content.

**Error 404** – association not found.
