"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    const modelName = "users";
    const mongooseClient = app.get("mongooseClient");
    const schema = new mongooseClient.Schema({
        email: { type: String, unique: true },
        password: { type: String },
        firstName: { type: String, unique: false },
        lastName: { type: String, unique: false },
        theme: { type: String, unique: false, lowercase: true },
    }, {
        timestamps: true,
    });
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
}
exports.default = default_1;
