import express from "express";
import { PORT } from "./config/env.js";

import organizerRouter from "./routes/organizer.routes.js";
import associationRouter from "./routes/association.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

// Router prefixes
app.use("/api/v1/organizers", organizerRouter);
app.use("/api/v1/associations", associationRouter);
app.use("/api/v1/auth", authRouter);

app.get("/api", (req, res) => {
  res.send("Welcome to the Convergence des Lutte API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
