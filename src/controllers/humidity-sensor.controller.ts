import { HardwareMiddleware } from "./../middlewares/board.middleware";
import { io } from "../server";

import { Request, Response } from "express";
import { Sensor, DHT } from "johnny-five";
const DHT = require("johnny-five").DHT;

export const humiditySensorGet = async (req: Request, res: Response) => {
  HardwareMiddleware(() => {
    const dht = new DHT({
      controller: "DHT11_I2C_NANO_BACKPACK",
      pin: 0, // The data pin of the DHT11 sensor connected to the board
    });

    const gas = new Sensor({
      pin: "A0", // The analog pin of the MQ-2 gas sensor connected to the board
      freq: 5000, // Read the gas sensor data every 5 seconds
    });

    dht.on("change", () => {
      const humidity = dht.relativeHumidity.toFixed(2);
      io.emit("humidity", humidity);

      console.log("Humidity: " + humidity + "%");
    });
  });
};
