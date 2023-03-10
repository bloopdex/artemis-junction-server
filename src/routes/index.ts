import { Router } from "express";
import fireDetectionRoutes from "./fire-detection";

const router = Router();

router.use(fireDetectionRoutes);
