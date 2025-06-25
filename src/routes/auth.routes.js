import { Router } from "express";

const authRouter = Router();

/* ---------- /api/v1/auth/register ---------- */
/* Admin-only — create a new organiser account */
authRouter.post("/register", (req, res) => {
  res.status(201).json({ title: "Register organiser account (admin-only)" });
});

/* ---------- /api/v1/auth/login ---------- */
/* Public — exchange credentials for JWT access + refresh tokens */
authRouter.post("/login", (req, res) => {
  res.json({ title: "Login and issue JWT access + refresh tokens" });
});

/* ---------- /api/v1/auth/logout ---------- */
/* Authenticated — invalidate the current refresh token */
authRouter.post("/logout", (req, res) => {
  res.json({ title: "Logout and invalidate refresh token" });
});

/* ---------- /api/v1/auth/refresh ---------- */
/* Authenticated (refresh-token) — rotate / renew an expired access token */
authRouter.post("/refresh", (req, res) => {
  res.json({ title: "Refresh / rotate JWT tokens" });
});

export default authRouter;
