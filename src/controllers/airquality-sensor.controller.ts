import { HardwareMiddleware } from "./../middlewares/board.middleware";
import { io } from "../server";

import { Request, Response } from "express";
const CCS811 = require("johnny-five").CCS811;

export const humiditySensorGet = async (req: Request, res: Response) => {
  HardwareMiddleware(() => {
    const ccs811 = new CCS811({
      controller: "CCS811",
      address: 0x5a, // The I2C address of the sensor
    });

    // Read the TVOC data from the sensor
    ccs811.on("change", () => {
      const eco2 = ccs811.eco2;

      io.emit("air-quality", eco2);
    });
  });
};
