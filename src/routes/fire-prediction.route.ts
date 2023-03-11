
import { Router } from "express";
import { fireDetectionPost } from "../controllers/fire-detection.controller";

const firePredictionRoutes = Router();

firePredictionRoutes.post("/fire-predicted", fireDetectionPost);

export default firePredictionRoutes;