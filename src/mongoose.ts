import mongoose from "mongoose";
import { Application } from "./declarations";
import logger from "./logger";

require("dotenv").config();

export default function (app: Application): void {
  mongoose.connect(String(process.env.MONGODB)).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  app.set("mongooseClient", mongoose);
}
