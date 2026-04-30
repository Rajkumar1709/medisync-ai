import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import reportRoutes from "./routes/reportRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/report", reportRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

// Static uploads folder
app.use("/uploads", express.static("uploads"));

export default app;