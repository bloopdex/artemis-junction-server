import mongoose from "mongoose";
import config from "./server.config";

const ConnectDB = async () => {
  const MONGO_HOST = config.host;

  if (!MONGO_HOST) throw new Error("NO MONGO_URI IN THE ENVIRONMENT");

  return mongoose.connect(MONGO_HOST);
};

export default ConnectDB;
