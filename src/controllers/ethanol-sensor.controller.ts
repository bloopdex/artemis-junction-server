import { HardwareMiddleware } from "./../middlewares/board.middleware";
import { io } from "../server";

import { Request, Response } from "express";
import { Sensor } from "johnny-five";

export const humiditySensorGet = async (req: Request, res: Response) => {
  HardwareMiddleware(() => {
    // Initialize the MQ-3 alcohol sensor
    const mq3 = new Sensor({
      pin: "A0", // The analog input pin connected to the sensor
      freq: 1000, // Read the sensor value every 1 second
      threshold: 10, // Trigger a "change" event when the sensor value changes by at least 10 units
    });

    // Read the ethanol concentration value from the sensor
    mq3.on("change", function () {
      // The sensor value is between 0 and 1023, so we need to map it to the range of ethanol concentrations
      // In this case, the sensor has a sensitivity of 200 to 10000ppm and a resolution of 1ppm
      const sensorValue = mq3.value;
      const concentration = (sensorValue * 98) / 1023 + 200;
      io.emit("ethanol", concentration);

      console.log("Ethanol concentration: " + concentration + "ppm");
    });
  });
};
