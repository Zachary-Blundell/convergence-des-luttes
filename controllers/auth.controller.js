// src/modules/auth/auth.controller.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";

import { prisma } from "../prisma/prisma.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

/* ────────────────────────────────────────────────────────── *
   Helpers
 * ────────────────────────────────────────────────────────── */

const hashPassword = (plain) => bcrypt.hash(plain, 12);
const verifyPassword = (plain, hash) => bcrypt.compare(plain, hash);

const signAccessToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN || "15m" });

const randomToken = (len = 40) => crypto.randomBytes(len).toString("hex");

/* ────────────────────────────────────────────────────────── *
   Controllers
 * ────────────────────────────────────────────────────────── */

/**
 * POST /api/auth/register
 * body: { email, password, name, slug, ... }
 * Creates Organizer + (optional) Association in one shot.
 */
export const register = async (req, res, next) => {
  try {
    const { email, password, association } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.status = 400;
      throw error;
    }

    // Check if email is valid
    const emailInUse = await prisma.organizer.findUnique({ where: { email } });
    if (emailInUse) {
      const error = new Error("Email already used");
      error.status = 409;
      throw error;
    }

    const newOrganizer = await prisma.organizer.create({
      data: {
        email,
        passwordHash: await hashPassword(password),
        role: "ORGANIZER",
        ...(association && {
          association: { create: association }, // name, slug, etc.
        }),
      },
      include: { association: true },
    });

    // Create refresh token
    const plainToken = randomToken();
    await prisma.refreshToken.create({
      data: {
        tokenHash: await hashPassword(plainToken),
        organizerId: newOrganizer.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
      },
    });

    // Send response
    res
      .cookie("rt", plainToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
      })
      .status(201)
      .json({
        accessToken: signAccessToken({ sub: newOrganizer.id }),
        organizer: { id: newOrganizer.id, email: newOrganizer.email },
      });
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/auth/login
 * body: { email, password }
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const organizer = await prisma.organizer.findUnique({ where: { email } });
    if (!organizer || !(await verifyPassword(password, organizer.passwordHash)))
      return res.status(401).json({ message: "Invalid credentials" });

    // rotate refresh token
    await prisma.refreshToken.updateMany({
      where: { organizerId: organizer.id, revoked: false },
      data: { revoked: true },
    });

    const plainToken = randomToken();
    await prisma.refreshToken.create({
      data: {
        tokenHash: await hashPassword(plainToken),
        organizerId: organizer.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res
      .cookie("rt", plainToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
      })
      .json({
        accessToken: signAccessToken({ sub: organizer.id }),
        organizer: { id: organizer.id, email: organizer.email },
      });
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/auth/logout
 * clears cookie & revokes the stored refresh token
 */
export const logout = async (req, res, next) => {
  try {
    const { rt } = req.cookies;
    if (rt) {
      await prisma.refreshToken.updateMany({
        where: { revoked: false },
        data: { revoked: true },
      });
    }
    res.clearCookie("rt").status(204).end();
  } catch (err) {
    next(err);
  }
};

export const refresh = async (_req, res, next) => {
  try {
    res.status(501).json({ message: "Not implemented" });
  } catch (error) {
    next(new Error("Not implemented" + error.message));
  }
};
