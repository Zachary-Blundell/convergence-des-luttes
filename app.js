import express from "express";
import { PORT } from "./config/env.js";

import organizerRouter from "./routes/organizer.routes.js";
import associationRouter from "./routes/association.routes.js";
import authRouter from "./routes/auth.routes.js";

import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger/swaggerConfig.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorMiddleware);

// Router prefixes
app.use("/api/v1/organizers", organizerRouter);
app.use("/api/v1/associations", associationRouter);
app.use("/api/v1/auth", authRouter);

app.get("/api/v1", (req, res) => {
  res.send("Welcome to the Convergence des Lutte API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/v1`);
  console.log(`Docs are running on http://localhost:${PORT}/api-docs`);
});

export default app;
