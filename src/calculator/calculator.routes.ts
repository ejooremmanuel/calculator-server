import { Router } from "express";
import {
  calculate,
  deleteAllEntries,
  deleteEntry,
  getUserCalculationHistory,
} from "./calculator.controller";
import { protect } from "../../middlewares/auth";

const router = Router();

router.post("/", protect, calculate);
router.get("/", protect, getUserCalculationHistory);
router.delete("/:id", protect, deleteEntry);
router.delete("/", protect, deleteAllEntries);

export { router as calculateRoute };
