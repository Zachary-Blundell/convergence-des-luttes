import { Router } from "express";

const associationRouter = Router();

/* ---------- /api/v1/associations ---------- */
// GET  /       → list all associations
// POST /       → create a new association
associationRouter
  .route("/")
  .get((req, res) => {
    res.json({ title: "GET all associations details" });
  })
  .post((req, res) => {
    res.status(201).json({ title: "Create a new association" });
  });

/* ---------- /api/v1/associations/:id ---------- */
// GET    /:id → get one association
// PATCH  /:id → update partial fields
// DELETE /:id → remove association
associationRouter
  .route("/:id")
  .get((req, res) => {
    res.json({ title: "GET an association details", id: req.params.id });
  })
  .patch((req, res) => {
    res.json({ title: "Update an association", id: req.params.id });
  })
  .delete((req, res) => {
    res.status(204).end(); // “No Content”
  });

export default associationRouter;
