"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "notes";
    const mongooseClient = app.get("mongooseClient");
    const { Schema } = mongooseClient;
    const schema = new Schema({
        title: { type: String, required: false },
        text: { type: String, required: false },
        authorID: { type: String, required: true },
        emojies: { type: Array, required: false },
        isPinned: { type: Boolean, required: false },
    }, {
        timestamps: true,
    });
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
}
exports.default = default_1;
