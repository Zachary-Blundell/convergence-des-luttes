import { Router } from "express";
import {
  login,
  logout,
  refresh,
  register,
} from "../controllers/auth.controller.js";

const authRouter = Router();

/* ---------- /api/v1/auth/register ---------- */
/* Admin-only — create a new organiser account */
/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Register a new organizer (and optionally an association)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *               association:
 *                 $ref: '#/components/schemas/NewAssociation'
 *     responses:
 *       201:
 *         description: Organizer created & tokens issued
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 organizer:
 *                   $ref: '#/components/schemas/Organizer'
 */
authRouter.post("/register", register);

/* ---------- /api/v1/auth/login ---------- */
/* Public — exchange credentials for JWT access + refresh tokens */
/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Log in and receive fresh tokens
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Credentials accepted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 organizer:
 *                   $ref: '#/components/schemas/Organizer'
 *       401:
 *         description: Invalid credentials
 */
authRouter.post("/login", login);

/* ---------- /api/v1/auth/logout ---------- */
/* Authenticated — invalidate the current refresh token */
/**
 * @openapi
 * /auth/logout:
 *   post:
 *     summary: Revoke the current refresh token and clear cookie
 *     tags: [Auth]
 *     responses:
 *       204:
 *         description: Logged out (no content)
 */
authRouter.post("/logout", logout);

/* ---------- /api/v1/auth/refresh ---------- */
/* Authenticated (refresh-token) — rotate / renew an expired access token */
/**
 * @openapi
 * /auth/refresh:
 *   post:
 *     summary: Rotate refresh token and obtain a new access token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: New access token issued
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *       501:
 *         description: Not implemented
 */
authRouter.post("/refresh", refresh);

export default authRouter;
