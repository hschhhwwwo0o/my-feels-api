"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const feathers_mongoose_1 = require("feathers-mongoose");
class Notes extends feathers_mongoose_1.Service {
    constructor(options, app) {
        super(options);
    }
}
exports.Notes = Notes;
