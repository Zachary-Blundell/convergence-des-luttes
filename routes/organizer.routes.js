import { Router } from "express";

const organizerRouter = Router();

/* ---------- /api/v1/organizers ---------- */
// GET  /       → list all organizers
// POST /       → create a new organizer
organizerRouter
  .route("/")
  .get((req, res) => {
    res.send({ title: "GET all organizers details" });
  })
  .post((req, res) => {
    res.send({ title: "Create a new organizer" });
  });

/* ---------- /api/v1/organizers/:id ---------- */
// GET    /:id → get one organizer
// PATCH  /:id → update partial fields
// DELETE /:id → remove organizer
organizerRouter
  .route("/:id")
  .get((req, res) => {
    res.send({ title: "GET an organizer details", id: req.params.id });
  })
  .patch((req, res) => {
    res.send({ title: "Update an organizer", id: req.params.id });
  })
  .delete((req, res) => {
    res.send({ title: "Delete an organizer" }); // No Content
  });

export default organizerRouter;
