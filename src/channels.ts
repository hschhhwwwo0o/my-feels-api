import "@feathersjs/transport-commons";
import { HookContext } from "@feathersjs/feathers";
import { Application } from "./declarations";

export default function (app: Application): void {
  if (typeof app.channel !== "function") {
    return;
  }

  app.on("connection", (connection: any): void => {
    app.channel("anonymous").join(connection);
  });

  app.on("login", (authResult: any, { connection }: any): void => {
    if (connection) {
      app.channel("anonymous").leave(connection);
      app.channel("authenticated").join(connection);
    }
  });

  app.publish((data: any, hook: HookContext) => {
    return app.channel("authenticated");
  });
}
