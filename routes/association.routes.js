import { Router } from "express";
// import { associationController } from "../controllers/association.controller.js";
import {
  getAssociations,
  createAssociation,
  getAssociation,
  updateAssociation,
  deleteAssociation,
} from "../controllers/association.controller.js";
const associationRouter = Router();

/* ---------- /api/v1/associations ---------- */
// GET  /       → list all associations
// POST /       → create a new association
/**
 * @openapi
 * /associations:
 *   get:
 *     summary: List all associations
 *     tags: [Associations]
 *     responses:
 *       200:
 *         description: A wrapped array of association records
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: List of associations
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Association'
 *   post:
 *     summary: Create a new association
 *     tags: [Associations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewAssociation'
 *     responses:
 *       201:
 *         description: Association created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Association'
 */
associationRouter.route("/").get(getAssociations).post(createAssociation);

/* ---------- /api/v1/associations/:id ---------- */
// GET    /:id → get one association
// PATCH  /:id → update partial fields
// DELETE /:id → remove association
/**
 * @openapi
 * /associations/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *         format: uuid
 *       description: Association ID
 *   get:
 *     summary: Get a single association by ID
 *     tags: [Associations]
 *     responses:
 *       200:
 *         description: Association found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Association'
 *       404:
 *         description: Association not found
 *   patch:
 *     summary: Update selected association fields
 *     tags: [Associations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Association'
 *     responses:
 *       200:
 *         description: Association updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Association'
 *       404:
 *         description: Association not found
 *   delete:
 *     summary: Delete an association
 *     tags: [Associations]
 *     responses:
 *       204:
 *         description: Association deleted (no content)
 *       404:
 *         description: Association not found
 */
associationRouter
  .route("/:id")
  .get(getAssociation)
  .patch(updateAssociation)
  .delete(deleteAssociation);

export default associationRouter;
