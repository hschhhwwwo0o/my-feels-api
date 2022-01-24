"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedbacks_class_1 = require("./feedbacks.class");
const feedbacks_model_1 = __importDefault(require("../../models/feedbacks.model"));
const feedbacks_hooks_1 = __importDefault(require("./feedbacks.hooks"));
function default_1(app) {
    const options = {
        Model: (0, feedbacks_model_1.default)(app),
        paginate: app.get("paginate"),
    };
    app.use("/feedbacks", new feedbacks_class_1.Feedbacks(options, app));
    const service = app.service("feedbacks");
    service.hooks(feedbacks_hooks_1.default);
}
exports.default = default_1;
