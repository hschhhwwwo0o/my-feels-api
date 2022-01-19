"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    level: "info",
    format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.simple()),
    transports: [new winston_1.transports.Console()],
});
exports.default = logger;
