// controllers/organizer.controller.js
import { prisma } from "../prisma/prisma.js";

/* ------------- helpers ------------- */
const notFound = (res) =>
  res.status(404).json({ message: "Organizer not found" });

/*  GET /api/v1/organizers */
export const getOrganizers = async (_req, res, next) => {
  try {
    const organizers = await prisma.organizer.findMany({
      include: { association: true }, // eager-load if useful
    });
    res.json({ message: "List of organizers", data: organizers });
  } catch (err) {
    next(err);
  }
};

/*  GET /api/v1/organizers/:id */
export const getOrganizer = async (req, res, next) => {
  try {
    const organizer = await prisma.organizer.findUnique({
      where: { id: req.params.id },
      include: { association: true },
    });
    organizer ? res.json({ data: organizer }) : notFound(res);
  } catch (err) {
    next(err);
  }
};

/*  POST /api/v1/organizers */
export const createOrganizer = async (req, res, next) => {
  try {
    const { email, password, associationId } = req.body;

    const newOrg = await prisma.organizer.create({
      data: {
        email,
        passwordHash: password, // hash in real code!
        association: associationId
          ? { connect: { id: associationId } }
          : undefined,
      },
    });

    res.status(201).json({ data: newOrg });
  } catch (err) {
    next(err);
  }
};

/*  PATCH /api/v1/organizers/:id */
export const updateOrganizer = async (req, res, next) => {
  try {
    const updated = await prisma.organizer.update({
      where: { id: req.params.id },
      data: req.body, // validate in real code!
    });
    res.json({ data: updated });
  } catch (err) {
    // Prisma throws P2025 if record not found
    err.code === "P2025" ? notFound(res) : next(err);
  }
};

/*  DELETE /api/v1/organizers/:id */
export const deleteOrganizer = async (req, res, next) => {
  try {
    await prisma.organizer.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    err.code === "P2025" ? notFound(res) : next(err);
  }
};
