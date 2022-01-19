import { HookContext } from "@feathersjs/feathers";
import * as authentication from "@feathersjs/authentication";

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [authenticate("jwt")],
    find: [
      async (ctx: HookContext) => {
        const user: any = ctx.params.user;

        const query = {
          ...ctx.params.query,
          authorID: String(user._id),
        };

        ctx.params.query = query;
        return ctx;
      },
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
