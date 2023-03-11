import { HardwareMiddleware } from "./../middlewares/board.middleware";
import { io } from "../server";
import { Request, Response } from "express";
import { Pin, Relay } from "johnny-five";

// TODO: Change This
export const fireDetectionPost = async (req: Request, res: Response) => {
  // Get the frame data and detection score from the request body
  const { frameData, detectionScore } = req.body;

  // If the detection score is above a certain threshold, activate the water sprayers
  if (detectionScore > 0.8) {
    io.emit("fire-detected", { message: "Fire detected!", type: "error" });

    HardwareMiddleware(() => {
      // Set up the pins connected to the relay module
      const relayPin = new Pin(10);

      // Create a relay object using the relay module pin
      const relay = new Relay(relayPin);

      // Set up a route to activate the water sprayers
      const duration = 1000; // 1 second
      relay.open();
      setTimeout(() => {
        relay.close();
      }, duration);
    });

    console.log("Water sprayers activated!");
  }

  // Send a response back to the AI model
  res.status(200).send("OK");
};
