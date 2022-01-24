"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("./users/users.service"));
const notes_service_1 = __importDefault(require("./notes/notes.service"));
const feedbacks_service_1 = __importDefault(require("./feedbacks/feedbacks.service"));
const suggestions_service_1 = __importDefault(require("./suggestions/suggestions.service"));
function default_1(app) {
    app.configure(users_service_1.default);
    app.configure(notes_service_1.default);
    app.configure(feedbacks_service_1.default);
    app.configure(suggestions_service_1.default);
}
exports.default = default_1;
