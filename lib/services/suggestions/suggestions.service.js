"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const suggestions_class_1 = require("./suggestions.class");
const suggestions_model_1 = __importDefault(require("../../models/suggestions.model"));
const suggestions_hooks_1 = __importDefault(require("./suggestions.hooks"));
function default_1(app) {
    const options = {
        Model: (0, suggestions_model_1.default)(app),
        paginate: app.get("paginate"),
    };
    app.use("/suggestions", new suggestions_class_1.Suggestions(options, app));
    const service = app.service("suggestions");
    service.hooks(suggestions_hooks_1.default);
}
exports.default = default_1;
