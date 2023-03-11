import { Router } from "express";
import fireDetectionRoutes from "./fire-detection.route";
import sensorRoutes from "./sensor.route";

const router = Router();

router.use("/", fireDetectionRoutes);
router.use("/sensors", sensorRoutes);
