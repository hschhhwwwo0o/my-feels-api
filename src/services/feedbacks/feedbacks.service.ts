import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Feedbacks } from "./feedbacks.class";
import createModel from "../../models/feedbacks.model";
import hooks from "./feedbacks.hooks";

declare module "../../declarations" {
  interface ServiceTypes {
    feedbacks: Feedbacks & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/feedbacks", new Feedbacks(options, app));

  const service = app.service("feedbacks");

  service.hooks(hooks);
}
