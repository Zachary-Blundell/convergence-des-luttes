import { prisma } from "../prisma/prisma.js";
import { hashPassword } from "../utils/auth.js";
import {
  isStrongPassword,
  isValidEmail,
  isValidRole,
} from "../utils/validation.js";

/* ------------- helpers ------------- */
const notFound = (res) =>
  res.status(404).json({ message: "Organiser not found" });

/* -------------------------------------------------------------
 * GET /api/v1/organisers
 * ----------------------------------------------------------- */
export const getOrganisers = async (_req, res, next) => {
  try {
    const organisers = await prisma.organiser.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        associationId: true,
      },
      orderBy: { createdAt: "desc" },
    });
    res.json({ data: organisers });
  } catch (err) {
    next(err);
  }
};

/* -------------------------------------------------------------
 * POST /api/v1/organisers
 * ----------------------------------------------------------- */
export const createOrganiser = async (req, res, next) => {
  try {
    let { email, password, role = "ORGANISER", associationId } = req.body;

    // Basic presence validation
    if (!email || !password || !associationId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Normalise input
    email = email.trim().toLowerCase();

    // Validate email
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Validate password strength
    if (!isStrongPassword(password)) {
      return res.status(400).json({
        message:
          "Weak password: min 8 chars incl. upper, lower, number & symbol",
      });
    }

    // Validate role value
    if (!isValidRole(role)) {
      return res.status(400).json({ message: "Invalid role value" });
    }

    // Ensure unique email (case‑insensitive)
    const existing = await prisma.organiser.findUnique({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const passwordHash = await hashPassword(password);

    const newOrganiser = await prisma.organiser.create({
      data: {
        email,
        passwordHash,
        role,
        association: { connect: { id: associationId } },
      },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        associationId: true,
      },
    });

    res.status(201).json({ data: newOrganiser });
  } catch (err) {
    next(err);
  }
};

/* -------------------------------------------------------------
 * GET /api/v1/organisers/:id
 * ----------------------------------------------------------- */
export const getOrganiser = async (req, res, next) => {
  console.log("here is the id: " + req.params.id);
  try {
    const organiser = await prisma.organiser.findUnique({
      where: { id: req.params.id },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        associationId: true,
        association: {
          select: { name: true },
        },
      },
    });
    organiser ? res.json({ data: organiser }) : notFound(res);
  } catch (err) {
    next(err);
  }
};

/* -------------------------------------------------------------
 * PATCH /api/v1/organisers/:id
 * ----------------------------------------------------------- */
export const updateOrganiser = async (req, res, next) => {
  try {
    const { id } = req.params;
    let { email, password, role, associationId } = req.body;

    const data = {};

    // Email updates
    if (email !== undefined) {
      email = email.trim().toLowerCase();
      if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      // uniqueness check excluding current organiser
      const duplicate = await prisma.organiser.findFirst({
        where: { email, NOT: { id } },
      });
      if (duplicate) {
        return res.status(409).json({ message: "Email already in use" });
      }
      data.email = email;
    }

    // Password updates
    if (password !== undefined) {
      if (!isStrongPassword(password)) {
        return res.status(400).json({
          message:
            "Weak password: min 8 chars incl. upper, lower, number & symbol",
        });
      }
      data.passwordHash = await hashPassword(password);
    }

    // Role updates
    if (role !== undefined) {
      if (!isValidRole(role)) {
        return res.status(400).json({ message: "Invalid role value" });
      }
      data.role = role;
    }

    // Association updates
    if (associationId !== undefined) {
      data.association = { connect: { id: associationId } };
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ message: "No valid fields to update" });
    }

    const updated = await prisma.organiser.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        associationId: true,
      },
    });

    res.json({ data: updated });
  } catch (err) {
    err.code === "P2025" ? notFound(res) : next(err);
  }
};

/* -------------------------------------------------------------
 * DELETE /api/v1/organisers/:id
 * ----------------------------------------------------------- */
export const deleteOrganiser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Fetch organiser to get associationId (and ensure it exists)
    const organiser = await prisma.organiser.findUnique({
      where: { id },
      select: { id: true, associationId: true },
    });

    if (!organiser) return notFound(res);

    // Count organisers remaining in the association
    const remaining = await prisma.organiser.count({
      where: { associationId: organiser.associationId },
    });

    if (remaining <= 1) {
      return res.status(400).json({
        message: "Cannot delete the last organiser of an association",
      });
    }

    await prisma.organiser.delete({ where: { id } });
    res.json({ message: "Organiser deleted" });
  } catch (err) {
    err.code === "P2025" ? notFound(res) : next(err);
  }
};
