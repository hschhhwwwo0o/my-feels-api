import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Suggestions } from "./suggestions.class";
import createModel from "../../models/suggestions.model";
import hooks from "./suggestions.hooks";

declare module "../../declarations" {
  interface ServiceTypes {
    suggestions: Suggestions & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/suggestions", new Suggestions(options, app));

  const service = app.service("suggestions");

  service.hooks(hooks);
}
