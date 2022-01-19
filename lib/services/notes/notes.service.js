"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_class_1 = require("./notes.class");
const notes_model_1 = __importDefault(require("../../models/notes.model"));
const notes_hooks_1 = __importDefault(require("./notes.hooks"));
function default_1(app) {
    const options = {
        Model: (0, notes_model_1.default)(app),
        paginate: app.get("paginate"),
    };
    app.use("/notes", new notes_class_1.Notes(options, app));
    const service = app.service("notes");
    service.hooks(notes_hooks_1.default);
}
exports.default = default_1;
