import { Schema, model, InferSchemaType } from "mongoose";
import { UserType } from "../../schemas/auth.schema";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 6,
  },
  confirmPassword: {
    type: String,
    required: true,
    minlenght: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profilePicture: {
    type: String,
    default: "",
    required: false,
  },
});

const User = model<UserType>("User", userSchema);

export { User, userSchema };
