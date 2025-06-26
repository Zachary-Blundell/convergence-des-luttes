import express from "express";
import { PORT } from "./config/env.js";

import organizerRouter from "./routes/organizer.routes.js";
import associationRouter from "./routes/association.routes.js";
import authRouter from "./routes/auth.routes.js";

import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Router prefixes
app.use("/api/v1/organizers", organizerRouter);
app.use("/api/v1/associations", associationRouter);
app.use("/api/v1/auth", authRouter);

app.use(errorHandler);

app.get("/api/v1", (req, res) => {
  res.send("Welcome to the Convergence des Lutte API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/v1`);
});

export default app;
