import dotenv from "dotenv";
dotenv.config();

const { PORT, MONGO_HOST, BCRYPT_PASSWORD, TOKEN_SECRET } = process.env;

export default {
  port: PORT || 5000,
  host: MONGO_HOST,
  pepper: BCRYPT_PASSWORD,
  tokenSecret: TOKEN_SECRET,
};
