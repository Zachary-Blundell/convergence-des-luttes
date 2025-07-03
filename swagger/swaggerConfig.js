import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "Convergence des Lutte API",
      version: "1.0.0",
      description: "Public documentation for the CDL REST API",
    },
    servers: [{ url: "http://localhost:5000/api/v1" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      /* -------------------------------------------------- *
       *  ENUMS (Prisma ➜ OpenAPI)
       * -------------------------------------------------- */
      schemas: {
        SocialPlatform: {
          type: "string",
          enum: [
            "WEBSITE",
            "TWITTER",
            "FACEBOOK",
            "INSTAGRAM",
            "MASTODON",
            "OTHER",
          ],
          description: "Supported social-media platforms",
        },
        GlobalRole: {
          type: "string",
          enum: ["ORGANIZER", "ADMIN"],
          description: "System-wide role for an authenticated user",
        },

        /* -------------------------------------------------- *
         *  DATABASE MODELS (Prisma ➜ OpenAPI)
         * -------------------------------------------------- */

        Association: {
          type: "object",
          required: ["id", "name", "slug", "description", "contactEmail"],
          properties: {
            id: { type: "string", format: "uuid" },
            name: { type: "string" },
            slug: { type: "string" },
            description: { type: "string" },
            contactEmail: { type: "string", format: "email" },
            phone: { type: "string", nullable: true },
            website: { type: "string", format: "uri", nullable: true },
            logoUrl: { type: "string", format: "uri", nullable: true },
            updatedAt: { type: "string", format: "date-time" },
            /* relational shortcuts (read-only) */
            socialLinks: {
              type: "array",
              items: { $ref: "#/components/schemas/SocialLink" },
            },
            articles: {
              type: "array",
              items: { $ref: "#/components/schemas/Article" },
            },
            organizer: {
              $ref: "#/components/schemas/Organizer",
              nullable: true,
            },
          },
        },

        SocialLink: {
          type: "object",
          required: ["id", "platform", "url", "associationId"],
          properties: {
            id: { type: "integer" },
            platform: { $ref: "#/components/schemas/SocialPlatform" },
            url: { type: "string", format: "uri" },
            associationId: { type: "string", format: "uuid" },
            /* back-reference */
            association: { $ref: "#/components/schemas/Association" },
          },
        },

        Article: {
          type: "object",
          required: [
            "id",
            "slug",
            "title",
            "bodyMd",
            "createdAt",
            "associationId",
          ],
          properties: {
            id: { type: "integer" },
            slug: { type: "string" },
            title: { type: "string" },
            bodyMd: { type: "string", description: "Markdown source" },
            bodyHtml: { type: "string", nullable: true },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
            associationId: { type: "string", format: "uuid" },
            association: { $ref: "#/components/schemas/Association" },
          },
        },

        Organizer: {
          type: "object",
          required: [
            "id",
            "email",
            "passwordHash",
            "role",
            "createdAt",
            "associationId",
          ],
          properties: {
            id: { type: "string", format: "uuid" },
            email: { type: "string", format: "email" },
            passwordHash: { type: "string", writeOnly: true },
            role: { $ref: "#/components/schemas/GlobalRole" },
            createdAt: { type: "string", format: "date-time" },
            associationId: { type: "string", format: "uuid" },
            association: { $ref: "#/components/schemas/Association" },
            tokens: {
              // convenience for eager-loaded queries
              type: "array",
              items: { $ref: "#/components/schemas/RefreshToken" },
            },
          },
        },

        RefreshToken: {
          type: "object",
          required: ["id", "tokenHash", "organizerId", "expiresAt"],
          properties: {
            id: { type: "integer" },
            tokenHash: { type: "string" },
            organizerId: { type: "string", format: "uuid" },
            expiresAt: { type: "string", format: "date-time" },
            revoked: { type: "boolean", default: false },
            organizer: { $ref: "#/components/schemas/Organizer" },
          },
        },

        /* -------------------------------------------------- *
         *  INPUT PAYLOADS (create / update shortcuts)
         * -------------------------------------------------- */

        NewOrganizer: {
          allOf: [{ $ref: "#/components/schemas/Organizer" }],
          description: "Body for POST /organizers",
          required: ["email", "passwordHash", "associationId"],
        },
        NewAssociation: {
          allOf: [{ $ref: "#/components/schemas/Association" }],
          description: "Body for POST /associations",
          required: ["name", "slug", "description", "contactEmail"],
        },
      },
    },
  },
  // all files that contain route handlers & JSDoc
  apis: ["./routes/**/*.js", "./controllers/**/*.js"],
};

export default swaggerJSDoc(options);
