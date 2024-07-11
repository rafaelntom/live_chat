import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

export interface FormValues {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: "male" | "female";
}

export interface FormInputProps {
  label: string;
  name: Path<FormValues>;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  placeholder?: string;
  type?: string;
}

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface Conversation {
  _id: string;
  fullName: string;
  username: string;
  gender: "male" | "female";
  profilePicture: string;
}

export type ConversationListResponse = Conversation[];

export interface ConversationProps {
  conversation: Conversation;
}
