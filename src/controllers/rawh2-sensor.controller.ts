import { HardwareMiddleware } from "./../middlewares/board.middleware";
import { io } from "../server";

import { Request, Response } from "express";
import { Sensor } from "johnny-five";
const CCS811 = require("johnny-five").CCS811;

export const humiditySensorGet = async (req: Request, res: Response) => {
  HardwareMiddleware(() => {
    // Initialize the MQ-8 gas sensor
    const mq8 = new Sensor({
      pin: "A0", // The analog input pin connected to the sensor
      freq: 1000, // Read the sensor value every 1 second
      threshold: 10, // Trigger a "change" event when the sensor value changes by at least 10 units
    });

    // Read the hydrogen gas concentration value from the sensor
    mq8.on("change", function () {
      // The sensor value is between 0 and 1023, so we need to map it to the range of hydrogen gas concentrations
      // In this case, the sensor has a sensitivity of 1000ppm and a resolution of 5ppm
      const concentration = (mq8.value * 5) / 1000;
      io.emit("raw-h2", concentration);

      console.log("Hydrogen gas concentration: " + concentration + "ppm");
    });
  });
};
