"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const feathers_mongoose_1 = require("feathers-mongoose");
class Users extends feathers_mongoose_1.Service {
    constructor(options, app) {
        super(options);
    }
}
exports.Users = Users;
