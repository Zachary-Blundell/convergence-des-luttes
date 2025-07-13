import { Router } from "express";
import {
  getOrganisers,
  createOrganiser,
  getOrganiser,
  updateOrganiser,
  deleteOrganiser,
} from "../controllers/organiser.controller.js";

const organiserRouter = Router();

/* ---------- /api/v1/organisers ---------- */
// GET  /       → list all organisers
// POST /       → create a new organiser
organiserRouter.route("/").get(getOrganisers).post(createOrganiser);

/* ---------- /api/v1/organisers/:id ---------- */
// GET    /:id → get one organiser
// PATCH  /:id → update partial fields
// DELETE /:id → remove organiser
organiserRouter
  .route("/:id")
  .get(getOrganiser)
  .patch(updateOrganiser)
  .delete(deleteOrganiser);

export default organiserRouter;
