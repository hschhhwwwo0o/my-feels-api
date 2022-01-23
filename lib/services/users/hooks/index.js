"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function initialOwnerEditor(ctx) {
    const user = ctx.params.user;
    if (user) {
        const query = user
            ? {
                _id: String(user._id),
            }
            : {};
        ctx.params.query = query;
        return ctx;
    }
    return ctx;
}
exports.default = initialOwnerEditor;
