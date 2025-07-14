import { prisma } from "../prisma/prisma.js";
import { hashPassword } from "../utils/auth.js";
import {
  isStrongPassword,
  isValidEmail,
  isValidRole,
  isNonEmptyString,
  isValidInternationalPhone,
} from "../utils/validation.js";
import { toSlug } from "../utils/conversion.js";

/* ------------- helpers ------------- */
const notFound = (res) =>
  res.status(404).json({ message: "Association not found" });

/*  GET /api/v1/associations */
export const getAssociations = async (_req, res, next) => {
  try {
    const associations = await prisma.association.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logoUrl: true,
        updatedAt: true,
      },
      orderBy: { name: "asc" },
    });
    res.json({ message: "List of associations", data: associations });
  } catch (err) {
    next(err);
  }
};

/*  POST /api/v1/associations */
export const createAssociation = async (req, res, next) => {
  try {
    const {
      name,
      rawSlug,
      description,
      contactEmail,
      phone,
      website,
      logoUrl,
      organiser,
    } = req.body;

    /* ------------------------------------------------------------
     *  Guard clause validation
     * ---------------------------------------------------------- */
    if (!name || !rawSlug || !description || !contactEmail) {
      return res.status(400).json({
        message: "name, slug, description and contactEmail are required",
      });
    }

    if (!organiser || !organiser.email || !organiser.password) {
      return res.status(400).json({
        message: "organiser.email and organiser.password are required",
      });
    }
    // Normalise values
    organiser.email = organiser.email.trim().toLowerCase();

    // Validate formats
    if (contactEmail && !isValidEmail(contactEmail)) {
      return res.status(400).json({ message: "Invalid contactEmail format" });
    }
    if (!isValidEmail(organiser.email)) {
      return res.status(400).json({ message: "Invalid organiserEmail format" });
    }

    if (!isStrongPassword(organiser.password)) {
      return res.status(400).json({
        message:
          "Weak organiserPassword: min 8 chars incl. upper, lower, number & symbol",
      });
    }

    if (!isValidRole(organiser.role)) {
      return res.status(400).json({ message: "Invalid organiserRole value" });
    }

    // Generate / clean slug
    const slug = rawSlug ? toSlug(rawSlug) : toSlug(name);

    /* ---------- Uniqueness checks ---------- */
    const [existingAssociation, existingOrganiser] = await Promise.all([
      prisma.association.findFirst({
        where: {
          OR: [{ slug }, { name }],
        },
        select: { id: true },
      }),
      prisma.organiser.findUnique({ where: { email: organiser.email } }),
    ]);

    if (existingAssociation) {
      return res
        .status(409)
        .json({ message: "Association with same name or slug already exists" });
    }

    if (existingOrganiser) {
      return res.status(409).json({ message: "organiserEmail already in use" });
    }

    /* ------------------------------------------------------------
     *  Assemble data payload — optional fields only if present
     * ---------------------------------------------------------- */
    const data = {
      name,
      slug,
      description,
      contactEmail,
      ...(phone && { phone }),
      ...(website && { website }),
      ...(logoUrl && { logoUrl }),
      organisers: {
        create: [
          {
            email: organiser.email,
            passwordHash: await hashPassword(organiser.password),
            role: organiser.role || "ORGANISER",
          },
        ],
      },
    };

    const association = await prisma.association.create({
      data,
      include: { organisers: true },
    });

    return res.status(201).json({ data: association });
  } catch (err) {
    return next(err);
  }
};

/*  GET /api/v1/associations/:id */
export const getAssociation = async (req, res, next) => {
  try {
    const association = await prisma.association.findUnique({
      where: { id: req.params.id },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        contactEmail: true,
        phone: true,
        website: true,
        logoUrl: true,
        updatedAt: true,
        socialLinks: {
          select: { id: true, platform: true, url: true },
          orderBy: { platform: "asc" },
        },
        _count: {
          select: { organisers: true, articles: true },
        },
      },
    });

    association ? res.json({ data: association }) : notFound(res);
  } catch (err) {
    next(err);
  }
};

/*  PATCH /api/v1/associations/:id */
export const updateAssociation = async (req, res, next) => {
  try {
    // Ensure association exists
    const existing = await prisma.association.findUnique({
      where: { id: req.params.id },
      select: { id: true },
    });
    if (!existing) return notFound(res);

    const {
      name,
      rawSlug,
      description,
      contactEmail,
      phone,
      website,
      logoUrl,
    } = req.body;

    const data = {};

    if (name !== undefined) {
      if (!isNonEmptyString(name))
        return res
          .status(400)
          .json({ message: "name must be a non-empty string" });
      /* ---------- Uniqueness checks ---------- */
      const existingAssociation = await prisma.association.findFirst({
        where: { name },
        select: { id: true },
      });

      if (existingAssociation) {
        return res.status(409).json({
          message: "Association with same name already exists",
        });
      }
      data.name = name.trim();
    }

    if (rawSlug !== undefined) {
      const slug = toSlug(rawSlug);
      if (!isNonEmptyString(slug))
        return res
          .status(400)
          .json({ message: "Slug must be a non-empty string" });

      /* ---------- Uniqueness checks ---------- */
      const existingAssociation = await prisma.association.findFirst({
        where: { slug },
        select: { id: true },
      });

      if (existingAssociation) {
        return res.status(409).json({
          message: "Association with same slug already exists",
        });
      }
      data.slug = slug;
    }

    if (description !== undefined) {
      if (!isNonEmptyString(description))
        return res
          .status(400)
          .json({ message: "description must be a non-empty string" });
      data.description = description.trim();
    }

    if (contactEmail !== undefined) {
      if (contactEmail && !isValidEmail(contactEmail))
        return res.status(400).json({ message: "contactEmail is not valid" });
      data.contactEmail = contactEmail.toLowerCase();
    }

    if (phone !== undefined) {
      if (phone && !isValidInternationalPhone(phone))
        return res.status(400).json({ message: "phone number is not valid" });
      data.phone = phone;
    }

    if (website !== undefined) {
      try {
        // Throws for invalid URLs
        new URL(website);
      } catch {
        return res.status(400).json({ message: "website URL is not valid" });
      }
      data.website = website;
    }

    if (logoUrl !== undefined) {
      try {
        // TODO: might make this a local path latter
        new URL(logoUrl);
      } catch {
        return res.status(400).json({ message: "logoUrl is not a valid URL" });
      }
      data.logoUrl = logoUrl;
    }

    if (Object.keys(data).length === 0) {
      return res
        .status(400)
        .json({ message: "No recognised fields supplied for update" });
    }

    /* ------------------------------------------------------------
     *  2. Perform the update
     * ---------------------------------------------------------- */
    const updated = await prisma.association.update({
      where: { id: req.params.id },
      data,
    });

    res.json({ data: updated });
  } catch (err) {
    // Prisma throws P2025 when no record matches `where`
    err.code === "P2025" ? notFound(res) : next(err);
  }
};

/* -------------------------------------------------------------
 * DELETE /api/v1/associations/:id  (UUID or slug)
 * ----------------------------------------------------------- */
export const deleteAssociation = async (req, res, next) => {
  try {
    // Check the association exists first
    const existing = await prisma.association.findUnique({
      where: { id: req.params.id },
      select: { id: true },
    });
    if (!existing) return notFound(res);

    // Delete (assumes organisers & child records are protected by ON DELETE CASCADE)
    await prisma.association.delete({ where: { id: existing.id } });

    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
