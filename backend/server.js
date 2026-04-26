import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { connectDB, sequelize } from "./src/config/db.js";

// Import models
import "./src/models/user.model.js";
import "./src/models/medicalReport.model.js";
import "./src/models/reportData.model.js";
import "./src/models/comparison.model.js";
import "./src/models/aiInsight.model.js";

await connectDB();
await sequelize.sync({ alter: true });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});