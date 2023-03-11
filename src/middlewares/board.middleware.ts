import { Board } from "johnny-five";

export const HardwareMiddleware = (functionality: Function) => {
  const board = new Board();

  board.on("ready", () => {
    functionality();
  });
};
