// controllers/association.controller.js
import { prisma } from "../prisma/prisma.js";

/* ------------- helpers ------------- */
const notFound = (res) =>
  res.status(404).json({ message: "Association not found" });

/*  GET /api/v1/associations */
export const getAssociations = async (_req, res, next) => {
  try {
    const associations = await prisma.association.findMany({
      include: { socialLinks: true, articles: true, organizer: true },
    });
    res.json({ message: "List of associations", data: associations });
  } catch (err) {
    next(err);
  }
};

/*  GET /api/v1/associations/:id */
export const getAssociation = async (req, res, next) => {
  try {
    const association = await prisma.association.findUnique({
      where: { id: req.params.id },
      include: { socialLinks: true, articles: true, organizer: true },
    });
    association ? res.json({ data: association }) : notFound(res);
  } catch (err) {
    next(err);
  }
};

/*  POST /api/v1/associations */
export const createAssociation = async (req, res, next) => {
  try {
    const newAssoc = await prisma.association.create({
      data: req.body, // validate in real code!
    });
    res.status(201).json({ data: newAssoc });
  } catch (err) {
    next(err);
  }
};

/*  PATCH /api/v1/associations/:id */
export const updateAssociation = async (req, res, next) => {
  try {
    const updated = await prisma.association.update({
      where: { id: req.params.id },
      data: req.body, // validate in real code!
    });
    res.json({ data: updated });
  } catch (err) {
    // Prisma throws P2025 if record not found
    err.code === "P2025" ? notFound(res) : next(err);
  }
};

/*  DELETE /api/v1/associations/:id */
export const deleteAssociation = async (req, res, next) => {
  try {
    await prisma.association.delete({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (err) {
    err.code === "P2025" ? notFound(res) : next(err);
  }
};
