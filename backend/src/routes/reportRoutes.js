import express from "express";
import upload from "../middlewares/upload.js";
import { uploadReport } from "../controllers/reportController.js";

const router = express.Router();

// Upload route
router.post("/upload", upload.single("report"), uploadReport);

export default router;