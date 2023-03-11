import { HardwareMiddleware } from "./../middlewares/board.middleware";
import { Request, Response } from "express";
import { Thermometer } from "johnny-five";
import { io } from "../server";

export const temperatureSensorGet = async (req: Request, res: Response) => {
  HardwareMiddleware(() => {
    // Initialize the DS18B20 temperature sensor
    const thermometer = new Thermometer({
      controller: "DS18B20",
      pin: 2, // The data pin of the sensor connected to the board
    });

    // Read the temperature data from the sensor every second
    thermometer.on("change", () => {
      const temperature = {
        celsius: thermometer.celsius,
        fahrenheit: thermometer.fahrenheit,
        kelvin: thermometer.kelvin,
      };
      io.emit("temperature", temperature);

      console.log(`Temperature: ${thermometer.celsius}°C`);
    });
  });
};
