import { Server } from "http";
import logger from "./logger";
import app from "./app";

require("dotenv").config();

const port: string = process.env.PORT || app.get("port");
const host: string = process.env.HOST || app.get("host");

const server: Server = app.listen(port);

process.on("unhandledRejection", (reason, p) =>
  logger.error("Unhandled Rejection at: Promise ", p, reason)
);

server.on("listening", () =>
  logger.info("Feathers application started on http://%s:%d", host, port)
);
