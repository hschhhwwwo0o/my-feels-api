import { Application } from "../declarations";

import users from "./users/users.service";
import notes from "./notes/notes.service";

import feedbacks from "./feedbacks/feedbacks.service";

import suggestions from './suggestions/suggestions.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(notes);
  app.configure(feedbacks);
  app.configure(suggestions);
}
