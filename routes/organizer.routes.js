import { Router } from "express";
import {
  getOrganizers,
  createOrganizer,
  getOrganizer,
  updateOrganizer,
  deleteOrganizer,
} from "../controllers/organizer.controller.js";

const organizerRouter = Router();

/* ---------- /api/v1/organizers ---------- */
// GET  /       → list all organizers
// POST /       → create a new organizer
/**
 * @openapi
 * /organizers:
 *   get:
 *     summary: List all organizers
 *     tags: [Organizers]
 *     responses:
 *       200:
 *         description: A wrapped array of organizer records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: List of organizers
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Organizer'
 *   post:
 *     summary: Create a new organizer
 *     tags: [Organizers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewOrganizer'
 *     responses:
 *       201:
 *         description: Organizer created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Organizer'
 */
organizerRouter.route("/").get(getOrganizers).post(createOrganizer);

/* ---------- /api/v1/organizers/:id ---------- */
// GET    /:id → get one organizer
// PATCH  /:id → update partial fields
// DELETE /:id → remove organizer
/**
 * @openapi
 * /organizers/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *         format: uuid
 *       description: Organizer ID
 *   get:
 *     summary: Get a single organizer by ID
 *     tags: [Organizers]
 *     responses:
 *       200:
 *         description: Organizer found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Organizer'
 *       404:
 *         description: Organizer not found
 *   patch:
 *     summary: Update selected organizer fields
 *     tags: [Organizers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Organizer'
 *     responses:
 *       200:
 *         description: Organizer updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Organizer'
 *       404:
 *         description: Organizer not found
 *   delete:
 *     summary: Delete an organizer
 *     tags: [Organizers]
 *     responses:
 *       204:
 *         description: Organizer deleted (no content)
 *       404:
 *         description: Organizer not found
 */
organizerRouter
  .route("/:id")
  .get(getOrganizer)
  .patch(updateOrganizer)
  .delete(deleteOrganizer);

export default organizerRouter;
