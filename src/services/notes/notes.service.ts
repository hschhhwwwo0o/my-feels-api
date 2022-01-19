import { ServiceAddons } from "@feathersjs/feathers";
import { Application } from "../../declarations";
import { Notes } from "./notes.class";
import createModel from "../../models/notes.model";
import hooks from "./notes.hooks";

declare module "../../declarations" {
  interface ServiceTypes {
    notes: Notes & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get("paginate"),
  };

  app.use("/notes", new Notes(options, app));

  const service = app.service("notes");

  service.hooks(hooks);
}
