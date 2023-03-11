import { Router } from "express";
import { fireDetectionPost } from "../controllers/fire-detection.controller";
import fireDetectionRoutes from "./fire-detection.route";

const sensorRoutes = Router();

sensorRoutes.use("/temperature", fireDetectionRoutes);

export default sensorRoutes;
