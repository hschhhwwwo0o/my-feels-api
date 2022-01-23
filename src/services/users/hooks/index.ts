import { HookContext } from "@feathersjs/feathers";

export default async function initialOwnerEditor(ctx: HookContext): Promise<HookContext> {
  const user: any = ctx.params.user;

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
