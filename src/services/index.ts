import { Application } from "../declarations";

import users from "./users/users.service";
import notes from "./notes/notes.service";

export default function (app: Application): void {
  app.configure(users);
  app.configure(notes);
}
