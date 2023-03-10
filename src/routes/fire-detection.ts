import { Router } from "express";
import { fireDetectionPost } from "../controllers/fire-detection.controller";

const fireDetectionRoutes = Router();

fireDetectionRoutes.post("/fire-detected", fireDetectionPost);

export default fireDetectionRoutes;