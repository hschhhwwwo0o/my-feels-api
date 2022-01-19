import { Application } from "../declarations";
import { Model, Mongoose } from "mongoose";

export default function (app: Application): Model<any> {
  const modelName = "users";
  const mongooseClient: Mongoose = app.get("mongooseClient");

  const schema = new mongooseClient.Schema(
    {
      email: { type: String, unique: true },
      password: { type: String },
      firstName: { type: String, unique: false },
      lastName: { type: String, unique: false },
      theme: { type: String, unique: false, lowercase: true },
    },
    {
      timestamps: true,
    }
  );

  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }

  return mongooseClient.model<any>(modelName, schema);
}
