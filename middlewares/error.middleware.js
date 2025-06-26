import { Prisma } from "@prisma/client";

export default function errorMiddleware(err, _req, res, next) {
  /* ----------------------------------------------------------
   * 1. Prisma-specific branches
   * -------------------------------------------------------- */
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": // Unique constraint failed
        return res.status(409).json({
          error: "Conflict",
          message: `The value for '${err.meta?.target}' is already taken.`,
        });

      case "P2025": // Record not found
        return res.status(404).json({
          error: "Not Found",
          message: err.meta?.cause || "Record not found.",
        });

      case "P2003": // Foreign-key constraint
        return res.status(400).json({
          error: "Invalid reference",
          message: err.meta?.cause || "Foreign-key constraint failed.",
        });

      default:
        return res
          .status(400)
          .json({ error: "Database error", message: err.message });
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return res
      .status(400)
      .json({ error: "Validation error", message: err.message });
  }

  if (err instanceof Prisma.PrismaClientInitializationError) {
    return res
      .status(500)
      .json({ error: "Database connection error", message: err.message });
  }

  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return res
      .status(500)
      .json({ error: "Unknown database error", message: err.message });
  }

  if (err instanceof Prisma.PrismaClientRustPanicError) {
    return res.status(500).json({
      error: "Database engine panic",
      message: "Prisma engine crashed; check logs.",
    });
  }

  /* ----------------------------------------------------------
   * 2. Non-Prisma or unhandled errors
   * -------------------------------------------------------- */
  if (err instanceof Error) {
    const status = err.statusCode || 500;
    return res.status(status).json({ error: err.name, message: err.message });
  }

  // If it’s something completely unexpected, let Express handle it.
  return next(err);
}
