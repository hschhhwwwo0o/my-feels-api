import * as feathersAuthentication from "@feathersjs/authentication";
import * as local from "@feathersjs/authentication-local";
import { HookContext } from "@feathersjs/feathers";
import initialOwnerEditor from "./hooks";

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [
      authenticate("jwt"),
      async (ctx: HookContext) => {
        const user: any = ctx.params.user;

        if (user && user.email !== "my-feels@admin.com") {
          const ctxQuery = ctx.params.query ? ctx.params.query : {};

          const newQuery = user
            ? {
                ...ctxQuery,
                _id: String(user._id),
              }
            : {};

          ctx.params.query = newQuery;
          return ctx;
        }
        return ctx;
      },
    ],
    get: [
      authenticate("jwt"),
      (ctx: HookContext) => {
        initialOwnerEditor(ctx);
      },
    ],
    create: [hashPassword("password")],
    update: [
      hashPassword("password"),
      authenticate("jwt"),
      (ctx: HookContext) => {
        initialOwnerEditor(ctx);
      },
    ],
    patch: [
      hashPassword("password"),
      authenticate("jwt"),
      (ctx: HookContext) => {
        initialOwnerEditor(ctx);
      },
    ],
    remove: [
      authenticate("jwt"),
      (ctx: HookContext) => {
        initialOwnerEditor(ctx);
      },
    ],
  },

  after: {
    all: [protect("password")],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
